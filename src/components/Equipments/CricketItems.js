import { useContext } from 'react';
import ItemForm from './ItemForm';
import classes from './CricketItems.module.css';
import CartContext from '../../store/cart-context';
const CricketItem=props=>{
    const cartCtx=useContext(CartContext);
    const price = `$${props.price}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        });
    };

    return(
        <li className={classes.item}>
            <div>
                <h3 >{props.name}</h3>
                <div className={classes.price}>{price}</div>
            </div>
            <div >
                <ItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
};
export default CricketItem;