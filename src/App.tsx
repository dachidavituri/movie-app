import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./components/theme/theme-provider";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster position="top-right" reverseOrder={false} />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
