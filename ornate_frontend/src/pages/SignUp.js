import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

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
  return (
    <div className="sign-content">
      <div id="images"></div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form id="black">
            <div id="box">
              <h1>Register</h1>
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder=" Name"
                  className="input-field"
                />
                <ErrorMessage name="name" component="div" />
                <br />
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input-field"
                />
                <ErrorMessage name="email" component="div" />
                <br />
                <Field
                  type="password"
                  name="password"
                  placeholder="Password "
                  className="input-field"
                />
                <ErrorMessage name="password" component="div" />
                <br />
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input-field"
                />
                <ErrorMessage name="confirmPassword" component="div" />
                <br />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit"
                  className="submit_button"
                >
                  Register
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
