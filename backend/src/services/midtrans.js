const config = require('../config');
const midtransClient = require('midtrans-client');
const { v4: uuidv4 } = require('uuid');

class DummyMidtransService {
    constructor() {
        console.log('⚠️  USING DUMMY MIDTRANS SERVICE (No API Keys required)');
    }

    async createTransaction(orderId, amount, customerDetails, itemDetails) {
        console.log(`[DUMMY] Creating transaction for ${orderId}: ${amount}`);

        // Simulate Snap Token
        const snapToken = `DUMMY-TOKEN-${uuidv4()}`;
        const redirectUrl = `http://localhost:5173/order/${orderId}?status=pending`; // This won't actually be used by Snap.js but provided for structure

        return {
            token: snapToken,
            redirect_url: redirectUrl
        };
    }

    async verifyNotification(notification) {
        console.log('[DUMMY] Verifying notification:', notification);
        return {
            ...notification,
            transaction_status: notification.transaction_status || 'settlement',
            fraud_status: 'accept'
        };
    }
}

class RealMidtransService {
    constructor() {
        this.snap = new midtransClient.Snap({
            isProduction: config.midtrans.isProduction,
            serverKey: config.midtrans.serverKey,
            clientKey: config.midtrans.clientKey,
        });

        this.core = new midtransClient.CoreApi({
            isProduction: config.midtrans.isProduction,
            serverKey: config.midtrans.serverKey,
            clientKey: config.midtrans.clientKey,
        });
    }

    async createTransaction(orderId, amount, customerDetails, itemDetails) {
        const parameter = {
            transaction_details: {
                order_id: orderId,
                gross_amount: amount,
            },
            credit_card: {
                secure: true,
            },
            customer_details: customerDetails,
            item_details: itemDetails,
        };

        return this.snap.createTransaction(parameter);
    }

    async verifyNotification(notification) {
        return this.core.transaction.notification(notification);
    }

    async getTransactionStatus(orderId) {
        return this.core.transaction.status(orderId);
    }
}

// Export Dummy service if keys are missing or contain placeholders
const useDummy =
    !config.midtrans.serverKey ||
    config.midtrans.serverKey.includes('your_') ||
    config.midtrans.serverKey === 'SB-Mid-server-xxxx';

module.exports = useDummy ? new DummyMidtransService() : new RealMidtransService();
