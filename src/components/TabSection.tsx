
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";

interface TabSectionProps {
  tabs: Array<{
    name: string;
    value: string;
    products: Array<{
      id: string;
      name: string;
      price: number;
      originalPrice?: number;
      rating: number;
      reviews: number;
      image: string;
      brand: string;
      isNew?: boolean;
      isTrending?: boolean;
    }>;
  }>;
}

const TabSection = ({ tabs }: TabSectionProps) => {
  return (
    <section className="px-2 sm:px-4 lg:px-6">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <TabsList className="grid w-auto grid-cols-4 h-8 sm:h-10">
              {tabs.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value} 
                  className="px-3 sm:px-4 text-xs sm:text-sm data-[state=active]:bg-brand-pink data-[state=active]:text-white"
                >
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <Button variant="outline" size="sm" className="text-xs sm:text-sm border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white">
              View All
            </Button>
          </div>
          
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
                {tab.products.slice(0, 8).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TabSection;
