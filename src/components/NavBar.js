import { AiOutlineShoppingCart } from "react-icons/ai";
import {useSelector} from 'react-redux'

const Navbar = () => {
    const { amount } = useSelector ((state) => state.cart)
    return (
        <nav>
        <div className="nav-center">
            <h1>Redux Toolkit</h1>
            <AiOutlineShoppingCart />
        <div>{amount}</div>
            </div>
        </nav>
    )
}

export default Navbar;
