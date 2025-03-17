import { useEffect, useRef, useState } from "react";
import otp_img from "../../assets/img/login3-bg.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { apiCall } from "../../../api/ApiCall";

function OTP() {
    const navigate = useNavigate()
    const [digits, setDigits] = useState({
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
    });
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const [isVisible, setIsVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);

    const handleChange = (e, index) => {
        const { name, value } = e.target;

        // Update the state with the new digit
        setDigits((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        if (value && index < 5) {
            inputRefs[index + 1].current.focus();
        }
        if (!value && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };
    // console.log(digits);

    const verifyOtp = async (e) => {
        e.preventDefault();
        const otp = Object.values(digits).join('');
        const userType = "Admin"
        const stored_otp = sessionStorage.getItem("otp");
        const email = sessionStorage.getItem("email");

        const formData = { email, otp, userType }

        try {
            const response = await apiCall(
                'put',
                '/auth/verifyOTP',
                formData
            );

            if (response.error === false) {
                if (Number(stored_otp) === response.results.user?.otp) {
                    // console.log("verify sent:", response);
                    navigate("/reset_password");
                    toast.success(response.message, { style: { backgroundColor: "#1a406a", color: "#fff" } });
                }

            } else {
                toast.error(response.message, { style: { backgroundColor: "#1a406a", color: "#fff" } });
                // console.log(response);

            }
        } catch (error) {
            console.error("otp Error:", error.response || error.message);
            toast.error("otp failed: " + (error.response?.message || error.message), { style: { backgroundColor: "#1a406a", color: "#fff" } });
        }
    };

    const resendOtp = async (e) => {
        e.preventDefault();

        try {
            const email = sessionStorage.getItem("email")
            const userType = "Admin"
            const response = await apiCall(
                'put',
                '/auth/forgotPassword',
                {email, userType}
            );

            if (response.error === false) {
                console.log("email sent:", response.data);
                sessionStorage.removeItem("otp_expiry")
                sessionStorage.setItem("otp", response.results?.otp)
                sessionStorage.setItem("email", response.results.user?.email)
                sessionStorage.setItem("otp_expiry", response.results.user?.expire_time)
                console.log("resend otp:", response.results?.otp);
                console.log("user details", response.results);
                toast.success(`Resend Otp`, { style: { backgroundColor: "#1a406a", color: "#fff" } });
                setTimeLeft(30); // Restart timer
                setIsVisible(false);
            } else {
                toast.error(response.message, { style: { backgroundColor: "#1a406a", color: "#fff" } });
                console.log(response);

            }
        } catch (error) {
            console.error("Failed to resend:", error.response || error.message);
        }
    };

    // Call this function when the page loads or after fetching the OTP
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(true);
        }
    }, [timeLeft]);


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
                                        <img src={otp_img} alt="" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <h1 className="login-text mt-5 text-center">Admin Login.</h1>
                                    <h1 className="fs-6 text-white mt-3 text-center">
                                        Welcome to Forex Trading Backoffice
                                    </h1>
                                    <div className="d-flex gap-2 bg-light py-3 px-3 rounded-3">
                                        <span className="circle-info">
                                            <i className="fa fa-info-circle text-main"></i>
                                        </span>
                                        <div>
                                            <p className="m-0 comman-sm-text">
                                                Please enter the OTP received on your Email Address
                                            </p>
                                            <p className="m-0 comman-sm-text">
                                                OTP: <b>0-0-0-0</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="form-design mt-4">
                                        <div className="form-group">
                                            <label className="form-label text-white" htmlFor="">
                                                OTP*
                                            </label>
                                            <div className="row">
                                                {[0, 1, 2, 3, 4, 5].map((index) => (
                                                    <div className="col-2 pe-0" key={index}>
                                                        <input
                                                            type="number"
                                                            name={`num${index + 1}`}
                                                            value={digits[`num${index + 1}`]}
                                                            className="form-control fw-bold fs-4 p-2 text-center"
                                                            onChange={(e) => handleChange(e, index)}
                                                            maxLength="1"
                                                            ref={inputRefs[index]} // Attach ref to each input
                                                            min={1}
                                                            max={1}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="form-group pt-3 pb-4">
                                            <span className="text-white" >
                                                Didn't receive the OTP?
                                            </span>
                                            {/* <p className="text-white" ref={timerRef}>{expiryTimer > 0 ? formatTime(expiryTimer) : "Time Expired"}</p> */}
                                            {
                                                !isVisible ? <div className="text-white" id="otp-timer">Resend: 00:{String(timeLeft).padStart(2, "0")}</div> : null
                                            }

                                            <button
                                                type="button"
                                                className={!isVisible ? "text-decoration-underline text-white bg-transparent ps-1 d-none" : "text-decoration-underline text-white bg-transparent ps-1 d-block"}
                                                onClick={resendOtp}
                                            >
                                                Resend OTP
                                            </button>
                                        </div>
                                        <div className="form-group">
                                            <button type="button" className="comman-btn w-100" onClick={verifyOtp}>
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OTP;
