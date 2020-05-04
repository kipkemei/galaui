import React from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class  {
    constructor(that, ...requiredFields) {
        this.that = that;
        this.requiredFields = requiredFields;
        this.initialState = JSON.stringify(that.state);
        this.alert()
    }

    alert = () => {
        this.that.toast = <ToastContainer
            position="top-right"
            autoClose={10000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
        />;
        if (this.that.state.allert) {
            toast.error(this.that.state.alertMessage);
            setTimeout(
                {
                    alert: false
                },
                100
            );
        }
    };

    logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    };

    handleBlur = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        if (value === undefined || value.length < 1 || value === "none") {
            if (this.requiredFields.includes(name)) {
                document.getElementById(`${name}`).classList.add("required");
            }
        }
    };

    handleClick = () => {
        let empty = this.hasEmpty()[0];
        if (empty) {
            this.that.setState({
                    error: true,
                    errorMessage:
                        "It appears there are required fields you haven't filled!"
                }
            );
            console.log(this.hasEmpty()[2])
        } else {
            this.confirmSubmit()
        }
    };

    handleChange = event => {
        let target = event.target;
        let name = target.name;
        this.that.setState({
            [name]: target.value
        });
    };

    handleFocus = event => {
        const target = event.target;
        const name = target.name;
        document.getElementById(`${name}`).classList.remove("required");
        this.that.setState({
            emptyFields: false
        });
    };

}
