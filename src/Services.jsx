import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


export default class  {
    constructor(that) {
        this.AUTH = {
            Authorization: `Bearer ${localStorage.getItem("token")}`, "Access-Control-Allow-Origin": "*"
        };
        this.CONFIG = {headers: this.AUTH};
        this.that = that;
        this.base_url = "http://35.174.138.196:8001/";
    }

    __completeSubmission = (
        url,
        data,
        callback = false
    ) => {
        return axios.post(url, data, this.CONFIG).then(response => {
            this.that.setState({
                error: false,
                isLoading: false,
                errorMessage: "",
                successMessage: response.data.message
            });
            // if (typeof this.that.clearForm === "function") {
            //     this.that.clearForm();
            // }

            // this.that.funcs.showSuccess(callback);
        })
            .catch(error => {
                this.__handleCatch(error);
            });
    };

    __handleCatch(error) {
        console.error("This is error", error);
        let errorMessage = "Something went wrong processing your request! Please Try Again!";
        if (error.response) {
            let status = error.response.status;
            let data = error.response.data;
            if (status === 428) {
                errorMessage = data.message;
            } else if (status === 400) {
                try {
                    errorMessage = data.errors[0].description;
                } catch (e) {}
            }
        }
        this.that.setState({
            error: true,
            isLoading: false,
            errorMessage: errorMessage
        });
    }

    getForList = (url) => {
        console.log("Hey");
        let link = this.base_url + url;
        return axios.get(link).then(resp=>{
            this.that.setState({
                itemList: resp.data.results
            })
        }).catch(err=>{
            console.error(err);
            this.that.setState({
                alert: "Error fetching data"
            })
        })
    }

}
