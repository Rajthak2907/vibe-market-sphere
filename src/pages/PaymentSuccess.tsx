import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentSuccess = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <CheckCircle className="w-24 h-24 text-green-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
        <p className="text-gray-600 text-center mb-6">
          Thank you for your order. Your payment has been processed successfully.
        </p>
        <Link to="/">
          <Button className="bg-gradient-to-r from-obeyyo-pink to-obeyyo-blue text-white">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default PaymentSuccess;

