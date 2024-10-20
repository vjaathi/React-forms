import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Register.css'; // Import the CSS file

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      terms: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(/^[a-zA-Z]+$/, 'First name must contain only letters').min(3,"Atleast 3 char ").max(20,"upto 20 char")
        .required('First name is required'),
      lastName: Yup.string()
        .matches(/^[a-zA-Z]+$/, 'Last name must contain only letters')
        .required('Last name is required'),
      age: Yup.number()
        .required('Age is required')
        .positive('Age must be positive')
        .integer('Age must be an integer'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/, 'Password must contain at least one uppercase letter, one number, and one special character.'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
      gender: Yup.string().required('Gender is required'),
      terms: Yup.boolean().oneOf([true], 'You must agree to the terms'),
    }),
    onSubmit: (values) => {
      console.log('Form submitted successfully!', values);
      // You can proceed with form submission (e.g., API call)
    },
  });

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            className={formik.touched.firstName && formik.errors.firstName ? 'error' : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p className="error-message">{formik.errors.firstName}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            className={formik.touched.lastName && formik.errors.lastName ? 'error' : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p className="error-message">{formik.errors.lastName}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            className={formik.touched.age && formik.errors.age ? 'error' : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />
          {formik.touched.age && formik.errors.age ? (
            <p className="error-message">{formik.errors.age}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className={formik.touched.email && formik.errors.email ? 'error' : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error-message">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            className={formik.touched.password && formik.errors.password ? 'error' : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="error-message">{formik.errors.password}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            className={formik.touched.confirmPassword && formik.errors.confirmPassword ? 'error' : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <p className="error-message">{formik.errors.confirmPassword}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            className={formik.touched.gender && formik.errors.gender ? 'error' : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {formik.touched.gender && formik.errors.gender ? (
            <p className="error-message">{formik.errors.gender}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="terms"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.terms}
            />
            I agree to the terms and conditions
          </label>
          {formik.touched.terms && formik.errors.terms ? (
            <p className="error-message">{formik.errors.terms}</p>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
