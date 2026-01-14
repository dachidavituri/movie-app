import Header from "&/base/header";
import Footer from "&/base/footer";
import PageOutlet from "&/base/page-outlet";
import { Outlet } from "react-router";
const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <PageOutlet>
        <Outlet />
      </PageOutlet>
      <Footer />
    </div>
  );
};
export default Layout;
