import { RiContactsBook3Line } from "react-icons/ri";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.box}>
      <RiContactsBook3Line size={300} color="blue" />
      <h1>Hello! This is your Contact Book</h1>
    </div>
  );
};

export default HomePage;
