import HeroBanner from "./components/features/promotions/HeroBanner/HeroBanner";
import GridProduct from "./components/features/products/GridProduct/GridProduct";
import GridCategory from "./components/features/categories/GridCategory/GridCategory";
import Countdown from "./components/features/promotions/Countdown/Countdown";

function App() {

  return (
    <>
      <Countdown title="Todas las velas al 2x1 Última Oportunidad" bgColor1="#ff7e5f" bgColor2="#feb47b" colorText="#fff"/>
      <HeroBanner 
        title="Ignite your curiosity" 
        description="Meet the latest collection of emerging brands with products and stories that help you see possibilities in a whole new light."
        link="https://www.google.com/"
        image="https://media.ulta.com/i/ulta/BG_WK2425_BTSHub_FullWidthCompact_Hero_XL?w=2000&$background-defaultLight$&fmt=auto"
      />
      <GridProduct title="Your next fave is only at Ulta" url="https://www.ulta.com/" textLink="Shop all" />
      <GridCategory title="Summer-ready beauty" bgColor="#f6f6f6" />
    </>
  )
}

export default App
