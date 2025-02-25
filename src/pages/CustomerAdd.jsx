import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller, useForm } from "react-hook-form";

function CustomerAdd() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        control,
        reset,
        clearErrors
    } = useForm({
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            contact: '',
            country: '',
            state: '',
            city: '',
            pin_code: '',
            address: '',
            phone_number: '',
            country_code: ""
        }
    });

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchCountries = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${import.meta.env.VITE_LOCATION_API_URL}/countries`);
            setCountries(response.data.data);
        } catch (error) {
            console.error("Error fetching countries:", error);
            toast.error("Failed to fetch countries. Please try again later.", {
                style: { backgroundColor: "#1a406a", color: "#fff" },
            });
        } finally {
            setLoading(false);
        }
    };

    const handleCountryChange = async (countryName) => {
        setValue("country", countryName);
        setValue("state", "");
        setValue("city", "");
        clearErrors("country");

        try {
            const formData = new URLSearchParams();
            formData.append("country", countryName);

            const response = await axios.post(
                `${import.meta.env.VITE_LOCATION_API_URL}/countries/states`,
                formData,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            setStates(response.data?.data?.states || []);
        } catch (error) {
            console.error("Error fetching states:", error);
            setStates([]);
        }
    };

    const handleStateChange = async (event) => {
        const selectedState = event.target.value;
        errors.state = "";
        setValue("state", selectedState);
        setValue("city", "");

        const selectedCountry = watch('country');

        try {
            const formParams = new URLSearchParams();
            formParams.append("country", selectedCountry);
            formParams.append("state", selectedState);

            const response = await axios.post(
                `${import.meta.env.VITE_LOCATION_API_URL}/countries/state/cities`,
                formParams,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );

            if (response.data && response.data.data) {
                setCities(response.data.data);
            } else {
                setCities([]);
            }
        } catch (error) {
            console.error("Error fetching cities:", error);
            setCities([]);
        }
    };

    const handleCityChange = async (event) => {
        const selectedCity = event.target.value;
        setValue("city", selectedCity);
        errors.city = "";
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        console.log("Form Data Submitted:", data);
        console.log("Form Errors:", errors);

        if (!data) {
            console.error("Form data is undefined.");
            return;
        }

        const formData = {
            ...data,
            country_code: data.contact?.countryCode || '',
            phone_number: data.contact?.phoneNumber || ''
        };

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
                reset({
                    first_name: '',
                    last_name: '',
                    email: '',
                    contact: '',
                    country: '',
                    state: '',
                    city: '',
                    pin_code: '',
                    address: '',
                    phone_number: '',
                    country_code: ''
                });
                console.log("successfully hit api");
            } else {
                toast.error(response.data.message || "An error occurred while creating the customer.", {
                    style: { backgroundColor: "#1a406a", color: "#fff" },
                });
                console.log("rejected the apii, cuz in res get error tru");
            }
        } catch (error) {
            console.error("Error creating customer:", error);
        } finally {
            setIsSubmitting(false);
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
                        <form className="form-design" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="first_name" className="form-label">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
                                            name="first_name"
                                            {...register('first_name', {
                                                required: 'First name is required',
                                                minLength: {
                                                    value: 2,
                                                    message: 'First name must be at least 2 characters'
                                                }
                                            })}
                                        />
                                        {errors.first_name && (
                                            <div className="invalid-feedback">{errors.first_name.message}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="last_name" className="form-label">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
                                            name="last_name"
                                            {...register('last_name', {
                                                required: 'Last name is required',
                                                minLength: {
                                                    value: 2,
                                                    message: 'Last name must be at least 2 characters'
                                                }
                                            })}
                                        />
                                        {errors.last_name && (
                                            <div className="invalid-feedback">{errors.last_name.message}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            name="email"
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: 'Invalid email address'
                                                }
                                            })}
                                        />
                                        {errors.email && (
                                            <div className="invalid-feedback">{errors.email.message}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="contact" className="form-label">Phone Number</label>
                                        <Controller
                                            name="contact"
                                            control={control}
                                            rules={{ required: "Phone number is required" }}
                                            render={({ field }) => (
                                                <PhoneInput
                                                    country={"us"}
                                                    inputclassName={`form-control custom-phone-input ${errors.contact ? 'is-invalid' : ''}`}
                                                    inputStyle={{
                                                        fontWeight: "400",
                                                        marginBottom: "0.25rem",
                                                        margin: ".75rem 0",
                                                        width: "100%",
                                                        padding: "1.3rem 3rem",
                                                        borderRadius: "50px",
                                                    }}
                                                    value={field?.value?.phoneNumber ? `${field?.value?.countryCode}${field?.value?.phoneNumber}` : ""}
                                                    onChange={(value, countryData) => {
                                                        const phoneNumberWithoutCountry = value.slice(countryData.dialCode.length);
                                                        field.onChange({
                                                            phoneNumber: phoneNumberWithoutCountry,
                                                            countryCode: `+${countryData.dialCode}`,
                                                        });
                                                        handleCountryChange(countryData.name); // Update country and fetch states
                                                    }}
                                                />
                                            )}
                                        />
                                        {errors.contact && (
                                            <p className="invalid-feedback">{errors.contact.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="country" className="form-label">
                                            Country
                                        </label>
                                        <select
                                            className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                                            disabled={loading}
                                            {...register('country', {
                                                required: 'Please select a country'
                                            })}
                                            onChange={(e) => handleCountryChange(e.target.value)}
                                        >
                                            <option value="">Select a Country</option>
                                            {loading ? (
                                                <option disabled>Loading countries...</option>
                                            ) : countries?.length > 0 ? (
                                                countries?.map((country, index) => (
                                                    <option key={index} value={country.country}>
                                                        {country.country}
                                                    </option>
                                                ))
                                            ) : (
                                                <option disabled>No countries available</option>
                                            )}
                                        </select>
                                        {errors.country && (
                                            <div className="invalid-feedback">{errors.country.message}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="state" className="form-label">
                                            State
                                        </label>
                                        <select
                                            className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                                            disabled={loading || states.length === 0}
                                            name="state"
                                            {...register('state', {
                                                required: 'Please select a state'
                                            })}
                                            onChange={handleStateChange}
                                        >
                                            <option value="">Select a State</option>
                                            {loading ? (
                                                <option disabled>Loading states...</option>
                                            ) : states.length > 0 ? (
                                                states.map((state, index) => (
                                                    <option key={index} value={state.name}>
                                                        {state.name}
                                                    </option>
                                                ))
                                            ) : (
                                                <option disabled>No states available</option>
                                            )}
                                        </select>
                                        {errors.state && (
                                            <div className="invalid-feedback">{errors.state.message}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="city" className="form-label">
                                            City
                                        </label>
                                        <select
                                            className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                                            disabled={!watch('state')}
                                            name="city"
                                            {...register('city', {
                                                required: 'Please select a city'
                                            })}
                                            onChange={handleCityChange}
                                        >
                                            <option value="">Select a City</option>
                                            {loading ? (
                                                <option disabled>Loading cities...</option>
                                            ) : cities.length > 0 ? (
                                                cities.map((city, index) => (
                                                    <option key={index} value={city}>
                                                        {city}
                                                    </option>
                                                ))
                                            ) : (
                                                <option disabled>No cities available</option>
                                            )}
                                        </select>
                                        {errors.city && (
                                            <div className="invalid-feedback">{errors.city.message}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="pin_code" className="form-label">
                                            Pin Code
                                        </label>
                                        <input
                                            maxLength={6}
                                            type="number"
                                            className={`form-control ${errors.pin_code ? 'is-invalid' : ''}`}
                                            id="pin_code"
                                            name="pin_code"
                                            {...register('pin_code', {
                                                required: 'Pin code is required',
                                                pattern: {
                                                    value: /^\d{6}$/,
                                                    message: 'Pin code must be 6 digits'
                                                }
                                            })}
                                        />
                                        {errors.pin_code && (
                                            <div className="invalid-feedback">{errors.pin_code.message}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="address" className="form-label">
                                            Address
                                        </label>
                                        <textarea
                                            className={`form-control h-100 ${errors.address ? 'is-invalid' : ''}`}
                                            rows="2"
                                            name="address"
                                            {...register('address', {
                                                required: 'Address is required',
                                                minLength: {
                                                    value: 10,
                                                    message: 'Address must be at least 10 characters'
                                                }
                                            })}
                                        />
                                        {errors.address && (
                                            <div className="invalid-feedback">{errors.address.message}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-3 mt-3 mx-auto">
                                    <div className="form-group">
                                        <button className="comman-btn w-100" type="submit">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomerAdd;