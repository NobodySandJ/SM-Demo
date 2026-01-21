import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { orderApi } from '../services/api';
import OrderStatusCard from '../components/OrderStatusCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { Button, Input } from '../components/ui';
import { Search, PackageSearch } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function CheckOrder() {
  const navigate = useNavigate();
  const [purchaseCode, setPurchaseCode] = useState('');
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!purchaseCode.trim()) return;

    setOrder(null);
    setLoading(true);

    try {
      const code = purchaseCode.toUpperCase().trim();
      const response = await orderApi.getStatus(code);
      setOrder(response.data.data);
      toast.success('Pesanan ditemukan!');
    } catch (error) {
      toast.error('Pesanan tidak ditemukan. Pastikan kode pembelian benar.');
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetail = () => {
    if (order) {
      navigate(`/order/${order.purchase_code}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-28 pb-12">
      <div className="container mx-auto px-4 max-w-lg">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-500/50"
          >
            <PackageSearch size={40} className="text-white" />
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Cek Status <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Pesanan</span>
          </h1>
          <p className="text-slate-400">Masukkan kode pesanan Anda (Contoh: SM-XXXXXXXX)</p>
        </div>

        {/* Search Form */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700 shadow-xl mb-6"
        >
          <form onSubmit={handleSubmit} className="mb-6">
            <label className="block text-sm font-semibold text-slate-300 mb-3">
              Kode Pembelian (UID)
            </label>
            <div className="flex gap-3">
              <Input
                type="text"
                value={purchaseCode}
                onChange={(e) => setPurchaseCode(e.target.value.toUpperCase())}
                placeholder="SM-ABC12345"
                className="flex-1 bg-slate-900/50 border-slate-600 text-white font-mono text-lg tracking-wider uppercase placeholder:text-slate-600 focus:border-indigo-500"
                maxLength={12}
              />
              <Button 
                type="submit" 
                disabled={loading ||!purchaseCode.trim()} 
                className="px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg"
              >
                {loading ? <LoadingSpinner size="sm" /> : <Search size={20} />}
              </Button>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              💡 Kode pembelian dikirim via email/WhatsApp setelah pembayaran
            </p>
          </form>

          {order && (
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
            >
              <OrderStatusCard order={order} onViewDetail={handleViewDetail} />
            </motion.div>
          )}
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 text-center"
        >
          <p className="text-slate-300 text-sm">
            Tidak menemukan kode pesanan?{' '}
            <a 
              href="https://wa.me/6282352835382" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-semibold underline"
            >
              Hubungi Support
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
