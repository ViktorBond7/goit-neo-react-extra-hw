import { Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";

import * as yup from "yup";
import { Button, Stack } from "@mui/material";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import FormikTextField from "../FormikTextField";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email("Invalid email address").required(),
  password: yup.string().required(),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const submit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <div className={css.wrapper}>
      <Formik
        onSubmit={submit}
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={schema}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <Stack spacing={2} sx={{ minWidth: 200 }}>
              <FormikTextField type="text" name="name" label="Name" />
              <FormikTextField type="email" name="email" label="Email" />
              <FormikTextField
                name="password"
                label="Password"
                type="password"
              />
            </Stack>

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

export default RegistrationForm;
