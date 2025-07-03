
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface Coupon {
  id: string;
  code: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
}

interface OffersAndCouponsSectionProps {
  coupons: Coupon[];
}

const OffersAndCouponsSection = ({ coupons }: OffersAndCouponsSectionProps) => {
  const copyCouponCode = (code: string) => {
    navigator.clipboard.writeText(code);
    // You could add a toast notification here
  };

  return (
    <section className="px-3">
      <div className="bg-white rounded-lg p-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800">🎫 Offers & Coupons</h2>
          <p className="text-sm text-gray-600 mt-1">Save more with exclusive deals!</p>
        </div>

        <div className="space-y-3">
          {coupons.map((coupon) => (
            <div
              key={coupon.id}
              className="bg-gradient-to-r from-obeyyo-blue/10 to-obeyyo-pink/10 rounded-lg p-4 border border-obeyyo-blue/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{coupon.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{coupon.description}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className="bg-obeyyo-red text-white px-2 py-1 rounded text-xs font-semibold">
                      {coupon.discount}
                    </span>
                    <span className="text-xs text-gray-500">Valid till {coupon.validUntil}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <div className="bg-white border-2 border-dashed border-obeyyo-blue rounded px-3 py-1">
                    <span className="font-mono font-bold text-obeyyo-blue">{coupon.code}</span>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => copyCouponCode(coupon.code)}
                    className="bg-obeyyo-blue hover:bg-obeyyo-blue/90 text-white px-3 py-1 text-xs"
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    Copy
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersAndCouponsSection;
