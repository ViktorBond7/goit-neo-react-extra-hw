import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";

import * as yup from "yup";
import { Button } from "@mui/material";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email address").required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const submit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <div className={css.wrapper}>
      <Formik
        onSubmit={submit}
        initialValues={{ email: "", password: "" }}
        validationSchema={schema}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <Field type="text" name="email" />
            <ErrorMessage className={css.error} name="email" component="div" />
            <Field type="text" name="password" />
            <ErrorMessage
              className={css.error}
              name="password"
              component="div"
            />
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              size="medium"
              sx={{
                width: 100,
                display: "block",
                mx: "auto",
              }}
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
