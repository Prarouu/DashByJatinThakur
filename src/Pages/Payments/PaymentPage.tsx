import { columns } from "./Columns";
import type { Payment } from "./Columns";
import { DataTable } from "./data-table";
import { CardList } from "./CardList";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      customerName: "John Smith",
      date: "2024-03-15",
      paymentMethod: "Credit Card",
      description: "Monthly Subscription",
      category: "subscription",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@example.com",
      customerName: "Sarah Johnson",
      date: "2024-03-14",
      paymentMethod: "PayPal",
      description: "Annual Plan Upgrade",
      category: "upgrade",
    },
    {
      id: "489e1d43",
      amount: 150,
      status: "success",
      email: "test@example.com",
      customerName: "Michael Brown",
      date: "2024-03-13",
      paymentMethod: "Bank Transfer",
      description: "One-time Purchase",
      category: "one-time",
    },
    {
      id: "489e1d44",
      amount: 200,
      status: "failed",
      email: "user@example.com",
      customerName: "Emily Davis",
      date: "2024-03-12",
      paymentMethod: "Credit Card",
      description: "Premium Features",
      category: "subscription",
    },
    {
      id: "728ed52g",
      amount: 299.99,
      status: "success",
      email: "premium@example.com",
      customerName: "David Wilson",
      date: "2024-03-11",
      paymentMethod: "Stripe",
      description: "Enterprise License",
      category: "subscription",
    },
    {
      id: "489e1d45",
      amount: 75.5,
      status: "pending",
      email: "basic@example.com",
      customerName: "Lisa Anderson",
      date: "2024-03-10",
      paymentMethod: "PayPal",
      description: "Basic Plan",
      category: "subscription",
    },
    {
      id: "489e1d46",
      amount: 499.99,
      status: "processing",
      email: "enterprise@example.com",
      customerName: "Robert Taylor",
      date: "2024-03-09",
      paymentMethod: "Bank Transfer",
      description: "Enterprise Upgrade",
      category: "upgrade",
    },
    {
      id: "489e1d47",
      amount: 199.99,
      status: "success",
      email: "pro@example.com",
      customerName: "Jennifer Martinez",
      date: "2024-03-08",
      paymentMethod: "Credit Card",
      description: "Pro Features",
      category: "subscription",
    },
    {
      id: "489e1d48",
      amount: 149.99,
      status: "failed",
      email: "trial@example.com",
      customerName: "Thomas White",
      date: "2024-03-07",
      paymentMethod: "PayPal",
      description: "Trial Period",
      category: "subscription",
    },
    {
      id: "489e1d49",
      amount: 399.99,
      status: "success",
      email: "business@example.com",
      customerName: "Patricia Lee",
      date: "2024-03-06",
      paymentMethod: "Stripe",
      description: "Business License",
      category: "subscription",
    },
    {
      id: "489e1d50",
      amount: 89.99,
      status: "pending",
      email: "starter@example.com",
      customerName: "James Clark",
      date: "2024-03-05",
      paymentMethod: "Credit Card",
      description: "Starter Package",
      category: "one-time",
    },
    {
      id: "489e1d51",
      amount: 599.99,
      status: "processing",
      email: "enterprise-plus@example.com",
      customerName: "Elizabeth Hall",
      date: "2024-03-04",
      paymentMethod: "Bank Transfer",
      description: "Enterprise Plus",
      category: "upgrade",
    },
    {
      id: "489e1d52",
      amount: 249.99,
      status: "success",
      email: "professional@example.com",
      customerName: "Daniel Moore",
      date: "2024-03-03",
      paymentMethod: "Stripe",
      description: "Professional License",
      category: "subscription",
    },
    {
      id: "489e1d53",
      amount: 179.99,
      status: "failed",
      email: "standard@example.com",
      customerName: "Nancy Allen",
      date: "2024-03-02",
      paymentMethod: "PayPal",
      description: "Standard Plan",
      category: "subscription",
    },
    {
      id: "489e1d54",
      amount: 349.99,
      status: "success",
      email: "business-pro@example.com",
      customerName: "Christopher Young",
      date: "2024-03-01",
      paymentMethod: "Credit Card",
      description: "Business Pro Upgrade",
      category: "upgrade",
    },
  ];
}

export default function TableSection() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <h2 className="text-2xl font-semibold tracking-tight">Payments</h2>
          <p className="text-sm text-muted-foreground">
            Manage your payment records and transactions.
          </p>
        </div>
        <div className="p-6 pt-0">
          <Tabs defaultValue="table" className="space-y-4">
            <TabsList>
              <TabsTrigger value="table">Table View</TabsTrigger>
              <TabsTrigger value="cards">Card View</TabsTrigger>
            </TabsList>
            <TabsContent value="table" className="space-y-4">
              <DataTable columns={columns} data={data} />
            </TabsContent>
            <TabsContent value="cards" className="space-y-4">
              <CardList data={data} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
