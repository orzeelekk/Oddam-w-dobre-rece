import React, {useState} from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";
import Error from "../../elements/Error";
import axios from "axios";
import "./_contact.scss";

import Facebook from "../../Assets/Facebook.svg";
import Instagram from "../../Assets/Instagram.svg";

const validationSchema = Yup.object().shape({
    //nazwa propsa z Formika
    name: Yup.string()
        .min(2, "Name must be longer than 2 characters.")
        .matches(/^[a-zA-Z]*$/, "Enter only your name.")
        .required("Name is required."),
    email: Yup.string()
        .email("The provided e-mail address is invalid!")
        .required("Mail is required."),
    message: Yup.string()
        .min(120, "The message must be at least 120 characters long!")
        .matches(/[^$|\s+]/, "No white spaces")
        .required("Message is required."),
});

const Contact = () => {
    const [isSuccess,setIsSuccess] = useState(false);

    return (
        <Formik initialValues={{name:"", email:"", message:""}}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setSubmitting(true);
                    //startuje jako 1
                    setTimeout(() => {
                        axios.post("https://fer-api.coderslab.pl/v1/portfolio/contact",
                            values, {
                            headers: {
                                "Content-Type": "application/json"
                            },
                            //headers z ciała posta, jest w console logu
                        })
                            .then((response) => {
                                console.log(response);
                            }, (error) => {
                                console.log(error)
                            })
                            .catch(error => {
                                console.log(error);
                            })
                            .then(setIsSuccess(true))
                            .then(
                                setTimeout(() => {
                                    setIsSuccess(false);
                                }, 2000)
                                //startuje jako 3, ostatnie do wyswietlenia "Message was sent!"
                            )
                        resetForm();
                        setSubmitting(false);
                    }, 2000);
                //startuje jako 2, kolejno zamyka formularz z dopiskami
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                  }) => (

            <section className="contact container">
                <div className="contact_container ">
                    <div className="contact_box">
                        <h1 className="aboutUs_title title_Main">
                            Contact us!
                        </h1>
                        <form onSubmit={handleSubmit}>
                            {isSubmitting &&
                                <div className="form_pop">
                                    Submitting the form...
                                </div>
                            }
                            {isSuccess &&
                                //
                                <div className="form_pop">
                                    Message was sent!
                                </div>
                            }
                            <fieldset className="form_input">
                                <div className={"form_input_info"}>
                                    <div className={"form_input_info_col"}>
                                        <p className="form_input_header">
                                            Enter your name
                                        </p>
                                        <input
                                            className={"form_input_text"}
                                            type={"text"}
                                            name={"name"}
                                            placeholder={"Adam"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                        <Error touched={touched.name} message={errors.name}/>
                                    </div>
                                    <div className={"form_input_info_col"}>
                                        <p className="form_input_header">
                                            Enter your email
                                        </p>
                                        <input
                                            className={"form_input_text"}
                                            type={"email"}
                                            name={"email"}
                                            placeholder={"abc@xyz.pl"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        <Error touched={touched.email} message={errors.email}/>
                                    </div>
                                </div>
                                <p className="form_input_header">Enter your message</p>
                                <textarea
                                    className={"form_input_text message_main"}
                                    name={'message'}
                                    placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message}
                                />
                                <Error touched={touched.message} message={errors.message}/>
                            </fieldset>

                            <button className="btn_1" id={"form_button"} type="submit" disabled={isSubmitting}>Send</button>
                        </form>
                    </div>
                    <footer className={"footer container"}>
                        <h3>Copyright by Coders Lab</h3>
                        <div className={"socialmedia"}>
                            <a href={"https://www.facebook.com"} target="_blank">
                                <img className="socialmedia_img" alt={Facebook} src={Facebook}/>
                            </a>
                            <a href={"https://www.instagram.com"} target="_blank">
                                <img className="socialmedia_img" alt={Instagram} src={Instagram}/>
                            </a>
                        </div>
                    </footer>
                </div>
            </section>

                )}
        </Formik>
    );
};

export default Contact;