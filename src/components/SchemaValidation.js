import * as yup from "yup";
import { phoneRegex } from "./constants";

const schemaValidation = yup.object().shape({
  Name: yup.string().required("required").min(3),
  Email: yup.string().required("required").email("invalid email"),
  Phone: yup
  .string()
  .required("required")
  .matches(phoneRegex, "Invalid Mobile Number"),
  Age: yup
      .number()
      .transform((value) =>
        isNaN(value) || value === null || value === undefined ? 0 : value
      )
      .required()
      .positive()
      .integer(),
});

export default schemaValidation;