import * as yup from "yup"


export const BasicSchema = yup.object().shape({
  firstName : yup.string().required("Must fill your Name").matches(/^[a-zA-Z]+$/, 'First name must contain only letters').min(3,"atleast 3 char").max(20,"upto 20 char"),
  lastName : yup.string().required("Must fill your Name").matches(/^[a-zA-Z]+$/, 'First name must contain only letters'),
  dob : yup.string().required("Enter 18+ only"),
  email : yup.string().email("please enter valid email").required("Enter Email"),
  password : yup.string().min(8,"atleast 8 char").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,"Type to stroung password").required("This feild is required"),
  cpassword : yup.string().oneOf([yup.ref("password"),null], "password does not match").required('This is must'),
  gender: yup.string().required('Gender is required'),
  terms: yup.boolean().oneOf([true], 'You must agree to the terms').required("accept all terms"),
})