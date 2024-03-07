import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const useUserLoginValidator = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().email().required("Email is required"),
    age: yup
      .number("Age must be a number")
      .positive("Age must be a positive number")
      .required("Age is required"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
        "Must Contain 4 Chars, 1 Uppercase, 1 Lowercase, 1 Number & 1 special Char"
      ),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  console.log('Schema:', schema);
  console.log('Errors:', errors);

  return {
    register,
    handleSubmit,
    errors,
  };
};
