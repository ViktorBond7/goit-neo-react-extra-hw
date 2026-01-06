import { Formik, Form } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { Button, Stack } from "@mui/material";
import FormikTextField from "../FormikTextField";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symb long")
    .max(50, "The name must be no more than 50 characters long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Number must be at least 3 characters long")
    .max(50, "Number must be no more than 50 characters long")
    .required("Required"),
});

const ContactForm = ({
  initialValues,
  onSubmit,
  nameForm,
  onClose,
  showClose = false,
}) => {
  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ContactSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <Stack spacing={2} sx={{ minWidth: 200 }}>
              <FormikTextField type="text" name="name" label="Name" />
              <FormikTextField type="text" name="number" label="Number" />
              <Button type="submit" variant="contained" disabled={isSubmitting}>
                {nameForm}
              </Button>
              {showClose && (
                <Button
                  variant="outlined"
                  color="error"
                  disabled={isSubmitting}
                  onClick={onClose}
                >
                  Exit
                </Button>
              )}
            </Stack>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
