import React from "react";
import { useState, useEffect } from "react";
import Dashboard from "../Pages/Dashboard";
import "./login.css";

function Login() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      localStorage.setItem("userData", JSON.stringify(formValues));
      setShowHome(true);
      setShow(true);
    }
  }, [formErrors, isSubmit, formValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    /* if (userType === "Admin" && secretKey !== "Kalpesh") {
      e.preventDefault();
      alert("Invalid Admin");
    } */
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.email = "Password must be more than 4 character";
    } else if (values.password.length > 12) {
      errors.email = "Password must be less than or equal to 4 character";
    }
    return errors;
  };
  return (
    <div className="container">
      {showHome ? (
      <Dashboard />
    ) : (
      <div>
        {show && Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="message success">Login Successfully</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="divider"></div>
            <h1 className="form-title">Login form</h1>
            <div className="form">
              <div className="radio">
                Register As
                <input
                  type="radio"
                  name="UserType"
                  value="User"
                  onChange={(e) => setUserType(e.target.value)}
                />{" "}
                User
                <input
                  type="radio"
                  name="UserType"
                  value="Admin"
                  onChange={(e) => setUserType(e.target.value)}
                />{" "}
                Admin
              </div>
              {userType === "Admin" ? (
                <div className="field">
                  <label htmlFor="">Secret Key</label>
                  <input
                    type="text"
                    name="key"
                    placeholder="Key"
                    onChange={handleChange}
                  />
                </div>
              ) : null}

              <div className="field">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.email}</p>
              <div className="field">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.password}</p>
              <button className="button">Login</button>
            </div>
          </form>
        )}
      </div>
    )}
    </div>
  );
}

export default Login;
