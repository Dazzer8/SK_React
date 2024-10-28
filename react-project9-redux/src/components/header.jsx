import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector(state => state.cartReducer.items);
    return (
      <div className="mt-3">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="counter">
              Counter
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <button type="button" class="btn btn-primary position-relative">
              Cart
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </li>
        </ul>
      </div>
    );
}

export default Header;