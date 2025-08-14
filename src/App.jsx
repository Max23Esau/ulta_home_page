import HeroBanner from "./components/HeroBanner/HeroBanner";
import ProductGrid from "./components/ProductGrid/ProductGrid";

function App() {

  return (
    <>
    <HeroBanner 
      title="Ignite your curiosity" 
      description="Meet the latest collection of emerging brands with products and stories that help you see possibilities in a whole new light."
      link="https://www.google.com/"
      image="https://media.ulta.com/i/ulta/SPRK_WK2725_Hero_XL?w=2000&$background-defaultLight$&fmt=auto"
    />
    <ProductGrid title="Your next fave is only at Ulta" url="https://www.ulta.com/" textLink="Shop all" />
    </>
  )
}

export default App
