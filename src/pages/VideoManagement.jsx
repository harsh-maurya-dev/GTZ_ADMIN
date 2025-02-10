import React from 'react'

const VideoManagement = () => {
  return (
    <>
                         <div className="mt-4">
                        <div className="comman-design pb-0 light-list-blue">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex gap-3">
                                    <div>
                                        <h2 className="comman-heading">Video Management</h2>
                                        <span className="border rounded-pill py-1 px-3">3</span>
                                    </div>
                                    <div>
                                        <a href="video_Add.html" className="comman-btn">
                                            <i className="fa-solid fa-plus pe-2"></i>
                                            Add
                                        </a>
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
                        <div className="comman-design2">
                            <div className="comman-design-header">
                                <h2 className="comman-heading">Video Management</h2>
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
                                        <thead className="table-light">
                                            <tr>
                                                <th>Sr.no</th>
                                                <th>Title</th>
                                                <th>Video</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>How to use the Dashboard</td>
                                                <td>
                                                    <iframe width="70" height="60" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                                    </iframe>
                                                </td>
                                                <td>
                                                    <div className="d-flex gap-3 justify-content-center">
                                                        <a href="video_view.html" className="table-icon bg-success">
                                                            <i className="fa-solid fa-desktop"></i>
                                                        </a>
                                                        <a href="video_edit.html" className="table-icon bg-main">
                                                            <i className="fa-solid fa-pencil"></i>
                                                        </a>
                                                        <a href="" className="table-icon bg-danger">
                                                            <i className="fa-solid fa-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>How to use the Dashboard</td>
                                                <td>
                                                    <iframe width="70" height="60" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                                    </iframe>
                                                </td>
                                                <td>
                                                    <div className="d-flex gap-3 justify-content-center">
                                                        <a href="video_view.html" className="table-icon bg-success">
                                                            <i className="fa-solid fa-desktop"></i>
                                                        </a>
                                                        <a href="video_edit.html" className="table-icon bg-main">
                                                            <i className="fa-solid fa-pencil"></i>
                                                        </a>
                                                        <a href="" className="table-icon bg-danger">
                                                            <i className="fa-solid fa-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>How to use the Dashboard</td>
                                                <td>
                                                    <iframe width="70" height="60" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                                    </iframe>
                                                </td>
                                                <td>
                                                    <div className="d-flex gap-3 justify-content-center">
                                                        <a href="video_view.html" className="table-icon bg-success">
                                                            <i className="fa-solid fa-desktop"></i>
                                                        </a>
                                                        <a href="video_edit.html" className="table-icon bg-main">
                                                            <i className="fa-solid fa-pencil"></i>
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
                        </div>
                    </div> 
    </>
  )
}

export default VideoManagement
