import "./assets/css/fonts.css";
import "./assets/css/reset.css";
import "./assets/css/common.css";

import "./assets/css/header.css";
import "./assets/css/slider.css";
import "./assets/css/image.css";
import "./assets/css/imageText.css";
import "./assets/css/card.css";
import "./assets/css/banner.css";
import "./assets/css/text.css";
import "./assets/css/footer.css";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Image from "./components/Image";
import ImageText from "./components/ImageText";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Text from "./components/Text";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Image />
      <ImageText />
      <Card />
      <Banner />
      <Text />
      <Footer />
    </>
  );
}

export default App;
