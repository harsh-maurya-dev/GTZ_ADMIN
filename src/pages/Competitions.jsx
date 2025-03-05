import { Link } from "react-router-dom"

const Competitions = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <div>
                                <h2 className="comman-heading">Competitions</h2>
                                <span className="border rounded-pill py-1 px-3">2</span>
                            </div>
                            <div>
                                <Link to="/competitions_add" className="comman-btn"><i
                                    className="fa-solid fa-plus pe-2"></i>Add</Link>
                            </div>
                        </div>
                        <div className="breadcrumb-img-wrapper">
                            <div className="breadcrumb-img">
                                <img src="assets/img/bg-img/ChatBc.webp" alt="" className="w-100 h-100"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="comman-tabs">
                    <ul className="nav nav-pills" id="competitionTabs" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="future-tab" data-bs-toggle="tab"
                                data-bs-target="#future" type="button" role="tab" aria-controls="future"
                                aria-selected="true">Future</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="in-progress-tab" data-bs-toggle="tab"
                                data-bs-target="#in-progress" type="button" role="tab"
                                aria-controls="in-progress" aria-selected="false">In Progress</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="completed-tab" data-bs-toggle="tab"
                                data-bs-target="#completed" type="button" role="tab" aria-controls="completed"
                                aria-selected="false">Completed</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Competitions</h2>
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
                        {/* <!-- Tab Content --> */}
                        <div className="tab-content" id="competitionTabsContent">
                            {/* <!-- Future Competitions --> */}
                            <div className="tab-pane fade show active" id="future" role="tabpanel"
                                aria-labelledby="future-tab">
                                <div className="table-container">
                                    <table className="table table-hover">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Sr.no</th>
                                                <th>Name</th>
                                                <th>Group</th>
                                                <th>Min Trading Days</th>
                                                <th>Max Lots</th>
                                                <th>Max Soft Breaches</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Competition 1</td>
                                                <td>Group A</td>
                                                <td>10</td>
                                                <td>50</td>
                                                <td>5</td>
                                                <td>
                                                    <div className="d-flex gap-3 justify-content-center">
                                                        <Link to="/competitions_View"
                                                            className="table-icon bg-success">
                                                            <i className="fa-solid fa-desktop"></i>
                                                        </Link>
                                                        <Link to="/competitions_edit"
                                                            className="table-icon bg-main">
                                                            <i className="fa-solid fa-pencil"></i>
                                                        </Link>
                                                        <Link to="#"
                                                            className="table-icon bg-danger">
                                                            <i className="fa-solid fa-trash"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* <!-- Add more rows as needed --> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* <!-- In Progress Competitions --> */}
                            <div className="tab-pane fade" id="in-progress" role="tabpanel"
                                aria-labelledby="in-progress-tab">
                                <div className="table-container">
                                    <table className="table table-hover">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Sr.no</th>
                                                <th>Name</th>
                                                <th>Group</th>
                                                <th>Min Trading Days</th>
                                                <th>Max Lots</th>
                                                <th>Max Soft Breaches</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* <!-- Completed Competitions --> */}
                            <div className="tab-pane fade" id="completed" role="tabpanel"
                                aria-labelledby="completed-tab">
                                <div className="table-container">
                                    <table className="table table-hover">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Sr.no</th>
                                                <th>Name</th>
                                                <th>Group</th>
                                                <th>Min Trading Days</th>
                                                <th>Max Lots</th>
                                                <th>Max Soft Breaches</th>
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

export default Competitions
