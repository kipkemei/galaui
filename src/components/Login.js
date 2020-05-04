import * as React from "react";
import Funcstions from "../Funcstions";
import {toast} from "react-toastify";
import axios from "axios";
import Services from "../Services";


export default class extends React.Component {
    services;

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            alert: false,
            alertMessage: null,
            login_as: "user"
        };
        this.funcs = new Funcstions(this, "username", "password")
        this.services = new Services(this)
    }

    handleClick = () => {
        this.setState({loading: true, alert: true, alertMessage: "Hey there"});
        let url = this.services.base_url + "auth/login/";
        let data = {
            "username": this.state.username,
            "password": this.state.password,
            "login_as": this.state.login_as,
        };
        return axios.post(url, data).then(response => {
            toast.success("Logged in successfully");
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("token", JSON.stringify(response.data.token));
            this.setState({loading: false});
            window.location.href = "/admin/dashboard";
        }).catch(err => {
            console.log(err);
            toast.error("Please check your username or password", err);
            this.setState({loading: false})
        })
    };

    render() {
        return (
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3>Login</h3>
                        <form>
                            <div className="form-group">
                                <input
                                    onChange={this.funcs.handleChange}
                                    onFocus={this.funcs.handleFocus}
                                    onBlur={this.funcs.handleBlur}
                                    name="username"
                                    id="username"
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Username *"
                                    value={this.state.username}/>
                            </div>
                            <div className="form-group">
                                <input
                                    onChange={this.funcs.handleChange}
                                    onFocus={this.funcs.handleFocus}
                                    onBlur={this.funcs.handleBlur}

                                    name={"password"} id={"password"}
                                    type="password" className="form-control"
                                    placeholder="Your Password *"
                                    value={this.state.password}/>
                            </div>
                            <div className="form-group">
                                <select
                                    onChange={this.funcs.handleChange}
                                    onFocus={this.funcs.handleFocus}
                                    onBlur={this.funcs.handleBlur}

                                    name={"login_as"} id={"login_as"}
                                    type="password" className="form-control"
                                    placeholder="Your Password *"
                                    value={this.state.password}>
                                    <option value="">Login as :</option>
                                    <option value="doctor">Doctor</option>
                                    <option value="user">User</option>
                                    <option value="nutritionist">Nutritionist</option>
                                    <option value="pharmacist">Pharmacist</option>
                                </select>
                            </div>
                            <div className="form-group">
                                {this.state.loading ? (
                                    <input
                                        type="button" className="btnSubmit" value="Submitting ..."/>
                                ) : (
                                    <input
                                        onClick={this.handleClick}
                                        type="button" className="btnSubmit" value="Login"/>
                                )}
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-7">
                                        <a href="#" className="ForgetPwd">Forgot Password?</a>
                                    </div>
                                    <div className="col-md-5">
                                        <a href="#" className="ForgetPwd">Signup here</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 login-form-2" style={{color: "#fff"}}>
                        <h3>Gala Medical Shop</h3>
                        <form>
                            <div className="form-group">
                                Find the best solutions to your problems. We offer a variety of daily activities
                                solutions
                            </div>
                            <br/>
                            <div className="form-group">
                                Get access to laboratories, pharmacies, doctors and nutritionists
                            </div>
                            <div className="form-group">
                                We have got branches all over the country
                            </div>
                            <div className="form-group">

                            </div>
                        </form>
                    </div>
                </div>
                {this.toast}
            </div>
        )
    }
}
