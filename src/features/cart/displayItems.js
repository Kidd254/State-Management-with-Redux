import { useDispatch, useSelector } from 'react-redux';
import {add, remove} from './cartSlice';
import styles from '../../Styles/Display.module.css';

function Cart() {
  // Access the cartItems from the Redux store or state
  const cartItems = useSelector(state => state.cart.cartItems);
const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(add(item));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(remove(itemId));
  };

  return (
    <div className={styles.display}>
  
      <div className={styles.heading}>
      <h2>Cart Items:</h2>
      </div>
      {cartItems.map(item => (
        <div className= {styles.itemsContainer} key={item.id}>
          <div className={styles.columnone}>
              <p className={styles.title}>Title: {item.title}</p>
              <p className={styles.price}>Price: {item.price}</p>
              <img className={styles.image} src={item.img} alt={item.title} />
              <div className={styles.btnContainer}>
              <button className={styles.btn} onClick={handleAddItem}>Add</button><button className={styles.btn2}onClick={handleRemoveItem}>Remove</button>
              </div>
              </div>
             
              <div className={styles.column}>
              <p>Amount: {item.amount}</p>
              </div>
               </div>
          
      ))}
    </div>
  );
}


export default Cart;
