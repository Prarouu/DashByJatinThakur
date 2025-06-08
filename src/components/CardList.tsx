import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "lucide-react";

const popularContent = [
  {
    id: 1,
    title: "JavaScript Tutorial",
    badge: "Coding",
    image:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 4300,
  },
  {
    id: 2,
    title: "Tech Trends 2025",
    badge: "Tech",
    image:
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3200,
  },
  {
    id: 3,
    title: "The Future of AI",
    badge: "AI",
    image:
      "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2400,
  },
  {
    id: 4,
    title: "React Hooks Explained",
    badge: "Coding",
    image:
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1500,
  },
  {
    id: 5,
    title: "Image Generation with AI",
    badge: "AI",
    image:
      "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1200,
  },
];

export default function CardList() {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Popular Content</CardTitle>
        <CardAction>
          <Button variant="ghost">
            <a href="/">
              <Link />
            </a>
          </Button>
        </CardAction>
      </CardHeader>
      <ScrollArea className="h-auto w-[350]">
        <CardContent>
          {popularContent.map((item) => (
            <Card key={item.id} className="mb-4">
              <CardContent className="flex justify-start items-center">
                <img
                  src={item.image}
                  className="w-12 h-12 object-cover rounded-sm"
                  alt=""
                />
                <div className="pl-4 space-y-2">
                  <h2 className="text-sm">{item.title}</h2>
                  <div className=" flex justify-start items-center">
                    <Badge variant="secondary" className="mr-4">
                      {item.badge}
                    </Badge>
                    {item.count}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  );
}
