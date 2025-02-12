import React, { useEffect, useState } from 'react'
import user_image from "../assets/img/user/user-3.jpg"
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CustomerView() {

    const { id } = useParams(); // Get the ID from the route
    const [customer, setCustomer] = useState({});
    const [loading, setLoading] = useState(true)
    const { user_name, first_name, last_name, email, country, state, city, phone_number, pin_code, newsletter, country_code, createdAt, address } = customer

    function formatDate(newdata) {
        if (!loading) {
            const date = newdata.split("T")[0]
            return date
        }
    }

    function handleToggle(event) {
        const parent = event.currentTarget.closest(".comman-design2");
        const element = parent?.querySelector(".comman-design-body");
        if (!element) {
            console.error("Element not found!");
            return;
        }
        const height = element.scrollHeight;
        element.classList.toggle("p-0");
        if (element.classList.contains("p-0")) {
            element.style.height = "0";
            event.currentTarget.closest(".commanAccordin")?.classList.remove("show");
        } else {
            element.style.height = `${height + 40}px`;
            event.currentTarget.closest(".commanAccordin")?.classList.add("show");
        }
    }

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
                // console.log(response.data.results.customer);
            } catch (error) {
                setLoading(true)
                console.error("Error fetching customer details:", error);
            }
        };

        fetchCustomer();
    }, [id]);



    return (
        <>
            <div className="mt-4">
                <div className="comman-design">
                    <div className="mb-4 text-end">
                        <button className="comman-btn">
                            <i className="fa-solid fa-address-card me-2"></i>
                            Access Customer Profile
                        </button>
                    </div>
                    <div className="profile-wrapper">
                        <div className="profile-img-wrapper">
                            <div className="profile-user-img">
                                <img src={user_image} className="w-100 h-100" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-center profile-text">{user_name}</h2>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="d-flex gap-3 flex-wrap">
                                {/* <button className="comman-btn bg-blue" onClick="addEditAffiliate()">Edit
                                    Affiliate</button>
                                <button className="comman-btn bg-dark-main" onClick="addPropAccount()">Add a Prop
                                    Account</button>
                                <button className="comman-btn bg-light-blue" onClick="addPurchaseProp()">Purchase
                                    Prop Account</button>
                                <button className="comman-btn bg-danger">User Not Verified</button>
                                <button className="comman-btn" onClick="addBlockLister()">BLOCK Lister</button>
                                <button className="comman-btn" onClick="addNoteList()">
                                    <i className="fa-solid fa-file-edit"></i>
                                    Add Note
                                </button> */}
                                <button className="comman-btn bg-blue">Login in Client</button>
                                <button className="comman-btn bg-list-blue">
                                    <i className="fa-solid fa-person-arrow-up-from-line"></i>
                                    Upgrade
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden Make-Affiliate">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-design">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="form-group">
                                                    <label className="form-label">Payout Email</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="form-group">
                                                    <label className="form-label">Website URl</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-3 mt-2">
                                                <button className="comman-btn mt-4">Custom Commission</button>
                                            </div>
                                            <div className="col-12 mt-3">
                                                <div className="row">
                                                    <div className="col-1 mt-2">
                                                        <p className="text m-0"></p>
                                                    </div>
                                                    <div className="col-3">
                                                        <p className="comman-heading">Referral Threshold</p>
                                                    </div>
                                                    <div className="col-3">
                                                        <p className="comman-heading">Payout Percentage</p>
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-1 mt-2">
                                                        <p className="text m-0">Tier 1</p>
                                                    </div>
                                                    <div className="col-3">
                                                        <input type="number" className="form-control" />
                                                    </div>
                                                    <div className="col-3">
                                                        <input type="number" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-1 mt-2">
                                                        <p className="text m-0">Tier 2</p>
                                                    </div>
                                                    <div className="col-3">
                                                        <input type="number" className="form-control" />
                                                    </div>
                                                    <div className="col-3">
                                                        <input type="number" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-1 mt-2">
                                                        <p className="text m-0">Tier 3</p>
                                                    </div>
                                                    <div className="col-3">
                                                        <input type="number" className="form-control" />
                                                    </div>
                                                    <div className="col-3">
                                                        <input type="number" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-design">
                                                        <label htmlFor="" className="form-label">Description</label>
                                                        <textarea className="form-control h-100"
                                                            rows="4"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button className="comman-btn">
                                                <i className="fa-solid fa-save"></i>
                                                SAVE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden note-send">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-design">
                                        <div className="form-group">
                                            <textarea type="text" className="form-control h-100" rows="3"
                                                placeholder="Send Note In User..."></textarea>
                                        </div>
                                        <div className="form-group">
                                            <button className="comman-btn">
                                                <i className="fa-solid fa-paper-plane"></i>
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden Prop-Account">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-design">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="" className="form-label">Plan Type</label>
                                                    <select className="form-select">
                                                        <option value="">One Step Assessment</option>
                                                        <option value="">Two Step Assessment (Phase 1)</option>
                                                        <option value="">Two Step Assessment (Phase 2)</option>
                                                        <option value="">One Step Funded</option>
                                                        <option value="">Two Step Funded</option>
                                                        <option value="">Instant Funded</option>
                                                        <option value="">Free Trial</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="" className="form-label">Plan</label>
                                                    <select className="form-select">
                                                        <option value="">select Plan</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button className="comman-btn">
                                                <i className="fa-solid fa-plus"></i>
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden Purchase-Account">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-design">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="" className="form-label">Plan Type</label>
                                                    <select className="form-select">
                                                        <option value="">One Step Assessment</option>
                                                        <option value="">Two Step Assessment (Phase 1)</option>
                                                        <option value="">Two Step Assessment (Phase 2)</option>
                                                        <option value="">One Step Funded</option>
                                                        <option value="">Two Step Funded</option>
                                                        <option value="">Instant Funded</option>
                                                        <option value="">Free Trial</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="" className="form-label">Plan</label>
                                                    <select className="form-select">
                                                        <option value="">select Plan</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="" className="form-label">Price</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button className="comman-btn">
                                                <i className="fa-solid fa-save"></i>
                                                SAVE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden Block-lister">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-design">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea className="form-control h-100" rows="4"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button className="comman-btn">
                                                <i className="fa-solid fa-save"></i>
                                                SAVE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="row">
                    <div className="col-12">
                        <div className="comman-design2">
                            <div className="comman-design-header">
                                <h2 className="comman-heading">Information</h2>
                            </div>
                            <div className="comman-design-body">
                                <div className="row">
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">Name</h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-user-circle"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold">{`${first_name} ${last_name}`}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">Email</h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold">{email}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">Verified</h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-check-circle"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold">No</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">UserName</h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-user"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold">{user_name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">Newsletter</h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-newspaper"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold">{newsletter ? newsletter : "No"}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">MT4 Password
                                            </h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-newspaper"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold">t4nj@j76</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">Mobile No.</h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-phone-volume"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold">{`${country_code} ${phone_number}`}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">Company</h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-building"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold"></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">Address</h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-globe-europe"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold">{address}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">city</h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-globe"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold">{city}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">State</h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-globe-asia"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold">{state}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">Zip</h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-file-archive"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold">{pin_code}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">Country</h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-globe-americas"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold">{country}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">Date Of
                                                Registeration</h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-registered"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold">{formatDate(createdAt)}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">Referrer Name
                                            </h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-font-awesome-flag"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold"></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">Referrer
                                                Customer ID</h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-user-plus"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold"></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">Public UserName
                                            </h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-republican"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold"></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-item col-6">
                                        <div className="">
                                            <h2 className="comman-heading fw-medium text-dark-light">Public Country
                                            </h2>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <i className="fa-solid fa-font-awesome"></i>
                                            </div>
                                            <div className="">
                                                <h3 className="fs-6 fw-semibold"></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="comman-design">
                            <div className="comman-design-header">
                                <ul className="nav nav-pills" id="actionTabs" role="tablist">
                                    <li className="nav-item text-sm fw-medium" role="presentation">
                                        <button className="nav-link active" id="add-competition-tab"
                                            data-bs-toggle="tab" data-bs-target="#add-competition" type="button"
                                            role="tab" aria-controls="add-competition" aria-selected="false">
                                            Add to the Competition
                                        </button>
                                    </li>
                                    <li className="nav-item text-sm fw-medium" role="presentation">
                                        <button className="nav-link" id="merge-customer-tab" data-bs-toggle="tab"
                                            data-bs-target="#merge-customer" type="button" role="tab"
                                            aria-controls="merge-customer" aria-selected="false">
                                            Merge into Another Customer
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="comman-design-body">
                                {/* <!-- Tabs Content --> */}
                                <div className="tab-content mt-3" id="actionTabsContent">
                                    {/* <!-- Add to the Competition Tab --> */}
                                    <div className="tab-pane fade show active" id="add-competition" role="tabpanel"
                                        aria-labelledby="add-competition-tab">
                                        <h4 className="comman-heading mb-4">Add to the Competition</h4>
                                        <form>
                                            <div className="form-design">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="form-group">
                                                            <label htmlFor="competitionName"
                                                                className="form-label">Competition</label>
                                                            <select name="" id="" className="form-select"></select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="comman-btn">Add</button>
                                            </div>
                                        </form>
                                    </div>

                                    {/* <!-- Merge into Another Customer Tab --> */}
                                    <div className="tab-pane fade" id="merge-customer" role="tabpanel"
                                        aria-labelledby="merge-customer-tab">
                                        <h4 className="comman-heading mb-4">Merge into Another Customer</h4>
                                        <div className="row">
                                            <div className="col-6">
                                                <h2 className="comman-heading">From</h2>
                                                <div className="form-design">
                                                    <div className="form-group">
                                                        <label htmlFor="sourceCustomerId"
                                                            className="form-label">Customer Number</label>
                                                        <input type="text" className="form-control"
                                                            id="sourceCustomerId" placeholder="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="targetCustomerId"
                                                            className="form-label">UserName</label>
                                                        <input type="text" className="form-control"
                                                            id="targetCustomerId" placeholder="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="targetCustomerId"
                                                            className="form-label">Name</label>
                                                        <input type="text" className="form-control"
                                                            id="targetCustomerId" placeholder="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="targetCustomerId"
                                                            className="form-label">Email</label>
                                                        <input type="text" className="form-control"
                                                            id="targetCustomerId" placeholder="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="targetCustomerId"
                                                            className="form-label">Phone</label>
                                                        <input type="text" className="form-control"
                                                            id="targetCustomerId" placeholder="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="targetCustomerId"
                                                            className="form-label">Amount</label>
                                                        <div className="row" id="addAmountField">
                                                            <div className="col-6">
                                                                <input type="text" className="form-control"
                                                                    id="targetCustomerId" placeholder="2K" />
                                                            </div>
                                                        </div>
                                                        <div className="mt-4 mb-4">
                                                            {/* <button className="comman-btn" onClick="addAmountFieldBtn()">
                                                                <i className="fa-solid fa-plus"></i>
                                                                Add Amount
                                                            </button> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <h2 className="comman-heading">To</h2>
                                                <div className="form-design">
                                                    <div className="form-group">
                                                        <label htmlFor="sourceCustomerId"
                                                            className="form-label">Customer Number</label>
                                                        <input type="text" className="form-control"
                                                            id="sourceCustomerId" placeholder="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="targetCustomerId"
                                                            className="form-label">UserName</label>
                                                        <input type="text" className="form-control"
                                                            id="targetCustomerId" placeholder="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="targetCustomerId"
                                                            className="form-label">Name</label>
                                                        <input type="text" className="form-control"
                                                            id="targetCustomerId" placeholder="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="targetCustomerId"
                                                            className="form-label">Email</label>
                                                        <input type="text" className="form-control"
                                                            id="targetCustomerId" placeholder="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="targetCustomerId"
                                                            className="form-label">Phone</label>
                                                        <input type="text" className="form-control"
                                                            id="targetCustomerId" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="comman-btn">Merge</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="comman-design2">
                            <div className="comman-design-header comman-accordin" onClick={handleToggle}>
                                <h2 className="comman-heading">Prop Account</h2>
                            </div>
                            <div className="comman-design-body comman-accordin-content p-0" style={{ height: "0px" }}>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>sr.no</th>
                                                <th>Customer</th>
                                                <th>Email</th>
                                                <th>Order Number</th>
                                                <th>Breached</th>
                                                <th>BeenReset</th>
                                                <th>Hit Profit target</th>
                                                <th>Upgraded</th>
                                                <th>Upgrades</th>
                                                <th>plan</th>
                                                <th>created</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="comman-design2">
                            <div className="comman-design-header comman-accordin" onClick={handleToggle}>
                                <h2 className="comman-heading">Competition Account</h2>
                            </div>
                            <div className="comman-design-body comman-accordin-content p-0" style={{ height: "0px" }}>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>sr.no</th>
                                                <th>Competition</th>
                                                <th>Login</th>
                                                <th>Current Balance</th>
                                                <th>Current Equity</th>
                                                <th>% Return</th>
                                                <th>Rank</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 mt-4">
                        <div className="comman-design2">
                            <div className="comman-design-header comman-accordin" onClick={handleToggle}>
                                <h2 className="comman-heading">IP Log</h2>
                            </div>
                            <div className="comman-design-body comman-accordin-content p-0" style={{ height: "0px" }}>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>sr.no</th>
                                                <th>Login</th>
                                                <th>ip Address</th>
                                                <th>Time (UTC)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="comman-design2">
                            <div className="comman-design-header comman-accordin" onClick={handleToggle}>
                                <h2 className="comman-heading">Emails</h2>
                            </div>
                            <div className="comman-design-body comman-accordin-content p-0" style={{ height: "0px" }}>
                                <div className="form-design">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label htmlFor="" className="form-label">From</label>
                                                <input type="text" className="form-control"
                                                    placeholder="ftf@forextradersfunds.com" />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label htmlFor="" className="form-label">TO</label>
                                                <input type="text" className="form-control"
                                                    placeholder="vbujas@gmail.com" />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label htmlFor="" className="form-label">Subject</label>
                                                <input type="text" className="form-control" placeholder="vbuja" />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label htmlFor="" className="form-label">Status</label>
                                                <input type="text" className="form-control" placeholder="" readOnly />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label htmlFor="" className="form-label">Time (UTC)</label>
                                                <input type="text" className="form-control" placeholder="02-12-2024"
                                                    readOnly />
                                            </div>
                                        </div>
                                        <div className="col-12 mt-4">
                                            <div className="d-flex gap-4">
                                                <button className="comman-btn">
                                                    <i className="fa-solid fa-paper-plane"></i>
                                                    Resend
                                                </button>
                                                <button className="comman-btn bg-blue">
                                                    <i className="fa-solid fa-download"></i>
                                                    download
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="comman-design2">
                            <div className="comman-design-header comman-accordin" onClick={handleToggle}>
                                <h2 className="comman-heading">Edit Log</h2>
                            </div>
                            <div className="comman-design-body comman-accordin-content p-0" style={{ height: "0px" }}>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>sr.no</th>
                                                <th>User</th>
                                                <th>Old Values</th>
                                                <th>New Values</th>
                                                <th>Action</th>
                                                <th>Time (UTC)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="comman-design2">
                            <div className="comman-design-header comman-accordin" onClick={handleToggle}>
                                <h2 className="comman-heading">Note</h2>
                            </div>
                            <div className="comman-design-body comman-accordin-content p-0" style={{ height: "0px" }}>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>sr.no</th>
                                                <th>Date</th>
                                                <th>User</th>
                                                <th>Note</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="comman-design2">
                            <div className="comman-design-header comman-accordin" onClick={handleToggle}>
                                <h2 className="comman-heading">Customer Analytics</h2>
                            </div>
                            <div className="comman-design-body comman-accordin-content p-0" style={{ height: "0px" }}>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>sr.no</th>
                                                <th>Unique Order</th>
                                                <th>Total Purchase</th>
                                                <th>Funded Accounts</th>
                                                <th>Approved Payouts</th>
                                                <th>Total Client Payouts</th>
                                                <th>Payout Ratio (%)</th>
                                                <th>Average Payout</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerView
