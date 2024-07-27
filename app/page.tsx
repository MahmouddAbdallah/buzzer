import Header from "./components/Header";
import WelcomeTo from "./components/WelcomeTo";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Restaurants from "./components/Restaurants";
import Gallary from "./components/Gallary";

export default function Home() {
  return (
    <>
      <Header />
      <WelcomeTo />
      <Restaurants />
      <Services />
      <Gallary />
      <Footer />
    </>
  );
}
