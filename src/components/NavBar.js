import { AiOutlineShoppingCart } from "react-icons/ai";
import {useSelector} from 'react-redux';
import styles from '../Styles/Nav.module.css';

const Navbar = () => {
    const { amount } = useSelector ((state) => state.cart)
    return (
        <nav className={styles.nav}>
        <div className={styles.center}>
            <h1>Cart Items</h1>
            <AiOutlineShoppingCart />
        <div>{amount}</div>
            </div>
        </nav>
    )
}

export default Navbar;
