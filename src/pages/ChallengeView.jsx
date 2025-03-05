import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ChallengeView = () => {
    const { id } = useParams()
    const [challengesDetails, setChallengesDetails] = useState({});

    const fetchChallengesDetails = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("No token found. Please log in again.", { style: { backgroundColor: "#1a406a", color: "#fff" } });
            return;
        }
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/trading/getChallengeDetails/${id}`,
                {
                    headers: {
                        "accept": "application/json",
                        "x-auth-token-user": token,
                    },
                }
            );
            setChallengesDetails(response.data.results?.challenge || {});
            console.log(response.data.results?.challenge);

        } catch (error) {
            console.error("Error fetching challenges:", error);
        }
    };

    // console.log(challengesDetails);
    const phase = challengesDetails.phases?.[0] || {};
    // console.log(phase);
    

    useEffect(() => {
        fetchChallengesDetails();
    }, []);

    return (
        <>
            <div className="comman-tabs mt-4">
                <ul className="nav nav-pills" id="competitionTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="future-tab" data-bs-toggle="tab"
                            data-bs-target="#future" type="button" role="tab" aria-controls="future"
                            aria-selected="true">Phase 1</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="in-progress-tab" data-bs-toggle="tab"
                            data-bs-target="#in-progress" type="button" role="tab" aria-controls="in-progress"
                            aria-selected="false">Phase 2</button>
                    </li>
                </ul>
            </div>
            <div className="tab-content" id="competitionTabsContent">
                <div className="tab-pane fade show active" id="future" role="tabpanel" aria-labelledby="future-tab">
                    <div className="phase 1 mt-4">
                        <div>
                            <div className="comman-design2">
                                <div className="comman-design-header">
                                    <div>
                                        <h2 className="comman-heading">Challenge Details</h2>
                                        <small className="fw-bold">( Phase 1 )</small>
                                    </div>
                                </div>
                                <div className="comman-design-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <p className="text-dark-light m-0">Challenge Name</p>
                                            <h2 className="comman-heading mb-3">{phase.name}</h2>
                                            <p className="text-dark-light m-0">Price</p>
                                            <h2 className="comman-heading">${phase.price}</h2>
                                            <p className="text-dark-light m-0 mt-3">Challenge Feature</p>
                                            <ul className="list-unstyled p-0 list-tick">
                                                {phase.features?.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                            <div className="mt-4">
                                                <p className="fw-medium m-0">Status</p>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked={challengesDetails.status} readOnly />
                                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="d-flex gap-5 justify-content-center mt-5">
                                                <div className="text-center">
                                                    <div className="mx-auto icon-text-wrapper bg-light-success border border-2 border-success">
                                                        <i className="fa-solid fa-trophy"></i>
                                                        <p className="m-2 text-success">20.00</p>
                                                    </div>
                                                    <p className="fs-5 fw-medium mt-3">Total Winner Customer</p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="mx-auto icon-text-wrapper bg-light-danger border border-2 border-danger">
                                                        <i className="fa-solid fa-exclamation-circle"></i>
                                                        <p className="m-2 text-danger">10.00</p>
                                                    </div>
                                                    <p className="fs-5 fw-medium mt-3">Total Failed Customer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="comman-design2">
                                <div className="comman-design-header">
                                    <h2 className="comman-heading">Winner Customer</h2>
                                </div>
                                <div className="comman-design-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>sr</th>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Mobile No.</th>
                                                    <th>Invested Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <div
                                                            className="d-flex justify-content-center align-items-center">
                                                            <div className="table-user-img">
                                                                <img src="assets/img/user/user-2.jpg"
                                                                    className="w-100 h-10" alt="" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Georgeanna Ramero</td>
                                                    <td>georgeanna@gmail.com</td>
                                                    <td>(480) 914-6565</td>
                                                    <td>$199</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>
                                                        <div
                                                            className="d-flex justify-content-center align-items-center">
                                                            <div className="table-user-img">
                                                                <img src="assets/img/user/user-3.jpg"
                                                                    className="w-100 h-10" alt="" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Cami Macha</td>
                                                    <td>cami@gmail.com</td>
                                                    <td>(480) 914-6565</td>
                                                    <td>$1452</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>
                                                        <div
                                                            className="d-flex justify-content-center align-items-center">
                                                            <div className="table-user-img">
                                                                <img src="assets/img/user/user-4.jpg"
                                                                    className="w-100 h-10" alt="" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Alda Ziemer</td>
                                                    <td>Alda@gmail.com</td>
                                                    <td>(480) 914-6565</td>
                                                    <td>$19.0</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>
                                                        <div
                                                            className="d-flex justify-content-center align-items-center">
                                                            <div className="table-user-img">
                                                                <img src="assets/img/user/user-6 (1).jpg"
                                                                    className="w-100 h-10" alt="" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Dalton Paden</td>
                                                    <td>Dalyton@gmail.com</td>
                                                    <td>(480) 914-6565</td>
                                                    <td>$1235</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="comman-design2">
                                <div className="comman-design-header">
                                    <h2 className="comman-heading">Failed Customer</h2>
                                </div>
                                <div className="comman-design-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>sr</th>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Mobile No.</th>
                                                    <th>Invested Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <div
                                                            className="d-flex justify-content-center align-items-center">
                                                            <div className="table-user-img">
                                                                <img src="assets/img/user/user-3.jpg"
                                                                    className="w-100 h-10" alt="" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Cami Macha</td>
                                                    <td>cami@gmail.com</td>
                                                    <td>(480) 914-6565</td>
                                                    <td>$1999</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>
                                                        <div
                                                            className="d-flex justify-content-center align-items-center">
                                                            <div className="table-user-img">
                                                                <img src="assets/img/user/user-2.jpg"
                                                                    className="w-100 h-10" alt="" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Georgeanna Ramero</td>
                                                    <td>georgeanna@gmail.com</td>
                                                    <td>(480) 914-6565</td>
                                                    <td>$199</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>
                                                        <div
                                                            className="d-flex justify-content-center align-items-center">
                                                            <div className="table-user-img">
                                                                <img src="assets/img/user/user-6 (1).jpg"
                                                                    className="w-100 h-10" alt="" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Dalton Paden</td>
                                                    <td>Dalyton@gmail.com</td>
                                                    <td>(480) 914-6565</td>
                                                    <td>$1000</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>
                                                        <div
                                                            className="d-flex justify-content-center align-items-center">
                                                            <div className="table-user-img">
                                                                <img src="assets/img/user/user-4.jpg"
                                                                    className="w-100 h-10" alt="" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Alda Ziemer</td>
                                                    <td>Alda@gmail.com</td>
                                                    <td>(480) 914-6565</td>
                                                    <td>$1954</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="in-progress" role="tabpanel" aria-labelledby="in-progress-tab">
                    <div className="phase 1 mt-4">
                        <div>
                            <div className="comman-design2">
                                <div className="comman-design-header">
                                    <div>
                                        <h2 className="comman-heading">Challenge Details</h2>
                                        <small className="fw-bold">( Phase 2 )</small>
                                    </div>
                                </div>
                                <div className="comman-design-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <p className="text-dark-light m-0">Challenge Name</p>
                                            <h2 className="comman-heading mb-3">Expert</h2>
                                            <p className="text-dark-light m-0">Price</p>
                                            <h2 className="comman-heading">$199</h2>
                                            <p className="text-dark-light m-0 mt-3">Challenge Feature</p>
                                            <ul className="list-unstyled p-0 list-tick">
                                                <li>6% Profit Target</li>
                                                <li>10% Max Drawdown</li>
                                                <li>4% Daily Loss Limit</li>
                                                <li>6% Daily Loss Limit</li>
                                                <li>12% Daily Loss Limit</li>
                                            </ul>
                                            <div className="mt-4">
                                                <div>
                                                    <div>
                                                        <p className="fw-medium m-0">Status</p>
                                                        <div className="form-check form-switch">
                                                            <input className="form-check-input" type="checkbox"
                                                                id="flexSwitchCheckChecked" checked />
                                                            <label className="form-check-label"
                                                                htmlFor="flexSwitchCheckChecked"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div>
                                                <div className="d-flex gap-5 justify-content-center mt-5">
                                                    <div className="text-center">
                                                        <div
                                                            className="mx-auto icon-text-wrapper bg-light-success border border-2 border-success">
                                                            <i className="fa-solid fa-trophy"></i>
                                                            <p className="m-2 text-success">20</p>
                                                        </div>
                                                        <p className="fs-5 fw-medium mt-3">Total Winner Customer</p>
                                                    </div>
                                                    <div className="text-center">
                                                        <div
                                                            className="mx-auto icon-text-wrapper bg-light-danger border border-2 border-danger">
                                                            <i className="fa-solid fa-exclamation-circle"></i>
                                                            <p className="m-2 text-danger">100</p>
                                                        </div>
                                                        <p className="fs-5 fw-medium mt-3">Total Failed Customer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="comman-design2">
                                <div className="comman-design-header">
                                    <h2 className="comman-heading">Winner Customer</h2>
                                </div>
                                <div className="comman-design-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>sr</th>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Mobile No.</th>
                                                    <th>Invested Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <div
                                                            className="d-flex justify-content-center align-items-center">
                                                            <div className="table-user-img">
                                                                <img src="assets/img/user/user-2.jpg"
                                                                    className="w-100 h-10" alt="" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Georgeanna Ramero</td>
                                                    <td>georgeanna@gmail.com</td>
                                                    <td>(480) 914-6565</td>
                                                    <td>$199</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>
                                                        <div
                                                            className="d-flex justify-content-center align-items-center">
                                                            <div className="table-user-img">
                                                                <img src="assets/img/user/user-3.jpg"
                                                                    className="w-100 h-10" alt="" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Cami Macha</td>
                                                    <td>cami@gmail.com</td>
                                                    <td>(480) 914-6565</td>
                                                    <td>$1452</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="comman-design2">
                                <div className="comman-design-header">
                                    <h2 className="comman-heading">Failed Customer</h2>
                                </div>
                                <div className="comman-design-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>sr</th>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Mobile No.</th>
                                                    <th>Invested Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <div
                                                            className="d-flex justify-content-center align-items-center">
                                                            <div className="table-user-img">
                                                                <img src="assets/img/user/user-3.jpg"
                                                                    className="w-100 h-10" alt="" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Cami Macha</td>
                                                    <td>cami@gmail.com</td>
                                                    <td>(480) 914-6565</td>
                                                    <td>$1999</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>
                                                        <div
                                                            className="d-flex justify-content-center align-items-center">
                                                            <div className="table-user-img">
                                                                <img src="assets/img/user/user-2.jpg"
                                                                    className="w-100 h-10" alt="" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Georgeanna Ramero</td>
                                                    <td>georgeanna@gmail.com</td>
                                                    <td>(480) 914-6565</td>
                                                    <td>$199</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>
                                                        <div
                                                            className="d-flex justify-content-center align-items-center">
                                                            <div className="table-user-img">
                                                                <img src="assets/img/user/user-6 (1).jpg"
                                                                    className="w-100 h-10" alt="" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Dalton Paden</td>
                                                    <td>Dalyton@gmail.com</td>
                                                    <td>(480) 914-6565</td>
                                                    <td>$1000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChallengeView;