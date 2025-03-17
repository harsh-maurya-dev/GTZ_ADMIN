import { useState } from 'react'
import fpass from "../../assets/img/login3-bg.png"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { apiCall } from '../../../api/ApiCall'

const ForgetPassword = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ email: "", userType: "Admin" })

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, email: e.target.value }))

    }

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            const response = await apiCall(
                'put',
                '/auth/forgotPassword',
                formData
            );

            if (response.error === false) {
                console.log("email sent:", response);
                sessionStorage.setItem("otp", response.results?.otp)
                sessionStorage.setItem("email", response.results.user?.email)
                sessionStorage.setItem("otp_expiry", response.results.user?.expire_time)
                console.log("otp:", response.results?.otp);
                navigate("/otp"); // Redirect to private route
                toast.success(response.message, { style: { backgroundColor: "#1a406a", color: "#fff" } });
            } else {
                // toast.error("Login failed: Invalid credentials");
                toast.error(response.message, { style: { backgroundColor: "#1a406a", color: "#fff" } });
                console.log(response);

            }
        } catch (error) {
            console.error("Login Error:", error.response || error.message);
            toast.error("Login failed: " + (error.response?.message || error.message), { style: { backgroundColor: "#1a406a", color: "#fff" } });
        }
    };

    return (
        <>
            <div className="container-fluid comman-px">
                <div className="row mt-4">
                    <div className="col-md-8 col-11 mx-auto">
                        <div className="w-100 h-100 bg-white rounded-4 p-4 login-wrapper">
                            <div className="row">
                                <div className="col-6">
                                    <h1 className="login-heading">Forex Trading Backoffice</h1>
                                    <div className="login-img">
                                        <img src={fpass} alt="" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <h1 className="login-text mt-5 text-center">Admin Login.</h1>
                                    <h1 className="fs-6 text-white mt-3 text-center">Welcome to Forex Trading Backoffice</h1>
                                    <div className="d-flex gap-2 bg-light py-3 px-3 rounded-3">
                                        <span className="circle-info">
                                            <i className="fa fa-info-circle text-main"></i>
                                        </span>
                                        <div>
                                            <p className="m-0 comman-sm-text">Please enter your registered Email Address to receive the OTP</p>
                                            <p className="m-0 comman-sm-text">Email: <b>example@gmail.co</b></p>
                                        </div>
                                    </div>
                                    <div className="form-design mt-4">
                                        <div className="form-group">
                                            <label className="form-label text-white" htmlFor="">Email*</label>
                                            <input type="email" name={formData.email} className="form-control" onChange={handleChange} />
                                        </div>
                                        <div className="form-group pt-3 pb-4">
                                            <Link to="/login" className="text-decoration-underline text-white">Login</Link>
                                        </div>
                                        <div className="form-group">
                                            <button type='button' className="comman-btn w-100" onClick={sendEmail}>Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword
