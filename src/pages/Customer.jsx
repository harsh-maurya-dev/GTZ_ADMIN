import React, { useEffect, useState } from 'react'
import customer_image from "../assets/img/bg-img/ChatBc.webp"
import ShimmerEffect from '../components/skeleton_loading/ShimmerEffect'
import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Customer = () => {
    const [customerDetails, setCustomerDetails] = useState([])
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const [selectedCustomerId, setSelectedCustomerId] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(false)
    const [totalCustomers, setTotalCustomers] = useState(0)
    const [searchParams, setSearchParam] = useSearchParams()
    // const pageSize = 10
    const [pageSize, setPageSize] = useState(10)
    const [year, setYear] = useState(2025)

    const fetchCustomer = async (page) => {
        setLoading(true)
        const token = localStorage.getItem("token")
        if (!token) {
            toast.error("No token found. Please log in again.", { style: { backgroundColor: "#1a406a", color: "#fff" } })
            setLoading(false)
            return
        }

        try {
            const params = {
                page,
                pageSize,
                year, // Only add if selected
            };


            const response = await axios.patch(
                `${import.meta.env.VITE_API_URL}/user/getCustomerList`,
                params,
                {
                    headers: {
                        "accept": "application/json",
                        "x-auth-token-user": token,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            )

            if (response.data.error === false) {
                setCustomerDetails(response.data.results.customers)
                setTotalPages(response.data.results.totalPages || 1)
                setTotalCustomers(response.data.results.totalCustomers || 0)
            }
        } catch (error) {
            toast.error(error.message, { style: { backgroundColor: "#1a406a", color: "#fff" } })
        } finally {
            setLoading(false)
        }
    }

    const deleteCustomer = async (id) => {
        const button = document.getElementById("confirmDelete")
        button.style.cursor = "not-allowed"

        const token = localStorage.getItem("token")
        try {
            const response = await axios.delete(
                `${import.meta.env.VITE_API_URL}/user/deleteCustomer/${id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token-user": token,
                    },
                }
            )
            if (response.data.error === false) {
                toast.success(response.data.message)
                setIsOpenPopup(false)
                // Refresh current page after deletion
                fetchCustomer(currentPage)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            button.style.cursor = "pointer"
        }
    }

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage)
        }
    }

    // Add currentPage to dependency array to fetch data when page changes
    useEffect(() => {
        fetchCustomer(currentPage);
    }, [currentPage, pageSize, year]);
    
    useEffect(() => {
        setSearchParam({ page: currentPage, pageSize });
    }, [currentPage, pageSize, setSearchParam]);

    function formatDate(createdAt) {
        const date = createdAt.split("T")[0]
        return date
    }

    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <div className="">
                                <h2 className="comman-heading mt-3">Customer's</h2>                            </div>
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
                                        <select className="form-select" value={year} onChange={(e) => setYear(parseInt(e.target.value))}>
                                            <option value={2020}>2020</option>
                                            <option value={2021}>2021</option>
                                            <option value={2022}>2022</option>
                                            <option value={2023}>2023</option>
                                            <option value={2024}>2024</option>
                                            <option value={2025}>2025</option>
                                        </select>
                                    </li>
                                    <li className="dropdown-item">
                                        <label className="form-label">Show List</label>
                                        <select className="form-select" value={pageSize} onChange={(e) => setPageSize(parseInt(e.target.value, 10))}>
                                            <option value={5}>05</option>
                                            <option value={10}>10</option>
                                            <option value={15}>15</option>
                                            <option value={20}>20</option>
                                            <option value={25}>25</option>
                                            <option value={30}>30</option>
                                            <option value={35}>35</option>
                                            <option value={40}>40</option>
                                            <option value={45}>45</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="comman-design-body">
                        <div className="table-responsive">
                            {loading ? (
                                <ShimmerEffect />
                            ) : customerDetails.length > 0 ? (
                                <table className="table table-hover">
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
                                            <tr key={customer._id}>
                                                <td>{(currentPage - 1) * pageSize + index + 1}</td>
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
                                                <td>{customer.news_letter ? "Yes" : "No"}</td>
                                                <td>{customer.language || "English"}</td>
                                                <td>{customer.address || "--"}</td>
                                                <td>{formatDate(customer.createdAt)}</td>
                                                <td>
                                                    <div className="d-flex justify-content-center gap-2 align-items-center">
                                                        <Link to={`/customers_view/${customer._id}`} className="table-icon bg-success">
                                                            <i className="fa-solid fa-desktop"></i>
                                                        </Link>
                                                        <Link to={`/customer_edit/${customer._id}`} className="table-icon bg-main">
                                                            <i className="fa-solid fa-pencil"></i>
                                                        </Link>
                                                        <div className="table-icon bg-danger" data-bs-toggle="modal" data-bs-target="#deleteUserModal"
                                                            onClick={() => {
                                                                setSelectedCustomerId(customer._id)
                                                                setIsOpenPopup(true)
                                                            }}>
                                                            <i className="fa-solid fa-trash"></i>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="text-center py-4">No customers found</div>
                            )}
                        </div>

                        {totalPages > 1 && (
                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-end pt-2">
                                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                        <button
                                            className="page-link"
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                        >
                                            Previous
                                        </button>
                                    </li>

                                    {[...Array(totalPages)].map((_, index) => (
                                        <li
                                            key={index}
                                            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                                        >
                                            <button
                                                className="page-link"
                                                onClick={() => handlePageChange(index + 1)}
                                            >
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}

                                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                        <button
                                            className="page-link"
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                        >
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        )}

                        {isOpenPopup && (
                            <div className="modal fade user-modal show d-block" id="deleteUserModal" tabIndex="-1" aria-labelledby="deleteUserModalLabel"
                                aria-hidden="true" style={{ backgroundColor: "#00000075" }}>
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content delete-user-modal">
                                        <div className="modal-header">
                                            <h5 className="modal-title text-white" id="deleteUserModalLabel">
                                                <i className="fa fa-user-circle"></i> Confirm Delete User
                                            </h5>
                                            <button type="button" className="btn-close text-white bg-white" data-bs-dismiss="modal"
                                                aria-label="Close" id="closeDeleteUserModal" onClick={() => setIsOpenPopup(false)}></button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <div className="delete-icon">
                                                <i className="fa fa-times"></i>
                                            </div>
                                            <p className="mt-3 text-white">Are you sure you want to delete this user?</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-light" onClick={() => setIsOpenPopup(false)}>Cancel</button>
                                            <button type="button" className="btn btn-danger" id="confirmDelete" onClick={() => deleteCustomer(selectedCustomerId)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Customer