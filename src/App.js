import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
        <Cart />
      </main>
    </>
  );
}

export default App;
