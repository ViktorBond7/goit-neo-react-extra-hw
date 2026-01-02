import { FadeLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.container}>
      <FadeLoader color="#1fa54c" />
    </div>
  );
};

export default Loader;
