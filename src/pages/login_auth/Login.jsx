import React, { useState } from 'react';
import login_image from "../../assets/img/login3-bg.png";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
    const [loginData, setLoginData] = useState({ email: "", password: "", userType: "Admin", deviceOS: "Web" });
    const [hidePass, setHidePass] = useState(true);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const fetchUser = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/auth/login`, loginData, {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-user-type": "admin"
                },
            });

            if (response.data.error === false) {
                localStorage.setItem("token", response.data.results.token);
                console.log("Login Success:", response.data);
                console.log("Login Success Token:", response.data.results.token);
                navigate("/dashboard"); // Redirect to private route
                toast.success(response.data.message, {style:{backgroundColor:"#1a406a", color:"#fff"}});
            } else {
                // toast.error("Login failed: Invalid credentials");
                toast.error(response.data.message, {style:{backgroundColor:"#1a406a", color:"#fff"}});
                console.log(response);
                
            }
        } catch (error) {
            console.error("Login Error:", error.response?.data || error.message);
            toast.error("Login failed: " + (error.response?.data?.message || error.message), {style:{backgroundColor:"#1a406a", color:"#fff"}});
        }
    };

    return (
        <div className="container-fluid comman-px bg-transparent">
            <div className="row mt-4">
                <div className="col-md-8 col-11 mx-auto">
                    <div className="w-100 h-100 bg-white rounded-4 p-4 login-wrapper">
                        <div className="row">
                            <div className="col-6">
                                <h1 className="login-heading">Forex Trading Backoffice</h1>
                                <div className="login-img">
                                    <img src={login_image} alt="login_form_image" />
                                </div>
                            </div>
                            <div className="col-6">
                                <h1 className="login-text mt-5 text-center">Admin Login.</h1>
                                <h1 className="fs-6 text-white mt-3 text-center">
                                    Welcome to Forex Trading Backoffice
                                </h1>
                                <div className="form-design mt-5">
                                    {/* Email Input */}
                                    <div className="form-group">
                                        <label className="form-label text-white">Email*</label>
                                        <input
                                            name="email"
                                            type="email"
                                            className="form-control"
                                            value={loginData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Password Input */}
                                    <div className="form-group">
                                        <label className="form-label text-white">Password*</label>
                                        <div className="d-flex form-control justify-content-between align-items-center">
                                            <input
                                                name="password"
                                                type={hidePass ? "password" : "text"}
                                                className=" border-0"
                                                value={loginData.password}
                                                onChange={handleChange}
                                                required
                                            />
                                            <i
                                                className={`fa-solid ${hidePass ? "fa-eye-slash" : "fa-eye"}`}
                                                style={{ cursor: "pointer", color: "#102745", fontSize: "20px" }}
                                                onClick={() => setHidePass(!hidePass)}
                                            ></i>
                                        </div>
                                    </div>

                                    {/* Forgot Password Link */}
                                    <div className="form-group pt-3 pb-4">
                                        <Link to="/forget_password" className="text-decoration-underline text-white">
                                            Forgot Password?
                                        </Link>
                                    </div>

                                    {/* Login Button */}
                                    <div className="form-group">
                                        <button type="button" className="comman-btn w-100" onClick={fetchUser} na>
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
