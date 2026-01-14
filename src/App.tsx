import Layout from "./components/layout";
import { ThemeProvider } from "./components/theme/theme-provider";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout />
    </ThemeProvider>
  );
};

export default App;
