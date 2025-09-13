import Header from "./components/Header";

import RestaurantsHome from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <RestaurantsHome />
      <Footer />
    </div>
  );
};

export default AppLayout;
