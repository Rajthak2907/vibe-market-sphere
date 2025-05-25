
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleTabClick = (tabValue: string) => {
    if (tabValue === "men") {
      navigate("/men");
    } else if (tabValue === "women") {
      navigate("/women");
    } else if (tabValue === "kids") {
      navigate("/kids");
    }
    // Don't navigate for "all" tab - stay on current page
  };

  return (
    <section className="px-3 sm:px-4 lg:px-6 py-2">
      <div className="flex items-center justify-between mb-4">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex items-center justify-between mb-4">
            <TabsList className="grid w-auto grid-cols-4 h-10 sm:h-12 bg-gray-100 rounded-full p-1">
              {tabs.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value} 
                  onClick={() => handleTabClick(tab.value)}
                  className="px-4 sm:px-6 text-sm sm:text-base font-medium data-[state=active]:bg-white data-[state=active]:text-[#FF6B9D] data-[state=active]:shadow-sm rounded-full transition-all"
                >
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <Button variant="outline" size="sm" className="text-sm border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-full ml-4">
              View All
            </Button>
          </div>
          
          {/* Only show content for "all" tab since other tabs will navigate away */}
          <TabsContent value="all">
            {/* No products grid here - removed as requested */}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TabSection;
