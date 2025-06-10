import "./App.css";
import Header from "./components/Header";
import SidebarComponent from "./components/sidebarComponent";
import Dashboard from "./Pages/Dashboard";
import { SidebarProvider } from "./components/ui/sidebar";
import { ThemeProvider } from "./components/Providers/Theme-Provider";
import { Separator } from "./components/ui/separator";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <SidebarProvider>
        <SidebarComponent />
        <main className="w-full h-screen overflow-y-auto py-8 md:p-6">
          <Header />
          <Separator className="mt-8" />
          <Dashboard />
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
