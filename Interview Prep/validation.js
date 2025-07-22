function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid.email")); // false


// form validation with formik validation
import React, { useState } from 'react';
import { isEmailValid } from './FormValidation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function App() {
  const [open, setOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .min(5, 'Minimum 5 characters')
        .max(25, 'Maximum 25 characters')
        .required('Email is required')
        .matches(
          /^[^\s@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          'email is not valid'
        ),
      // .test('email', 'email is invalid', async (value) => {
      //   return isEmailValid(value);
      // })
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      //async await is better than then catch
      try {
        const res = await apiRequest(values);
        if (res.data && res.data.responseObject) {
          console.log(` Form submited `);
        } else {
          setOpen(true);
        }
      } catch (err) {
        setOpen(false);
        console.log('err', err);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}//{(e)=>formik.handleBlur(e)}
          className="email"
          type="email"
          name="email"
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <p style={{ color: 'red' }}>{formik.errors.email}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          className="password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password && (
          <p style={{ color: 'red' }}>{formik.errors.password}</p>
        )}
      </div>
      <button type="submit">submit</button>
    </form>
  );
}



export function isEmailValid(input) {
debugger;
  const emailRegex = /^[^\s@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(input);
}

//Note:disable button with Object.keys(formik.errors).length !== 0





// create a custom form validation with keys email and password
import React, { useState } from "react";
import validate from "./Formvalidation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert } from "react-bootstrap";

export default function App() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000); 
    } else {
      setShowAlert(false);
    }
  };

  const handleChange = (event) => {
    event.persist();
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {showAlert && (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          Form submitted successfully!
        </Alert>
      )}
      <div>
        <label htmlFor="email">Email</label>
        <input
          className="email"
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={() => {}}
          value={values.email || ""}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          className="password"
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={() => {}}
          value={values.password || ""}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <Button className="btn btn-success mt-2" type="submit">
        Submit
      </Button>
    </form>
  );
}



export default function validate(values = {}) {
  debugger;
  let errors = {};
  if (!values?.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values?.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }
  return errors;
}




// Input validation
input.addEventListener('input', (e) => {
  localStorage.myName=e.target.value;
  text.innerText=input.value.toLowerCase();
  if (e.target.value.trim()) {
    e.target.classList.remove('invalid');
  } else {
    e.target.classList.add('invalid');
  }
});

// Form submission
form.addEventListener('submit', async(e) => {
   e.preventDefault();
   const success = await addTodo();//return boolean
   if(condition){
   const payload = {
        data: Object.fromEntries(new FormData(e.target)),
        timestamp: new Date().toISOString()
      };
    formSubmissions.push(payload);
    result.innerText='Success';
    res.push(payload)
    sunmitBtn.disable=false
   }else{
    result.innerText='failure'
    sunmitBtn.disable=true
   }
  form.reset();
});