import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function CustomerEdit() {
    const { id } = useParams();
    const [masterPassword, setMasterPassword] = useState("")
    const [picAllowed, setPicAllowed] = useState(true)
    const [customer, setCustomer] = useState({
        user_name: '',
        first_name: '',
        last_name: '',
        email: '',
        email_confirmed: '',
        country: '',
        state: '',
        city: '',
        phone_number: '',
        pin_code: '',
        newsletter: false,
        country_code: '',
        address: '',
        language: '',
    });
    const [loading, setLoading] = useState(true);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setCustomer(prev => ({
            ...prev,
            [name]: newValue
        }));

        // Console log the changed field and its new value
        // console.log(`Field ${name} changed to:`, newValue);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem("token")
        console.log('Updated customer data:', customer);
        // Add your update API call here

        const apiCustomerData = {
            customerId: customer._id,
            first_name: customer.first_name,
            last_name: customer.last_name,
            user_name: customer.name,
            city: customer.city,
            state: customer.state,
            pin_code: customer.pin_code,
            address: customer.address,
            phone_number: customer.phone_number,
            country_code: customer.country_code,
            email: customer.email,
            country: customer.country,
            language: customer.language,
            news_letter: customer.newsletter,
            email_confirmed: customer.email_confirmed,
            pic_allowed: customer.pic_allowed,
            master_password: masterPassword
        };
        try {
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/user/updateCustomer`, apiCustomerData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token-user": token,
                    }
                }
            )
            if (response.data.error === false) {
                toast.success(response.data.message)
                console.log(response.data.message)
                window.location.reload()
            }
            else {
                toast.error(response.data.message)
                console.log(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log("catch error:", error.message)
        }
    };

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
                setCustomer(response.data.results?.customer);
                setLoading(false)
                console.log(response.data.results.customer);
            } catch (error) {
                setLoading(true)
                console.error("Error fetching customer details:", error);
            }
        };

        fetchCustomer();
    }, [id]);

    return (
        <>
            <div class="mt-4">
                <div class="comman-design2">
                    <div class="comman-design-header">
                        <h2 class="comman-heading">Customer Edit</h2>
                    </div>
                    <div class="comman-design-body">
                        <form class="form-design" onSubmit={handleSubmit}>
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox"
                                                id="flexSwitchCheckCheckedDisabled"
                                                name='newsletter' value={customer.newsletter} onChange={handleInputChange}
                                            />
                                            <label class="form-check-label ms-2"
                                                for="flexSwitchCheckCheckedDisabled">Newsletter</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox"
                                                id="flexSwitchCheckCheckedDisabled" name='email_confirmed' value={customer.email_confirmed} onChange={handleInputChange} />
                                            <label class="form-check-label ms-2"
                                                for="flexSwitchCheckCheckedDisabled">Email Confirmed</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">First Name</label>
                                        <input type="text" class="form-control" name='first_name' value={customer.first_name} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">Last Name</label>
                                        <input type="text" class="form-control" name='last_name' value={customer.last_name} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">Company Name</label>
                                        <input type="text" class="form-control" placeholder="forex pvt ltd" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">UserName</label>
                                        <input type="text" class="form-control" name='user_name' value={customer.user_name} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">Email</label>
                                        <input type="text" class="form-control" name='email' value={customer.email} onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">MT Master Passowrd</label>
                                        <input type="text" class="form-control" placeholder="" name='master_password' value={masterPassword} onChange={(e) => setMasterPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            value={customer.address}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">Phone</label>
                                        <input type="text" class="form-control" name='phone_number' value={`${customer.phone_number}`} onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">Country</label>
                                        {/* <select name="" id="" class="form-select"></select> */}
                                        <input type="text" class="form-control" placeholder="United Kingdom" name='country' value={customer.country} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">State</label>
                                        <input type="text" class="form-control" placeholder='London' name='state' value={customer.state} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">City</label>
                                        <input type="text" class="form-control" name='city' placeholder='New York' value={customer.city} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">ZIP</label>
                                        <input type="text" class="form-control" name='pin_code' placeholder='000-000' value={customer.pin_code} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">Language</label>
                                        <input type="text" class="form-control" placeholder="English" name='language' value={customer.language} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">is Picture Upload Allowed</label>
                                        <input type="file" class="form-control" name='pic_allowed' accept='.png, .jpg, .jpeg' />
                                    </div>
                                </div>
                                <div class="col-3 mt-3 mx-auto">
                                    <div class="form-group">
                                        <button class="comman-btn w-100" type='submit'>Update</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerEdit
