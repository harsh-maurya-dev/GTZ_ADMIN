import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function CustomerEdit() {
    const { id } = useParams();
    const [customer, setCustomer] = useState({
        user_name: '',
        first_name: '',
        last_name: '',
        email: '',
        country: '',
        state: '',
        city: '',
        phone_number: '',
        pin_code: '',
        newsletter: false,
        country_code: '',
        address: ''
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
    const handleSubmit = () => {
        console.log('Updated customer data:', customer);
        // Add your update API call here
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
                        <form class="form-design">
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
                                                id="flexSwitchCheckCheckedDisabled" checked />
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
                                        <input type="text" class="form-control" placeholder="Georgeanna forex pvt ltd" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">UserName</label>
                                        <input type="text" class="form-control" name='user_name' value={customer.user_name} onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">Email</label>
                                        <input type="text" class="form-control" value={customer.email} disabled />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">MT Master Passowrd</label>
                                        <input type="text" class="form-control" placeholder="" />
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
                                        <input type="text" class="form-control" disabled value={`${customer.country_code} ${customer.phone_number}`} />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">City</label>
                                        <input type="text" class="form-control" name='city' value={customer.city} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">State</label>
                                        <input type="text" class="form-control" name='state' value={customer.state} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">ZIP</label>
                                        <input type="text" class="form-control" name='pin_code' value={customer.pin_code} onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">Country</label>
                                        {/* <select name="" id="" class="form-select"></select> */}
                                        <input type="text" class="form-control" placeholder="" name='country' value={customer.country} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">Language</label>
                                        <select name="" id="" class="form-select"></select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="" class="form-label">is Picture Upload Allowed</label>
                                        <select name="" id="" class="form-select"></select>
                                    </div>
                                </div>
                                <div class="col-3 mt-3 mx-auto">
                                    <div class="form-group">
                                        <button class="comman-btn w-100" type='button' onClick={handleSubmit}>Update</button>
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
