import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import { buildClassLink } from "../../helpers/buildClassLink";

const AuthNav = () => {
  return (
    <div className={css.box}>
      <NavLink
        to="/register"
        className={(prop) => buildClassLink({ ...prop, css })}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={(prop) => buildClassLink({ ...prop, css })}
      >
        log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
