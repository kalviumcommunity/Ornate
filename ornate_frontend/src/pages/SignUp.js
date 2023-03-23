import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../components/Tagline/Tagline.css";
// import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Additions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //

  const [login, setLogin] = useState(true);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(30, "Name must be at most 30 characters")
      .required("Please enter your name"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email"),
    password: Yup.string()
      .min(8)
      .required("Please enter your password")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Must contain at least 8 character and a special character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm the password"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      sessionStorage.setItem("name", values.name);

      setSubmitting(false);
      window.open("http://localhost:3000/", "_self");
    }, 1000);
  };

  const handleLogin = () => {
    setLogin(!login)
  }
  return (
    <div className="sign-content">
      {login ? (
        <>
          <div id="images"></div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form id="main_form">
                {/* <div id="box"> */}
                <h1 id="register">Login</h1>
                <div>
                  <div className="name_input">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="mainLoginInput"
                      // Add
                      onchange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                    />
                    <ErrorMessage
                      className="error_msg "
                      name="email"
                      component="H6"
                    />
                  </div>

                  <br />
                  <div className="name_input">
                    <Field
                      type="password"
                      name="password"
                      placeholder="&#61475; Password"
                      class="mainLoginInput"
                      // Add
                      onchange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                    />
                    <ErrorMessage
                      className="error_msg "
                      name="password"
                      component="H6"
                    />
                  </div>

                  <br />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit"
                    className="gradient_button register_button"
                  >
                    Login
                  </button>
                </div>
                {/* </div> */}
              </Form>
            )}
          </Formik>
          <div className="login_div">
            <p>OR</p>
            <p>
              Don't have an account? <span onClick={handleLogin}>Signup</span>
            </p>
          </div>
        </>
      ) : (
        <>
          <div id="images"></div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form id="main_form">
                {/* <div id="box"> */}
                <h1 id="register">Register</h1>
                <div>
                  <div className="name_input">
                    <Field
                      type="text"
                      name="name"
                      placeholder="&#61447; Name"
                      className="mainLoginInput"
                    />
                    <ErrorMessage
                      className="error_msg"
                      name="name"
                      component="H6"
                    />
                  </div>

                  <br />
                  <div className="name_input">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="mainLoginInput"
                    />
                    <ErrorMessage
                      className="error_msg "
                      name="email"
                      component="H6"
                    />
                  </div>

                  <br />
                  <div className="name_input">
                    <Field
                      type="password"
                      name="password"
                      placeholder="&#61475; Password"
                      class="mainLoginInput"
                    />
                    <ErrorMessage
                      className="error_msg "
                      name="password"
                      component="H6"
                    />
                  </div>

                  <br />
                  <div className="name_input">
                    <Field
                      type="password"
                      name="confirmPassword"
                      placeholder="&#61475; Confirm Password"
                      class="mainLoginInput"
                    />
                    <ErrorMessage
                      className="error_msg "
                      name="confirmPassword"
                      component="H6"
                    />
                  </div>

                  <br />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit"
                    className="gradient_button register_button"
                  >
                    Register
                  </button>
                </div>
                {/* </div> */}
              </Form>
            )}
          </Formik>
          <div className="login_div">
            <p>OR</p>
            <p>
              Already have an account? <span onClick={handleLogin}>Login</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default SignUp;
