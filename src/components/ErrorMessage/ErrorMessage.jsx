import css from "./ErrorMessage.module.css";

const ErrorMessege = ({ message }) => {
  console.log("Errorrr: ", message);

  return (
    <>
      <p className={css.pageErr}>
        Oops, there was an error, please try reloading!!!
      </p>
    </>
  );
};

export default ErrorMessege;
