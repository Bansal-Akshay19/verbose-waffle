import { useState } from "react";
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Items from './components/Equipments/Items';
import CartProvider from "./store/CartProvider";
function App(){

  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler = ()=>{
    setCartIsShown(true);
  };

  const hideCartHandler = ()=>{
    setCartIsShown(false);
    console.log("close cart");
  };

  return(
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
       <Header onShowCart={showCartHandler}/>
       <main>
         <Items/>
       </main>
     </CartProvider>
  );
}

export default App;