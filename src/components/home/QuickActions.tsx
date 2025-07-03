
import { Button } from "@/components/ui/button";
import { Search, Gift, Truck, Headphones } from "lucide-react";

const QuickActions = () => {
  const actions = [
    { icon: Search, label: "Search", color: "bg-blue-500" },
    { icon: Gift, label: "Offers", color: "bg-pink-500" },
    { icon: Truck, label: "Track", color: "bg-green-500" },
    { icon: Headphones, label: "Support", color: "bg-purple-500" }
  ];

  return (
    <section className="px-3">
      <div className="bg-white rounded-lg p-4">
        <div className="grid grid-cols-4 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="flex flex-col items-center gap-2 h-auto py-3"
            >
              <div className={`w-8 h-8 rounded-full ${action.color} flex items-center justify-center`}>
                <action.icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs">{action.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
