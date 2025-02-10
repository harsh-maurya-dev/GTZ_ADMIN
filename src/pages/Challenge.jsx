import React from 'react'
import challenge_image from "../assets/img/bg-img/ChatBc.webp"
import { Link } from 'react-router-dom';

const Challenge = () => {
    const challenges = [
        { id: 1, name: "Advanced", passed: 10, failed: 5, status: "Active" },
        { id: 2, name: "Expert", passed: 20, failed: 1, status: "InActive" },
        { id: 3, name: "Instant Funding", passed: 12, failed: 8, status: "Active" },
    ];
    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <div>
                                <h2 className="comman-heading">Challenge</h2>
                                <span className="border rounded-pill py-1 px-3">4</span>
                            </div>
                            <div>
                                <Link to="challenge_add" className="comman-btn">
                                    <i className="fa-solid fa-plus"></i>
                                    Add
                                </Link>
                            </div>
                        </div>
                        <div className="breadcrumb-img-wrapper">
                            <div className="breadcrumb-img">
                                <img src={challenge_image} alt="" className="w-100 h-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Challenge</h2>
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
                        <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Sr</th>
                                        <th>Name</th>
                                        <th>
                                            <p className="m-0">Number Of Pass</p>
                                            <small>(Challenges)</small>
                                        </th>
                                        <th>
                                            <p className="m-0">Number Of Failed</p>
                                            <small>(Challenges)</small>
                                        </th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {challenges.map((challenge, index) => (
                                        <tr key={challenge.id}>
                                            <td>{index + 1}</td>
                                            <td>{challenge.name}</td>
                                            <td>{challenge.passed}</td>
                                            <td>{challenge.failed}</td>
                                            <td>
                                                <div className={`badge ${challenge.status === "Active" ? "bg-light-success text-success" : "bg-light-danger text-danger"}`}>
                                                    {challenge.status}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-center gap-2 align-items-center">
                                                    <a href="Challenge_view.html" className="table-icon bg-success">
                                                        <i className="fa-solid fa-desktop"></i>
                                                    </a>
                                                    <Link to={`/challenge_edit/${index}`} className="table-icon bg-main" >
                                                        <i className="fa-solid fa-pencil"></i>
                                                    </Link>
                                                    <a href="#" className="table-icon bg-danger">
                                                        <i className="fa-solid fa-trash"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Challenge
