import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";

function CustomerAdd() {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        country_code: "",
        country: "",
        address: "",
        city: "",
        state: "",
        pin_code: "",
    });
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const createCustomer = async (e) => {
        e.preventDefault()
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

    const fetchCountries = async () => {
        setLoading(true); // Start loading
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_LOCATION_API_URL}/countries`
            );
            setCountries(response.data.data);
            // console.log(response.data.data);
        } catch (error) {
            console.error("Error fetching countries:", error);
            toast.error("Failed to fetch countries. Please try again later.", {
                style: { backgroundColor: "#1a406a", color: "#fff" },
            });
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const handleCountryChange = async (event) => {
        const selectedCountry = event.target.value;
        setFormData((prev) => ({ ...prev, country: selectedCountry }));

        try {
            const formData = new URLSearchParams();
            formData.append("country", selectedCountry);

            const response = await axios.post(
                `${import.meta.env.VITE_LOCATION_API_URL}/countries/states`,
                formData,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            if (response.data && response.data.data) {
                setStates(response.data.data.states); // Update states list
            } else {
                setStates([]); // Reset states if no data found
            }

            console.log(response.data.data.states); // Handle the response data
        } catch (error) {
            console.error("Error fetching states:", error);
        }
    };

    const handleStateChange = async (event) => {
        const selectedState = event.target.value;
        setFormData((prev) => ({ ...prev, state: selectedState }));
        const selectedCountry = formData.country;

        try {
            const formData = new URLSearchParams();
            formData.append("country", selectedCountry);
            formData.append("state", selectedState);

            const response = await axios.post(
                `${import.meta.env.VITE_LOCATION_API_URL}/countries/state/cities`,
                formData,
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
            console.log(response.data.data);
        } catch (error) {
            console.error("Error fetching cities:", error);
            setCities([]);
        }
    };

    const handleCityChange = async (event) => {
        const selectedCity = event.target.value;
        setFormData((prev) => ({ ...prev, city: selectedCity }));
    };


    const handlePhoneChange = (value, countryData) => {
        const countryCode = `+${countryData.dialCode}`;
        let cleanedValue = value.replace(/\D/g, "");
        let countryCodeOnly = countryCode.replace(/\D/g, "");
        let phoneNumberWithoutCountry = cleanedValue.startsWith(countryCodeOnly)
            ? cleanedValue.slice(countryCodeOnly.length)
            : cleanedValue;

        setFormData((prev) => ({
            ...prev,
            phone_number: phoneNumberWithoutCountry,
            country_code: countryCode,
        }));
    };



    useEffect(() => {
        fetchCountries();
    }, []);

    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Customer Add</h2>
                    </div>
                    <div className="comman-design-body">
                        <form className="form-design" onSubmit={handleSubmit(createCustomer)}>
                            <div className="row">
                                {/* first name */}
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="first_name" className="form-label">
                                            First Name
                                        </label>
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
                                {/* last name */}
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="last_name" className="form-label">
                                            Last Name
                                        </label>
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
                                {/* email */}
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
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
                                {/* phone number */}
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="phone_number" className="form-label">
                                            Mobile No.
                                        </label>
                                        <PhoneInput
                                            inputStyle={{
                                                fontWeight: "400",
                                                marginBottom: "0.25rem",
                                                margin: ".75rem 0",
                                                width: "100%",
                                                padding: "1.3rem 3rem",
                                                borderRadius: "50px",
                                            }}
                                            country={"us"}
                                            name="phone_number"
                                            value={`${formData.country_code}${formData.phone_number}`}
                                            // onChange={(phone) =>
                                            //     setFormData((prev) => ({
                                            //         ...prev,
                                            //         phone_number: phone,
                                            //     }))
                                            // }
                                            onChange={handlePhoneChange}
                                            inputclassName="form-control custom-phone-input"
                                        />
                                    </div>
                                </div>
                                {/* countries */}
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="country" className="form-label">
                                            Country
                                        </label>
                                        <select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleCountryChange}
                                            disabled={loading}
                                            className="form-control"
                                        >
                                            <option value="" className="text-white form-control">
                                                Select a Country
                                            </option>
                                            {loading ? (
                                                <option disabled>Loading countries...</option>
                                            ) : countries.length > 0 ? (
                                                countries.map((country, index) => (
                                                    <option
                                                        key={index}
                                                        value={country.country}
                                                        className="test-white form-control"
                                                    >
                                                        {country.country}
                                                    </option>
                                                ))
                                            ) : (
                                                <option disabled>No countries available</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                {/* states */}
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="state" className="form-label">
                                            State
                                        </label>
                                        <select
                                            name="state"
                                            value={formData.state}
                                            onChange={handleStateChange} // ✅ Correct placement
                                            disabled={loading || states.length === 0}
                                            className="form-control"
                                        >
                                            <option value="" className="text-white form-control">
                                                Select a State
                                            </option>
                                            {loading ? (
                                                <option disabled>Loading states...</option>
                                            ) : states.length > 0 ? (
                                                states.map((state, index) => (
                                                    <option key={index} value={state.name} className="text-white form-control">
                                                        {state.name} {/* ✅ Show state name correctly */}
                                                    </option>
                                                ))
                                            ) : (
                                                <option disabled>No states available</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                {/* cities */}
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="city" className="form-label">
                                            City
                                        </label>
                                        <select
                                            name="city"
                                            value={formData.city}
                                            onChange={handleCityChange} // ✅ Correct placement
                                            disabled={loading || cities.length === 0}
                                            className="form-control"
                                        >
                                            <option value="" className="text-white form-control">
                                                Select a City
                                            </option>
                                            {loading ? (
                                                <option disabled>Loading cities...</option>
                                            ) : cities.length > 0 ? (
                                                cities.map((city, index) => (
                                                    <option key={index} value={city} className="text-white form-control">
                                                        {city} {/* ✅ Show state name correctly */}
                                                    </option>
                                                ))
                                            ) : (
                                                <option disabled>No cities available</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                {/* pin code */}
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="pin_code" className="form-label">
                                            Pin Code
                                        </label>
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
                                {/* address */}
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="address" className="form-label">
                                            Address
                                        </label>
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
                                        <button
                                            className="comman-btn w-100"
                                            type="submit"
                                        >
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
