import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function CustomerEdit() {
    const { id } = useParams();
    const [masterPassword, setMasterPassword] = useState("");
    const [picAllowed, setPicAllowed] = useState(true);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
        defaultValues: {
            user_name: '',
            first_name: '',
            last_name: '',
            email: '',
            email_confirmed: false,
            country: '',
            state: '',
            city: '',
            phone_number: '',
            pin_code: '',
            news_letter: false,
            country_code: '',
            address: '',
            language: '',
            company: ''
        }
    });

    // Fetch customer details
    useEffect(() => {
        const fetchCustomer = async () => {
            const token = localStorage.getItem("token");

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/user/getCustomerDetails/${id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "x-auth-token-user": token,
                        },
                    }
                );
                reset(response.data.results?.customer);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                toast.error("Error fetching customer details");
                console.error("Error fetching customer details:", error);
            }
        };

        fetchCustomer();
    }, [id, reset]);

    // Handle form submission
    const onSubmit = async (data) => {
        const token = localStorage.getItem("token");
        const formData = {
            "customerId": data._id,
            "first_name": data.first_name,
            "last_name": data.last_name,
            "user_name": data.user_name,
            "city": data.city,
            "state": data.state,
            "pin_code": data.pin_code,
            "address": data.address,
            "phone_number": data.phone_number,
            "country_code": data.country_code,
            "email": data.email,
            "country": data.country,
            "language": data.language,
            "news_letter": data.news_letter,
            "email_confirmed": data.email_confirmed,
            "pic_allowed": picAllowed,
            "master_password": masterPassword
        }
        // console.log(data);


        try {
            const response = await axios.put(
                `${import.meta.env.VITE_API_URL}/user/updateCustomer`,
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token-user": token,
                    },
                }
            );
            if (response.data.error === false) {
                toast.success(response.data.message);
                console.log("Updated customer details:", response.data);
                navigate("/customers_management")
                // window.location.reload()
            }
            else {
                toast.error(response.data.message)
                console.log(response.data.message)
            }
        } catch (error) {
            // toast.error("Error updating customer details");
            console.error("Error updating customer details:", error);
        }
    };

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className="mt-4">
            <div className="comman-design2">
                <div className="comman-design-header">
                    <h2 className="comman-heading">Customer Edit</h2>
                </div>
                <div className="comman-design-body">
                    <form className="form-design" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-4">
                                <div className="form-group">
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="newsLetterCheckBox"
                                            {...register('news_letter')}
                                        />
                                        <label className="form-check-label ms-2" htmlFor="newsLetterCheckBox">
                                            Newsletter
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group">
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="emailConfirmedCheckBox"
                                            {...register('email_confirmed')}
                                        />
                                        <label className="form-check-label ms-2" htmlFor="emailConfirmedCheckBox">
                                            Email Confirmed
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="first_name" className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register('first_name', { required: 'First Name is required' })}
                                    />
                                    {errors.first_name && <span className="text-danger">{errors.first_name.message}</span>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="last_name" className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register('last_name', { required: 'Last Name is required' })}
                                    />
                                    {errors.last_name && <span className="text-danger">{errors.last_name.message}</span>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="company" className="form-label">Company Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register('company')}
                                        placeholder="Forex Pvt Ltd"
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="user_name" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register('user_name', { required: 'Username is required' })}
                                    />
                                    {errors.user_name && <span className="text-danger">{errors.user_name.message}</span>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                                    />
                                    {errors.email && <span className="text-danger">{errors.email.message}</span>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="master_password" className="form-label">MT Master Password</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={masterPassword}
                                        onChange={(e) => setMasterPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register('address', { required: 'Addressr is required' })}
                                    />
                                    {errors.address && <span className="text-danger">{errors.address.message}</span>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="phone_number" className="form-label">Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register('phone_number', { required: 'Phone number is required' })}
                                    />
                                    {errors.phone_number && <span className="text-danger">{errors.phone_number.message}</span>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register('country')}
                                        placeholder="United Kingdom"
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register('state', { required: 'State is required' })}
                                        placeholder="London"
                                    />
                                </div>
                                {errors.state && <span className="text-danger">{errors.state.message}</span>}
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register('city', { required: 'City is required' })}
                                        placeholder="New York"
                                    />
                                    {errors.city && <span className="text-danger">{errors.city.message}</span>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="pin_code" className="form-label">ZIP</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register('pin_code')}
                                        placeholder="000-000"
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="language" className="form-label">Language</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register('language')}
                                        placeholder="English"
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="pic_allowed" className="form-label">Is Picture Upload Allowed</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="pic_allowed"
                                        accept=".png, .jpg, .jpeg"
                                    />
                                </div>
                            </div>
                            <div className="col-3 mt-3 mx-auto">
                                <div className="form-group">
                                    <button className="comman-btn w-100" type="submit">Update</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CustomerEdit;