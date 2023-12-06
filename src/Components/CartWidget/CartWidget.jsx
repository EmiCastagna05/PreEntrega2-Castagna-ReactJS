import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div className="cartWidget-container">
            <button className="cartWidget-button"><FaShoppingCart /></button>
            <p className="cartWidget-number">3</p>
        </div>
    )
}

export default CartWidget
