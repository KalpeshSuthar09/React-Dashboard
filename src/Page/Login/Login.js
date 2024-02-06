import React from "react";
import { useState, useEffect } from "react";
import AddUser from "../User/AddUser";

function Login() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  /*  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState(""); */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      localStorage.setItem("userData", JSON.stringify(formValues));
    }
  }, [formErrors, isSubmit, formValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    /* if (userType === "Admin" && secretKey !== "Kalpesh") {
      e.preventDefault();
      alert("Invalid Admin");
    }

    if (userType === "Partner" && secretKey !== "Kalpesh123") {
      e.preventDefault();
      alert("Invalid Partner");
    } */

    //check if the entered email and password match with the user data from AddUser component
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedUserData &&
      storedUserData.email === formValues.email &&
      storedUserData.password === formValues.password
    ) {
      alert("Login Successful");
    } else {
      alert("Error");
    }
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
    <section className="bg-gray-50 min-h-screen flex items-center justify-center shadow-md">
      <div className=" flex shadow-lg rounded-2xl max-w-3xl p-5 ">
        <div className="left-content sm:w-1/2 px-16">
          <h1 className="form-title font-bold text-2xl text-[#002D74]">
            Login form
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
            {/* <div className="radio">
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
              value="Partner"
              onChange={(e) => setUserType(e.target.value)}
            />{" "}
            Partner
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />{" "}
            Admin
          </div> */}
            {/* {userType === "Admin" ? (
            <div className="field">
              <label htmlFor="key">Admin Key</label>
              <input
                type="text"
                name="key"
                placeholder="Key"
                onChange={handleChange}
              />
            </div>
          ) : null}
          {userType === "Partner" ? (
            <div className="field">
              <label htmlFor="key">Partner Key</label>
              <input
                type="text"
                name="key"
                placeholder="Key"
                onChange={handleChange}
              />
            </div>
          ) : null} */}

            <div className="field ">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <p className="text-rose-500">{formErrors.email}</p>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
                className="p-2 rounded-xl border w-full"
              />
            </div>
            <p className="text-rose-500">{formErrors.password}</p>
            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
              Login
            </button>
          </form>
        </div>
        <div className="right-content w-1/2 sm:block hidden">
          <img
            src="https://cdn.dribbble.com/userupload/12872997/file/original-a8529fc0f3a6a0dd5471a67645b67625.png?resize=752x"
            alt="Image"
            className="rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
