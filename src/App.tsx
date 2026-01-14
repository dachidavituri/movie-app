import { ThemeProvider } from "./components/theme/theme-provider";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
