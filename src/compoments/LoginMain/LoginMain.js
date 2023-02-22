import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as Yup from "yup";
import Error from "../../compoments/elements/Error";
import homeLogNavImg from "../../compoments/Assets/house-solid.svg";
import "./_loginMain.scss";

const validationLoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("The provided e-mail address is invalid!")
        .required("Mail is required."),
    password: Yup.string()
        .min(6,"Password must contain at least 6 characters.")
        .required("The provided password is invalid!")
});

const LoginMain = () => {
    const [userInfo, setUserInfo] = useState("User not logged in");

    // const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        console.log(email.value)
        console.log(password.value)
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((res) => {
                console.log("ok");
                setUserInfo("Logged in as : " + res.user.email);
                // navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage, "error");
            });
    }

    return (
        <Formik
            initialValues={{email: "", password: ""}}
            validationSchema={validationLoginSchema}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur
              }) => (
                <div className={"login container"}>
                    <Link to={'/'}>
                        <img className={'login_icon'} src={homeLogNavImg} alt={'home'}/>
                    </Link>
                    <h1 className={'login_info'}>{userInfo}</h1>
                    <form className={"login_box"}
                          onSubmit={e => handleLogin(e)}>
                        <h1 className="aboutUs_title title_Main">
                            Login
                        </h1>
                        <div className={"login_inputs"}>
                            <div className={"form_input_info_col"}>
                                <p className="form_input_header">
                                    Email
                                </p>
                                <input
                                    className={"form_input_text"}
                                    type={'email'}
                                    name={"email"}
                                    id={'email'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <Error touched={touched.email} message={errors.email}/>
                            </div>
                            <div className={"form_input_info_col"}>
                                <p className="form_input_header">
                                    Password
                                </p>
                                <input
                                    className={"form_input_text"}
                                    type={"password"}
                                    name={"password"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <Error touched={touched.password} message={errors.password}/>
                            </div>
                        </div>
                        <ul className={"login_buttons"}>
                            <li>
                                <button
                                    className={"login_buttons_link"}
                                    type={'submit'}
                                >
                                    Log in
                                </button>
                            </li>
                            <li>
                                <Link className={"login_buttons_link"} to={"/Register"}>Create an account</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            )}
        </Formik>
    );
};

export default LoginMain;



