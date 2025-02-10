import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function CustomerAdd() {
    const [formData, setFormData] = useState({ first_name: "", last_name: "", email: "", phone_number: "", country_code: "", country: "", address: "", city: "", state: "", pin_code: "" })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const createCustomer = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("No token found. Please log in again.", { style: { backgroundColor: "#1a406a", color: "#fff" } });
            return;
        }
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/user/addCustomer`,
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token-user": token,
                    },
                }
            );
            if (response.data.error === false) {
                toast.success(response.data.message, { style: { backgroundColor: "#1a406a", color: "#fff" } });
                setFormData({
                    first_name: "", last_name: "", email: "", phone_number: "",
                    country_code: "", country: "", address: "", city: "", state: "", pin_code: ""
                });
            } else {
                toast.error(response.data.message || "An error occurred while creating the customer.", {
                    style: { backgroundColor: "#1a406a", color: "#fff" },
                });
            }
        } catch (error) {
            console.error("Error creating customer:", error);
            toast.error(error.response?.data?.message || error.message || "An unexpected error occurred.", {
                style: { backgroundColor: "#1a406a", color: "#fff" },
            });
        }
    };


    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Customer Add</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="form-design">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="first_name" className="form-label">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="first_name"
                                            name="first_name"
                                            value={formData.first_name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="last_name" className="form-label">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="last_name"
                                            name="last_name"
                                            value={formData.last_name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="phone_number" className="form-label">Mobile No.</label>
                                        {/* <input
                                            type="text"
                                            className="form-control"
                                            id="phone_number"
                                            name="phone_number"
                                            value={formData.phone_number}
                                            onChange={handleChange}
                                        /> */}
                                        <PhoneInput
                                            inputStyle={{  fontWeight: "400", marginBottom: "0.25rem", margin: ".75rem 0", width:"100%", padding:"1.3rem 3rem", borderRadius:"50px" }}
                                            country={'in'}
                                            name="phone_number"
                                            value={formData.phone_number}
                                            onChange={(phone) => setFormData((prev) => ({ ...prev, phone_number: phone }))}
                                            inputclassName='form-control custom-phone-input'
                                        />
                                    </div>

                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="city" className="form-label">City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="pin_code" className="form-label">Pin Code</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="pin_code"
                                            name="pin_code"
                                            value={formData.pin_code}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="state" className="form-label">State</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="state"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="country" className="form-label">Country</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <textarea
                                            className="form-control h-100"
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            rows="2"
                                        />
                                    </div>
                                </div>
                                <div className="col-3 mt-3 mx-auto">
                                    <div className="form-group">
                                        <button className="comman-btn w-100" onClick={()=>console.log(formData)}>Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CustomerAdd
