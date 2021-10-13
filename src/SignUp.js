import React from "react";
import { Formik } from 'formik';

function SignUp() {
    return (
        <div className="form">
            <Formik 
                initialValues={{ username: '', password: ''}}
                validate={values => {
                    const errors = {};
                    if(!values.username) {
                        errors.username = 'A username is required'
                    }
                    if(!values.password) {
                        errors.password = 'A password is required'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
            />
            <form>
                <input>
                
                </input>

                <input>
                
                </input>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default SignUp;