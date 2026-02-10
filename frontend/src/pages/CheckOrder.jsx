import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { orderApi } from '../services/api';
import OrderStatusCard from '../components/OrderStatusCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { Button, Input } from '../components/ui';
import { Search, PackageSearch, CreditCard, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { initializeMidtrans } from '../utils/midtransHelper';
import { 
  getWhatsAppLink, 
  formatRupiah, 
  formatDate, 
  getPaymentStatusInfo, 
  getSellerStatusInfo 
} from '../utils/formatters';
import toast from 'react-hot-toast';

export default function CheckOrder() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [purchaseCode, setPurchaseCode] = useState('');
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

  // Auto-load if code is in URL query params
  useEffect(() => {
    const codeFromUrl = searchParams.get('code');
    if (codeFromUrl) {
      setPurchaseCode(codeFromUrl.toUpperCase());
      handleSearch(codeFromUrl.toUpperCase());
    }
    
    // Initialize Midtrans mobile enhancements
    if (window.snap) {
      initializeMidtrans();
    } else {
      // Wait for Snap to load
      const checkSnap = setInterval(() => {
        if (window.snap) {
          initializeMidtrans();
          clearInterval(checkSnap);
        }
      }, 500);
      
      setTimeout(() => clearInterval(checkSnap), 10000);
    }
  }, [searchParams]);

  const handleSearch = async (code) => {
    if (!code.trim()) return;

    setOrder(null);
    setLoading(true);

    try {
      const cleanCode = code.toUpperCase().trim();
      const response = await orderApi.getStatus(cleanCode);
      setOrder(response.data.data);
      toast.success('Pesanan ditemukan!');
    } catch (error) {
      toast.error('Pesanan tidak ditemukan. Pastikan kode pembelian benar.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSearch(purchaseCode);
  };

            </motion.div>
          )}
        </AnimatePresence>
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
