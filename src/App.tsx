import "./App.css";
import Header from "./components/Header";
import SidebarComponent from "./components/sidebarComponent";
import Dashboard from "./Pages/Dashboard";
import { SidebarProvider } from "./components/ui/sidebar";
import { ThemeProvider } from "./components/Providers/Theme-Provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <SidebarProvider>
        <SidebarComponent />
        <main className="w-full h-auto p-8">
          <Header />
          <Dashboard />
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
