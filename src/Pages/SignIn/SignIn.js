import { logoSvg } from "../../assets/images/svgImage";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./SignIn.scss";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { SignInAction } from "../../store/actions/UserManagementAction";
import { signInError } from "../../components/Notification/Notification";

const schema = yup.object().shape({
  email: yup.string().required("*This field is required!"),
  password: yup.string().required("*This field is required!"),
});

function SignIn() {
  const history = useHistory();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(SignInAction(values, signInError, history));
      //   console.log(values);
    },
    validationSchema: schema,
  });
  return (
    <section id="signIn" className="gradient-form">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-4 mx-md-4">
                    <div className="text-center">
                      <NavLink to="/" className="signIn__logo mb-4">
                        {logoSvg}
                      </NavLink>
                      <h5 className="mt-3 mb-3">Sign in to your account</h5>
                    </div>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        formik.handleSubmit(event);
                      }}
                    >
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Email@gmail.com"
                          required
                        />
                        {formik.touched.email && formik.errors.email && (
                          <p className="text-danger message__error">{formik.errors.email}</p>
                        )}
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          type="password"
                          name="password"
                          id="password"
                          className="form-control"
                          placeholder="Enter your password"
                          required
                        />
                        {formik.touched.password && formik.errors.password && (
                          <p className="text-danger message__error">{formik.errors.password}</p>
                        )}
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn font-weight-bold text-white btn-block fa-lg gradient-custom-2 mb-3 btnSignin"
                          type="submit"
                        >
                          Sign In
                        </button>
                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2 mr-2">Don't have an account?</p>
                        <button
                          onClick={() => {
                            history.push(`/signup`);
                          }}
                          type="button"
                          className="btn btn-dark"
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2 text-center">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h1 className="mb-3 font-weight-bold text-white signIn__title">Fiverr</h1>
                    <h3 className="mb-0 text-white">Find the perfect freelance services for your business !</h3>
                    <p className="mt-2 text-justify" style={{ opacity: 0.95 }}>
                      Fiverr is an intermediary online platform that creates a connection between buyers and sellers.
                      Fiverr is currently a Network Freelancer, also known as a marketplace for freelancers around the
                      world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
