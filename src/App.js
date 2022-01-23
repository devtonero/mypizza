import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./globalstyle";
import BigImage from "./component/bigimage/bigimage";
import Product from "./component/pizzas/pizzas";
import { Data, DataTwo } from "./component/pizzas/pizza.data";
import Feature from "./component/feature/feature";
import Footer from "./component/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <BigImage />
      <Product heading="Choose Your Favourite" ProductData={Data} />
      <Feature />
      <Product heading="Italian Kitchen" ProductData={DataTwo} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
