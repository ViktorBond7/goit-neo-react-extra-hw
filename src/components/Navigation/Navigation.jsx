import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { buildClassLink } from "../../helpers/buildClassLink";

const Navigation = () => {
  return (
    <div className={css.box}>
      <NavLink to="/" className={(prop) => buildClassLink({ ...prop, css })}>
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        className={(prop) => buildClassLink({ ...prop, css })}
      >
        Contacts
      </NavLink>
    </div>
  );
};

export default Navigation;
