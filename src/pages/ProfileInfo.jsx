import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import dummy_img from "../assets/img/user/user4.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { profileDataApi } from '../redux/profileSlice';

function ProfileInfo() {
    let [userDetails, setUserDetails] = useState({})
    const dispatch = useDispatch()
    const {profileData, error, loading, messsage} = useSelector((state)=>state.profile);
    // setUserDetails(profileData)
    // console.log("data:",profileData)
    // console.log("message:",messsage)
    const { user_name, email, phone_number, country_code, profile_image, } = userDetails

    const fetchProfileData = async () => {
        const token = localStorage.getItem("token")
        if (token) {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/getMyProfile`, {
                    headers: {
                        "Content-Type": "application/json",
                        // "x-auth-user-type": "admin"
                        "x-auth-token-user": token
                    },
                });
                setUserDetails(response.data.results?.user)
            } catch (error) {
                toast.error("Data fetching Failed: " + (error.response?.data?.message || error.message), { style: { backgroundColor: "#1a406a", color: "#fff" } });
            }
        }
    };

    // console.log(userDetails);
    // console.log(user_name);


    useEffect(() => {
        // dispatch(profileDataApi())
        fetchProfileData()
    }, [])





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
                                <img src={profile_image === "" ? dummy_img : profile_image} className="w-100 h-100" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-center profile-text">Jhon Doe</h2>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <div className="d-flex gap-2">
                                <div className="table-icon bg-danger">
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                                <div className="table-icon bg-main">
                                    <i className="fa-brands fa-facebook"></i>
                                </div>
                                <div className="table-icon bg-primary">
                                    <i className="fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="row">
                    <div className="col-5">
                        <div className="comman-design2">
                            <div className="comman-design-header">
                                <h2 className="comman-heading">Information</h2>
                            </div>
                            <div className="comman-design-body">
                                {
                                    userDetails && (
                                        <>
                                            <div className="details-item">
                                                <div className="">
                                                    <h2 className="comman-heading fw-medium text-dark-light">Name</h2>
                                                </div>
                                                <div className="d-flex gap-2">
                                                    <div className="">
                                                        <i className="fa-solid fa-user-circle"></i>
                                                    </div>
                                                    <div className="">
                                                        <h3 className="fs-6 fw-semibold">{user_name}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-item">
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
                                            <div className="details-item">
                                                <div className="">
                                                    <h2 className="comman-heading fw-medium text-dark-light">Mobile No.</h2>
                                                </div>
                                                <div className="d-flex gap-2">
                                                    <div className="">
                                                        <i className="fa-solid fa-phone-volume"></i>
                                                    </div>
                                                    <div className="">
                                                        <h3 className="fs-6 fw-semibold">{country_code + " " + phone_number}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-item">
                                                <div className="">
                                                    <h2 className="comman-heading fw-medium text-dark-light">Language</h2>
                                                </div>
                                                <div className="d-flex gap-2">
                                                    <div className="">
                                                        <i className="fa-solid fa-language"></i>
                                                    </div>
                                                    <div className="">
                                                        <h3 className="fs-6 fw-semibold">English</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-item">
                                                <div className="">
                                                    <h2 className="comman-heading fw-medium text-dark-light">City</h2>
                                                </div>
                                                <div className="d-flex gap-2">
                                                    <div className="">
                                                        <i className="fa-solid fa-globe-europe"></i>
                                                    </div>
                                                    <div className="">
                                                        <h3 className="fs-6 fw-semibold">13th Street</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-item">
                                                <div className="">
                                                    <h2 className="comman-heading fw-medium text-dark-light">Address</h2>
                                                </div>
                                                <div className="d-flex gap-2">
                                                    <div className="">
                                                        <i className="fa-solid fa-globe"></i>
                                                    </div>
                                                    <div className="">
                                                        <h3 className="fs-6 fw-semibold">47 W 13th St, New York, NY 10011
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-item">
                                                <div className="">
                                                    <h2 className="comman-heading fw-medium text-dark-light">Country</h2>
                                                </div>
                                                <div className="d-flex gap-2">
                                                    <div className="">
                                                        <i className="fa-solid fa-globe-asia"></i>
                                                    </div>
                                                    <div className="">
                                                        <h3 className="fs-6 fw-semibold">U.S.A</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-item">
                                                <div className="">
                                                    <h2 className="comman-heading fw-medium text-dark-light">Date Of registered
                                                    </h2>
                                                </div>
                                                <div className="d-flex gap-2">
                                                    <div className="">
                                                        <i className="fa-solid fa-calendar-days"></i>
                                                    </div>
                                                    <div className="">
                                                        <h3 className="fs-6 fw-semibold">20-02-2024</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }

                                {/* user data fetch */}
                                {/* {
                                    userDetails.map((value, index) => {
                                        return (
                                            <div className="details-item">
                                                <div className="">
                                                    <h2 className="comman-heading fw-medium text-dark-light">Mobile No.</h2>
                                                </div>
                                                <div className="d-flex gap-2">
                                                    <div className="">
                                                        <i className="fa-solid fa-phone-volume"></i>
                                                    </div>
                                                    <div className="">
                                                        <h3 className="fs-6 fw-semibold">{value}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                } */}
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="comman-design">
                            <div className="comman-design-header">
                                <ul className="nav nav-pills" id="actionTabs" role="tablist">
                                    <li className="nav-item text-sm fw-medium" role="presentation">
                                        <button className="nav-link active" id="add-competition-tab"
                                            data-bs-toggle="tab" data-bs-target="#add-competition" type="button"
                                            role="tab" aria-controls="add-competition" aria-selected="false">
                                            Change Password
                                        </button>
                                    </li>
                                    <li className="nav-item text-sm fw-medium" role="presentation">
                                        <button className="nav-link" id="merge-customer-tab" data-bs-toggle="tab"
                                            data-bs-target="#merge-customer" type="button" role="tab"
                                            aria-controls="merge-customer" aria-selected="false">
                                            Upload Image
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="comman-design-body">
                                {/* <!-- Tabs Content --> */}
                                <div className="tab-content mt-3" id="actionTabsContent">
                                    {/* <!-- Send Notification Tab --> */}
                                    {/* <!-- Add to the Competition Tab --> */}
                                    <div className="tab-pane fade show active" id="add-competition" role="tabpanel"
                                        aria-labelledby="add-competition-tab">
                                        <form>
                                            <div className="form-design">
                                                <div className="form-group">
                                                    <label htmlFor="competitionName"
                                                        className="form-label">Old Password</label>
                                                    <input type="text" className="form-control" id="competitionName"
                                                        placeholder="Enter Your Old Password" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="customerId" className="form-label">New
                                                        Password</label>
                                                    <input type="text" className="form-control" id="customerId"
                                                        placeholder="Enter Your New Password" />
                                                </div>
                                                <button type="submit" className="comman-btn mt-4">Change
                                                    Password</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="merge-customer" role="tabpanel"
                                        aria-labelledby="merge-customer-tab">
                                        <div className="form-design">
                                            <div className="form-group">
                                                <label htmlFor="" className="form-label">Upload Image</label>
                                                <div className="upload-img">
                                                    <input type="file" className="form-upload" />
                                                    <i className="fa solid fa-cloud-upload-alt upload-icon"></i>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button className="comman-btn">
                                                    <i className="fa-solid fa-upload"></i>
                                                    upload
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo
