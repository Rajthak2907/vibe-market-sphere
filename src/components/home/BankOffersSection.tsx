
interface Offer {
  id: string;
  bank: string;
  offer: string;
  code: string;
  image: string;
}

interface BankOffersSectionProps {
  offers: Offer[];
}

const BankOffersSection = ({ offers }: BankOffersSectionProps) => {
  return (
    <section className="px-3">
      <div className="bg-white rounded-lg p-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800">🏦 Bank Offers</h2>
          <p className="text-sm text-gray-600 mt-1">Exclusive bank discounts</p>
        </div>

        <div className="space-y-3">
          {offers.map((offer) => (
            <div key={offer.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <img src={offer.image} alt={offer.bank} className="w-12 h-8 object-contain" />
              <div className="flex-1">
                <p className="font-semibold text-sm">{offer.bank}</p>
                <p className="text-xs text-gray-600">{offer.offer}</p>
                <p className="text-xs text-blue-600">Code: {offer.code}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BankOffersSection;
