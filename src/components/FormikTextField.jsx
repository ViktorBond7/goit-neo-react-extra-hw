import {
  TextField,
  FormLabel,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";

import { useField } from "formik";
import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { FaEyeSlash } from "react-icons/fa";

const FormikTextField = ({ label, type = "text", ...props }) => {
  const [field, meta] = useField(props);

  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <TextField
      {...field}
      {...props}
      size="small"
      type={isPassword && showPassword ? "text" : type}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      fullWidth
      label={label}
      InputProps={
        isPassword
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <BiShow /> : <FaEyeSlash />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : undefined
      }
    />
  );
};

export default FormikTextField;
