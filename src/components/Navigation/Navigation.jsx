import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { buildClassLink } from "../../helpers/buildClassLink";
import { useSelector } from "react-redux";
import { selectorIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  return (
    <div className={css.box}>
      <NavLink to="/" className={(prop) => buildClassLink({ ...prop, css })}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={(prop) => buildClassLink({ ...prop, css })}
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
