import "./App.css";
import ProductList from "./Components/productList";
import { CatalogueProvider } from "./Components/providers/catalogue";
import { CartProvider } from "./Components/providers/cart";
function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <CartProvider>
          <ProductList type="catalogue" />
          <ProductList type="cart" />
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
