import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Formik} from "formik";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import * as Yup from "yup";
import Error from "../../compoments/elements/Error";
import homeLogNavImg from "../../compoments/Assets/house-solid.svg";
import "./_registerMain.scss";

const validationLoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("The provided e-mail address is invalid!")
        .required("Mail is required."),
    password: Yup.string()
        .min(6,"Password must contain at least 6 characters.")
        .required("The provided password is invalid!"),
    passwordConfirm: Yup.string()
        .required("Please confirm the password")
        .when("password", {
            is: password => (password && password.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref("password")], "Passwords must be the same!")
        })
});

const RegisterMain = () => {
    const [userInfo, setUserInfo] = useState("User not logged in");

    const submitHandler = (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then(() => {
                signInWithEmailAndPassword(auth, email.value, password.value)
                    .then((res) => {
                        console.log("użytkownik zalogowany.")
                        console.log(auth)
                        setUserInfo("Logged in as : " + res.user.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

return (
    <Formik
        initialValues={{email: "", password: "",passwordconfirm:""}}
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
                  onSubmit={(e) => submitHandler(e)}
            >
                <h1 className="aboutUs_title title_Main">
                    Register
                </h1>
                <div className={"login_inputs register_inputs"}>
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
                    <div className={"form_input_info_col"}>
                        <p className="form_input_header">
                            Password confirm
                        </p>
                        <input
                            className={"form_input_text"}
                            type={"password"}
                            name={"passwordConfirm"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.passwordConfirm}
                        />
                        <Error touched={touched.passwordConfirm} message={errors.passwordConfirm}/>
                    </div>
                </div>
                <ul className={"login_buttons"}>
                    <li>
                        <Link className={"login_buttons_link"} to={"/Login"}>Log in</Link>
                    </li>
                    <li>
                        <button className={"login_buttons_link"} type={'submit'}>Create an account</button>
                    </li>
                </ul>
            </form>
        </div>
            )}
    </Formik>
    );
};

export default RegisterMain;
