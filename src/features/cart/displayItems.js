import { useDispatch, useSelector } from 'react-redux';
import {add, remove} from './cartSlice';

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
    <div>
      <h2>Cart Items:</h2>
      {cartItems.map(item => (
        <><div key={item.id}>
              <p>Title: {item.title}</p>
              <p>Price: {item.price}</p>
              <img src={item.img} alt={item.title} />
              <p>Amount: {item.amount}</p>
          </div><button onClick={handleAddItem}>Add</button><button onClick={handleRemoveItem}>Remove</button></>
      ))}
    </div>
  );
}


export default Cart;
