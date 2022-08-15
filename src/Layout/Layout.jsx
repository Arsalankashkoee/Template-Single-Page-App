import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
