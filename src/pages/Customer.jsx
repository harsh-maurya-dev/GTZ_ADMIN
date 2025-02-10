import React, { useEffect, useState } from 'react'
import customer_image from "../assets/img/bg-img/ChatBc.webp"
import user2 from "../assets/img/user/user-2.jpg"
import user3 from "../assets/img/user/user-3.jpg"
import user4 from "../assets/img/user/user-4.jpg"
import user6 from "../assets/img/user/user-6 (1).jpg"
import ShimmerEffect from '../components/skeleton_loading/ShimmerEffect'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Customer = () => {
    const [customerDetails, setCustomerDetails] = useState([])
    const users = [
        {
            id: 1,
            image: user2,
            name: "Georgeanna Ramero",
            email: "georgeanna@gmail.com",
            mobile: "(480) 914-6565",
            username: "MathAnder",
            newsletter: "No",
            address: "47 W 13th St, New York, NY 10011",
            dateOfRegistration: "20-02-2024",
            language: "English",
        },
        {
            id: 2,
            image: user3,
            name: "Cami Macha",
            email: "cami@gmail.com",
            mobile: "(480) 914-6565",
            username: "CAMCHA",
            newsletter: "No",
            address: "47 W 13th St, New York, NY 10011",
            dateOfRegistration: "20-02-2024",
            language: "English",
        },
        {
            id: 3,
            image: user4,
            name: "Alda Ziemer",
            email: "Alda@gmail.com",
            mobile: "(480) 914-6565",
            username: "ALZIMER",
            newsletter: "No",
            address: "47 W 13th St, New York, NY 10011",
            dateOfRegistration: "20-02-2024",
            language: "English",
        },
        {
            id: 4,
            image: user6,
            name: "Dalton Paden",
            email: "Dalyton@gmail.com",
            mobile: "(480) 914-6565",
            username: "Dalen",
            newsletter: "No",
            address: "47 W 13th St, New York, NY 10011",
            dateOfRegistration: "20-02-2024",
            language: "French",
        },
    ];

    // const fetchData = () => {
    //     const response = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(users)
    //         }, 1000)
    //     })

    //     response.then((data) => {
    //         setCustomerDetails(data)
    //         console.log("resolved")
    //     })
    // }

    const fetchCustomer = async () => {
        const token = localStorage.getItem("token")
        if (!token) {
            toast.error("No token found. Please log in again.", { style: { backgroundColor: "#1a406a", color: "#fff" } });
            return;
        }
        try {
            const response = await axios.patch(`${import.meta.env.VITE_API_URL}/user/getCustomerList`,{},
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token-user": token,
                    }
                }
            )
            if(response.data.error === false){
                setCustomerDetails(response.data.results.customers)
                console.log(response.data.results);
                
            }
        } catch (error) {
            toast.error(error.message, { style: { backgroundColor: "#1a406a", color: "#fff" } });
            console.log(error);
        }
    }
    
    function formatDate (createdAt){
        const date = createdAt.split("T")[0]
        return date
    }

    useEffect(() => {
        // fetchData()
        fetchCustomer()
    }, [])

    return (
        <>
            {/* customer-management */}
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <div className="">
                                <h2 className="comman-heading">Customer's</h2>
                                <span className="border rounded-pill py-1 px-3">4</span>
                            </div>
                            <div className="">
                                <Link to="/customer_add" className="comman-btn">
                                    <i className="fa-solid fa-plus"></i>
                                    Add
                                </Link>
                            </div>
                        </div>
                        <div className="breadcrumb-img-wrapper">
                            <div className="breadcrumb-img">
                                <img src={customer_image} alt="" className="w-100 h-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Customer</h2>
                        <div className="">
                            <div className="dropdown">
                                <button className="comman-btn bg-dark-main rounded-3 px-3" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-filter"></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                        <label className="form-label">Year</label>
                                        <select className="form-select">
                                            <option value="">2020</option>
                                            <option value="">2021</option>
                                            <option value="">2022</option>
                                            <option value="">2023</option>
                                            <option value="">2024</option>
                                        </select>
                                    </li>
                                    <li className="dropdown-item">
                                        <label className="form-label">Show List</label>
                                        <select className="form-select">
                                            <option value="">05</option>
                                            <option value="">10</option>
                                            <option value="">15</option>
                                            <option value="">20</option>
                                            <option value="">25</option>
                                            <option value="">30</option>
                                            <option value="">35</option>
                                            <option value="">40</option>
                                            <option value="">45</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="comman-design-body">
                        <div className="table-responsive">
                            {
                                customerDetails.length > 0 ? (<table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Sr</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile No.</th>
                                            <th>Username</th>
                                            <th>Newsletter</th>
                                            <th>Language</th>
                                            <th>Address</th>
                                            <th>Date Of Registration</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customerDetails.map((customer, index) => (
                                            <tr key={customer.id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div className="table-user-img">
                                                            <img src={customer.image} className="w-100 h-10" alt={customer.name} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{customer.user_name}</td>
                                                <td>{customer.email}</td>
                                                <td>{`(${customer.country_code}) ${customer.phone_number}`}</td>
                                                <td>{`${customer.first_name} ${customer.last_name}`}</td>
                                                <td>{customer.newsletter}</td>
                                                <td>{customer.language}</td>
                                                <td>{customer.address}</td>
                                                <td>{formatDate(customer.createdAt)}</td>
                                                <td>
                                                    <div className="d-flex justify-content-center gap-2 align-items-center">
                                                        <Link to={`/customers_view/${index}`} className="table-icon bg-success">
                                                            <i className="fa-solid fa-desktop"></i>
                                                        </Link>
                                                        <a href="customer_edit.html" className="table-icon bg-main">
                                                            <i className="fa-solid fa-pencil"></i>
                                                        </a>
                                                        <a href="#" className="table-icon bg-danger">
                                                            <i className="fa-solid fa-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>)
                                    :
                                    <ShimmerEffect />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Customer
