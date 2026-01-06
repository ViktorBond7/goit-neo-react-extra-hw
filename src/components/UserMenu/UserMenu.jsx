import { useDispatch, useSelector } from "react-redux";
import { selectorUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";
import Button from "@mui/material/Button";

const UserMenu = () => {
  const { name } = useSelector(selectorUser);
  const dispatch = useDispatch();

  return (
    <div className={css.box}>
      <p>Welcome, {name}</p>
      <Button
        variant="contained"
        type="submit"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
