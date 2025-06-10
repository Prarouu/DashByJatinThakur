import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";
import { Badge } from "./ui/badge";

export default function SectionCards() {
  return (
    <Card className="p-6 rounded-lg grid-cols-1 md:grid-cols-2 lg:col-span-2 grid gap-4">
      <Card>
        <CardHeader>
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="text-4xl mt-2">$1,250.00</CardTitle>
          <CardAction className="flex-wrap justify-end">
            <Badge
              variant="secondary"
              className="whitespace-nowrap inline-flex items-center gap-1"
            >
              <TrendingUp className="size-4" /> +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription>New Customers</CardDescription>
          <CardTitle className="text-4xl mt-2">1,234</CardTitle>
          <CardAction className="flex-wrap justify-end">
            <Badge
              variant="secondary"
              className="whitespace-nowrap inline-flex items-center gap-1"
            >
              <TrendingDown className="size-4" /> -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down 20% this period <TrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Acquisition needs attention
          </div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription>Active Accounts</CardDescription>
          <CardTitle className="text-4xl mt-2">45,678</CardTitle>
          <CardAction className="flex-wrap justify-end">
            <Badge
              variant="secondary"
              className="whitespace-nowrap inline-flex items-center gap-1"
            >
              <TrendingUp className="size-4" /> +16.8%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Engagement exceed targets</div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription>Growth Rate</CardDescription>
          <CardTitle className="text-4xl mt-2">4.5%</CardTitle>
          <CardAction className="flex-wrap justify-end">
            <Badge
              variant="secondary"
              className="whitespace-nowrap inline-flex items-center gap-1"
            >
              <TrendingUp className="size-4" /> +4.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Steady performance increase <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Meets growth projections</div>
        </CardFooter>
      </Card>
    </Card>
  );
}
