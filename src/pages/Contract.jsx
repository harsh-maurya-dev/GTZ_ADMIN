import chatbc from "../assets/img/bg-img/ChatBc.webp"
import { Link } from 'react-router-dom'

const Contract = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <div>
                                <h2 className="comman-heading">Contracts</h2>
                                <span className="border rounded-pill py-1 px-3">4</span>
                            </div>
                            <div>
                                <Link to="/contract_templete" className="comman-btn">Contract Templete
                                    Magnet.</Link>
                            </div>
                        </div>
                        <div className="breadcrumb-img-wrapper">
                            <div className="breadcrumb-img">
                                <img src={chatbc} alt="" className="w-100 h-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 comman-tabs">
                <ul className="nav nav-pills" id="contractTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all"
                            type="button" role="tab">
                            All
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="active-tab" data-bs-toggle="tab" data-bs-target="#active"
                            type="button" role="tab">
                            Active
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pending-tab" data-bs-toggle="tab" data-bs-target="#pending"
                            type="button" role="tab">
                            Pending
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="terminated" data-bs-toggle="tab"
                            data-bs-target="#Terminated" type="button" role="tab">
                            Terminated
                        </button>
                    </li>
                </ul>
            </div>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Contracts</h2>
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
                                                <th>Contract Number</th>
                                                <th>Account</th>
                                                <th>Customer Name</th>
                                                <th>Contract Type</th>
                                                <th>Contract Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>C12023</td>
                                                <td>558591</td>
                                                <td>Victor Test</td>
                                                <td>Funded Trader</td>
                                                <td>
                                                    <div className="badge bg-light-success text-success">Active
                                                    </div>
                                                </td>
                                                <td>
                                                    <div
                                                        className="d-flex justify-content-center gap-2 align-items-center">
                                                        <Link to="/contract_view"
                                                            className="table-icon bg-success">
                                                            <i className="fa-solid fa-desktop"></i>
                                                        </Link>
                                                        <a href="#" className="table-icon bg-main">
                                                            <i className="fa-solid fa-download"></i>
                                                        </a>
                                                        <a href="" className="table-icon bg-danger">
                                                            <i className="fa-solid fa-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="active" role="tabpanel" aria-labelledby="active-tab">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Sr No.</th>
                                                <th>Contract Number</th>
                                                <th>Account</th>
                                                <th>Customer Name</th>
                                                <th>Contract Type</th>
                                                <th>Contract Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pending" role="tabpanel"
                                aria-labelledby="pending-tab">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Sr No.</th>
                                                <th>Contract Number</th>
                                                <th>Account</th>
                                                <th>Customer Name</th>
                                                <th>Contract Type</th>
                                                <th>Contract Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="Terminated" role="Terminated"
                                aria-labelledby="Terminated-tab">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Sr No.</th>
                                                <th>Contract Number</th>
                                                <th>Account</th>
                                                <th>Customer Name</th>
                                                <th>Contract Type</th>
                                                <th>Contract Status</th>
                                                <th>Actions</th>
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

export default Contract
