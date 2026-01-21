import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, CheckCircle, Smartphone, User } from 'lucide-react';
import { orderApi } from '../services/api';
import { Input } from '../components/ui';
import toast from 'react-hot-toast';

export default function Checkout() {
  const { cart, removeFromCart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [results, setResults] = useState([]); 
  const [completed, setCompleted] = useState(false);
  
  // Buyer Info State
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');

  const handleProcessOrder = async () => {
    if (cart.length === 0) return;
    
    // Validations
    if (!buyerName || buyerName.trim().length < 3) {
      toast.error('Mohon isi nama lengkap Anda (min 3 karakter)');
      return;
    }
    if (!buyerPhone || buyerPhone.length < 10) {
      toast.error('Mohon masukkan nomor WhatsApp yang valid (min 10 digit)');
      return;
    }

    setProcessing(true);
    setResults([]);

    const orderResults = [];
    
    // Process items sequentially
    for (const item of cart) {
      try {
        const orderData = {
          service_id: item.id,
          target_link: item.target_link,
          quantity: item.quantity,
          buyer_name: buyerName, // Include Name
          buyer_phone: buyerPhone, // Include Phone
          admin_fee: 0 
        };
        
        await orderApi.create(orderData);
        orderResults.push({ name: item.name, status: 'success' });
      } catch (error) {
        console.error(`Failed to order ${item.name}`, error);
        orderResults.push({ 
            name: item.name, 
            status: 'error', 
            message: error.response?.data?.message || 'Gagal memproses' 
        });
      }
    }

    setResults(orderResults);
    setProcessing(false);
    setCompleted(true);
    clearCart();
  };

  if (completed) {
    return (
      <div className="min-h-screen bg-slate-900 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-2xl">
           <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 text-center animate-fade-in">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                <CheckCircle size={40} className="text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Proses Selesai</h2>
              <p className="text-slate-400 mb-8">Terima kasih, {buyerName}! Berikut laporan pesanan Anda:</p>

              <div className="space-y-3 mb-8 text-left">
                {results.map((res, i) => (
                  <div key={i} className={`p-4 rounded-xl border flex items-center justify-between ${
                    res.status === 'success' 
                      ? 'bg-green-500/10 border-green-500/20' 
                      : 'bg-red-500/10 border-red-500/20'
                  }`}>
                     <span className="text-white font-medium truncate flex-1 pr-4">{res.name}</span>
                     <span className={`text-xs font-bold px-2 py-1 rounded ${
                       res.status === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                     }`}>
                       {res.status === 'success' ? 'BERHASIL' : 'GAGAL'}
                     </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                 <button 
                   onClick={() => navigate('/products')}
                   className="px-6 py-3 bg-slate-700 text-white rounded-xl font-semibold hover:bg-slate-600 transition-colors"
                 >
                   Kembali Belanja
                 </button>
                 <button 
                   onClick={() => navigate('/cek-pesanan')}
                   className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-500 hover:to-purple-500 transition-colors shadow-lg"
                 >
                   Cek Status
                 </button>
              </div>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Kembali</span>
        </button>

        <h1 className="text-3xl font-bold text-white mb-8">Checkout Pesanan</h1>

        <div className="grid md:grid-cols-3 gap-8">
           {/* Cart List */}
           <div className="md:col-span-2 space-y-4">
              {cart.length === 0 ? (
                 <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 text-center">
                    <p className="text-slate-400">Keranjang masih kosong.</p>
                    <button 
                      onClick={() => navigate('/products')}
                      className="mt-4 text-indigo-400 font-semibold hover:underline"
                    >
                      Mulai Belanja
                    </button>
                 </div>
              ) : (
                cart.map((item) => (
                   <div key={item.uniqueId} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex gap-4">
                      <div className="hidden sm:flex w-16 h-16 bg-slate-900 rounded-xl items-center justify-center border border-slate-700 shrink-0">
                         <span className="text-xs font-bold text-slate-500 uppercase text-center px-1">{item.platform}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                         <h3 className="text-white font-semibold mb-1 truncate">{item.name}</h3>
                         <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-slate-400 mb-2">
                           <div className="flex items-center gap-2">
                             <span className="bg-slate-900 px-2 py-0.5 rounded text-xs">Qty: {item.quantity}</span>
                             <span className="hidden sm:inline text-slate-600">•</span>
                           </div>
                           <span className="truncate w-full sm:max-w-[200px]" title={item.target_link}>{item.target_link}</span>
                         </div>
                         <p className="text-indigo-400 font-bold">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.uniqueId)}
                        className="text-slate-500 hover:text-red-400 transition-colors h-fit pl-2"
                      >
                        <Trash2 size={20} />
                      </button>
                   </div>
                ))
              )}
           </div>

           {/* Contact & Summary */}
           <div className="md:col-span-1">
              <div className="space-y-6 sticky top-28">
                 
                 {/* Contact Info Input */}
                 <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
                       <User size={20} className="text-indigo-400" />
                       Data Pembeli
                    </h3>
                    
                    <div className="space-y-1">
                       <label className="text-sm font-semibold text-slate-400">Nama Lengkap</label>
                       <Input
                         value={buyerName}
                         onChange={(e) => setBuyerName(e.target.value)} 
                         placeholder="Nama Anda"
                         className="bg-slate-900 border-slate-600 focus:bg-slate-800"
                         required
                       />
                    </div>
                    
                    <div className="space-y-1">
                       <label className="text-sm font-semibold text-slate-400">Nomor WhatsApp</label>
                       <Input
                         value={buyerPhone}
                         onChange={(e) => setBuyerPhone(e.target.value.replace(/[^0-9]/g, ''))} // Numbers only
                         placeholder="08xxxxxxxxxx"
                         className="bg-slate-900 border-slate-600 focus:bg-slate-800"
                         type="tel"
                         required
                       />
                       <p className="text-xs text-slate-500 mt-1 leading-snug">
                         Digunakan untuk konfirmasi pesanan jika ada kendala.
                       </p>
                    </div>
                 </div>

                 {/* Checkout Summary */}
                 <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                    <h3 className="text-xl font-bold text-white mb-4">Ringkasan</h3>
                    <div className="space-y-3 mb-6">
                       <div className="flex justify-between text-slate-400">
                          <span>Total Item</span>
                          <span>{cart.length}</span>
                       </div>
                       <div className="flex justify-between text-slate-400">
                          <span>Admin Fee</span>
                          <span>Rp 0</span>
                       </div>
                       <div className="h-px bg-slate-700 my-2"></div>
                       <div className="flex justify-between text-white font-bold text-lg">
                          <span>Total Akhir</span>
                          <span>Rp {cartTotal.toLocaleString('id-ID')}</span>
                       </div>
                    </div>

                    <button
                      onClick={handleProcessOrder}
                      disabled={processing || cart.length === 0}
                      className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/25 hover:from-indigo-500 hover:to-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                    >
                      {processing ? (
                        <>Memproses...</>
                      ) : (
                        <>Bayar Sekarang</>
                      )}
                    </button>
                    
                    <p className="text-xs text-slate-500 text-center mt-4">
                       Data aman & privasi terjaga.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
