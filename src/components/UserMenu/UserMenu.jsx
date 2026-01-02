import { useDispatch, useSelector } from "react-redux";
import { selectorUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const { name } = useSelector(selectorUser);
  const dispatch = useDispatch();

  return (
    <div className={css.box}>
      <p>Welcome, {name}</p>
      <button type="submit" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
