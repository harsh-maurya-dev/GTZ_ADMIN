const ReportsManagementView = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Reports Details</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="row">
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-heading"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Reports Name</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">Withdrawable</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-users"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Number Of User</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">60</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-dollar-sign"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Amount Spend</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">$299.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-calendar-days"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Created At</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">20-01-2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-calendar-days"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Updated At</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">20-12-2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-audio-description"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Description</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Quod, iste consectetur accusantium ab,
                                            id pariatur dicta libero odit animi expedita deserunt cupiditate
                                            nesciunt, earum officiis iusto tempora aut. Quasi, consectetur?</p>
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
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>sr</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile No.</th>
                                        <th>UserName</th>
                                        <th>Language</th>
                                        <th>Address</th>
                                        <th>Date Of Registeration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="table-user-img">
                                                    <img src="assets/img/user/user-2.jpg" className="w-100 h-10"
                                                        alt="" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Georgeanna Ramero</td>
                                        <td>georgeanna@gmail.com</td>
                                        <td>(480) 914-6565</td>
                                        <td>MathAnder</td>
                                        <td>47 W 13th St, New York, NY 10011</td>
                                        <td>20-02-2024</td>
                                        <td>English</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="table-user-img">
                                                    <img src="assets/img/user/user-3.jpg" className="w-100 h-10"
                                                        alt="" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Cami Macha</td>
                                        <td>cami@gmail.com</td>
                                        <td>(480) 914-6565</td>
                                        <td>CAMCHA</td>
                                        <td>47 W 13th St, New York, NY 10011</td>
                                        <td>20-02-2024</td>
                                        <td>English</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="table-user-img">
                                                    <img src="assets/img/user/user-4.jpg" className="w-100 h-10"
                                                        alt="" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Alda Ziemer</td>
                                        <td>Alda@gmail.com</td>
                                        <td>(480) 914-6565</td>
                                        <td>ALZIMER</td>
                                        <td>47 W 13th St, New York, NY 10011</td>
                                        <td>20-02-2024</td>
                                        <td>English</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="table-user-img">
                                                    <img src="assets/img/user/user-6 (1).jpg" className="w-100 h-10"
                                                        alt="" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Dalton Paden</td>
                                        <td>Dalyton@gmail.com</td>
                                        <td>(480) 914-6565</td>
                                        <td>Dalen</td>
                                        <td>47 W 13th St, New York, NY 10011</td>
                                        <td>20-02-2024</td>
                                        <td>French</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportsManagementView
