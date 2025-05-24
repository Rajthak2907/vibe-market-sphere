
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
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <TabsList className="grid w-auto grid-cols-4">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value} className="px-6">
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
