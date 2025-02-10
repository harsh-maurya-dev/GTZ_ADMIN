import React from 'react'

const PendingUpgrades = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <div>
                                <h2 className="comman-heading">Pending Upgrades</h2>
                                <span className="border rounded-pill py-1 px-3">2</span>
                            </div>
                        </div>
                        <div className="breadcrumb-img-wrapper">
                            <div className="breadcrumb-img">
                                <img src="assets/img/bg-img/ChatBc.webp" alt="" className="w-100 h-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="comman-tabs">
                    <ul className="nav nav-pills" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="all-tab" data-bs-toggle="tab"
                                data-bs-target="#all" type="button" role="tab" aria-controls="all"
                                aria-selected="true">All</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="succeeded-tab" data-bs-toggle="tab"
                                data-bs-target="#succeeded" type="button" role="tab" aria-controls="succeeded"
                                aria-selected="false">Eligible</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="failed-tab" data-bs-toggle="tab"
                                data-bs-target="#failed" type="button" role="tab" aria-controls="failed"
                                aria-selected="false">Not Eligible</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Pending Upgrades</h2>
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
                        <div className="tab-content mt-3" id="myTabContent">
                            <div className="tab-pane fade show active" id="all" role="tabpanel"
                                aria-labelledby="all-tab">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Sr No.</th>
                                                <th>Login</th>
                                                <th>Type</th>
                                                <th>Starting Balance</th>
                                                <th>Status</th>
                                                <th>Upgraded From</th>
                                                <th>Order ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Contract Status</th>
                                                <th>Verified</th>
                                                <th>Active Funded Accounts</th>
                                                <th>Profit Share</th>
                                                <th>Date Created</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>101736</td>
                                                <td>Two Step Assessment <br /> (Phase 2)</td>
                                                <td>$10.000.00</td>
                                                <td>Disabled</td>
                                                <td></td>
                                                <td></td>
                                                <td>Jhon Doe</td>
                                                <td>jhon@gmail.com</td>
                                                <td>None</td>
                                                <td>Not verified</td>
                                                <td>0</td>
                                                <td>60.0%</td>
                                                <td>20-02-2024 | 08:00 PM</td>
                                                <td>
                                                    <div
                                                        className="d-flex justify-content-center gap-2 align-items-center">
                                                        {/* <!-- <a href="contract_templete_view.html"
                                                                    className="table-icon bg-success" title="Upgrade"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#upgradeModal">
                                                                    <i className="fa-solid fa-check"></i>
                                                                </a> --> */}
                                                        <a href="" className="table-icon bg-danger" title="Reject"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#rejectModal">
                                                            <i className="fa-solid fa-times"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>101736</td>
                                                <td>Two Step Assessment <br /> (Phase 2)</td>
                                                <td>$10.000.00</td>
                                                <td>Disabled</td>
                                                <td></td>
                                                <td></td>
                                                <td>Jhon Doe</td>
                                                <td>jhon@gmail.com</td>
                                                <td>None</td>
                                                <td>Not verified</td>
                                                <td>0</td>
                                                <td>60.0%</td>
                                                <td>20-02-2024 | 08:00 PM</td>
                                                <td>
                                                    <div
                                                        className="d-flex justify-content-center gap-2 align-items-center">
                                                        {/* <!-- <a href="contract_templete_view.html"
                                                                    className="table-icon bg-success" title="Upgrade"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#upgradeModal">
                                                                    <i className="fa-solid fa-check"></i>
                                                                </a> --> */}
                                                        <a href="" className="table-icon bg-danger" title="Reject"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#rejectModal">
                                                            <i className="fa-solid fa-times"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="succeeded" role="tabpanel"
                                aria-labelledby="succeeded-tab">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Sr No.</th>
                                                <th>Login</th>
                                                <th>Type</th>
                                                <th>Starting Balance</th>
                                                <th>Status</th>
                                                <th>Upgraded From</th>
                                                <th>Order ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Contract Status</th>
                                                <th>Verified</th>
                                                <th>Active Funded Accounts</th>
                                                <th>Profit Share</th>
                                                <th>Date Created</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="failed" role="tabpanel" aria-labelledby="failed-tab">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Sr No.</th>
                                                <th>Login</th>
                                                <th>Type</th>
                                                <th>Starting Balance</th>
                                                <th>Status</th>
                                                <th>Upgraded From</th>
                                                <th>Order ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Contract Status</th>
                                                <th>Verified</th>
                                                <th>Active Funded Accounts</th>
                                                <th>Profit Share</th>
                                                <th>Date Created</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>101736</td>
                                                <td>Two Step Assessment <br /> (Phase 2)</td>
                                                <td>$10.000.00</td>
                                                <td>Disabled</td>
                                                <td></td>
                                                <td></td>
                                                <td>Jhon Doe</td>
                                                <td>jhon@gmail.com</td>
                                                <td>None</td>
                                                <td>Not verified</td>
                                                <td>0</td>
                                                <td>60.0%</td>
                                                <td>20-02-2024 | 08:00 PM</td>
                                                <td>
                                                    <div
                                                        className="d-flex justify-content-center gap-2 align-items-center">
                                                        {/* <!-- <a href="contract_templete_view.html"
                                                                    className="table-icon bg-success" title="Upgrade"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#upgradeModal">
                                                                    <i className="fa-solid fa-check"></i>
                                                                </a> --> */}
                                                        <a href="" className="table-icon bg-danger" title="Reject"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#rejectModal">
                                                            <i className="fa-solid fa-times"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
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

export default PendingUpgrades
