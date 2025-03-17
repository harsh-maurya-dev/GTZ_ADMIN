import { useState } from 'react'
import form_img from "../../assets/img/login3-bg.png"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { apiCall } from '../../../api/ApiCall'

function ResetPassword() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ password: "", confirmPassword: "" })
    const [hidePass, setHidePass] = useState(true)
    const [hideConfirmPass, setHideConfirmPass] = useState(true)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const resetPassword = async (e) => {
        e.preventDefault();

        if (formData.password === formData.confirmPassword) {
            const email = sessionStorage.getItem("email")
            const data = {"email":email, "password":formData.password, userType:"Admin"}
            try {
                const response = await apiCall(
                    'put',
                    '/auth/updatePassword',
                    data
                );
                if (response.error === false) {
                    navigate("/login"); // Redirect to private route
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
        }
        else {
            toast.error("Password do not match!", { style: { backgroundColor: "#1a406a", color: "#fff" } });
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
                                        <img src={form_img} alt="" />
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
                                            <p className="m-0 comman-sm-text">Enter New Password</p>
                                            <p className="m-0 comman-sm-text">Password: <b>******</b></p>
                                            <p className="m-0 comman-sm-text">Confirm Password: <b>******</b></p>
                                        </div>
                                    </div>
                                    <div className="form-design mt-4">
                                        {/*  password */}
                                        <div className="form-group">
                                            <label className="form-label text-white">Password*</label>
                                            <div className="d-flex form-control justify-content-between align-items-center">
                                                <input
                                                    name="password"
                                                    type={hidePass ? "password" : "text"}
                                                    className=" border-0"
                                                    value={formData.password}
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
                                        {/* confirm password */}
                                        <div className="form-group">
                                            <label className="form-label text-white">Confirm Password*</label>
                                            <div className="d-flex form-control justify-content-between align-items-center">
                                                <input
                                                    name="confirmPassword"
                                                    type={hideConfirmPass ? "password" : "text"}
                                                    className=" border-0"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <i
                                                    className={`fa-solid ${hideConfirmPass ? "fa-eye-slash" : "fa-eye"}`}
                                                    style={{ cursor: "pointer", color: "#102745", fontSize: "20px" }}
                                                    onClick={() => setHideConfirmPass(!hideConfirmPass)}
                                                ></i>
                                            </div>
                                        </div>
                                        <div className="form-group mt-4">
                                            <button type='button' className="comman-btn w-100" onClick={resetPassword}>Login</button>
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

export default ResetPassword
