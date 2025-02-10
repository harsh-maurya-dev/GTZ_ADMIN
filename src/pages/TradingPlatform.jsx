import React from 'react'
import trading_image from "../assets/img/bg-img/ChatBc.webp"

const TradingPlatform = () => {
    const traders = [
        { id: 1, name: "CTRADER", status: true },
        { id: 2, name: "MATCHTRADER", status: false },
        { id: 3, name: "DX TRADER", status: true },
        { id: 4, name: "MetaTrader 5", status: false },
    ];
    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="">
                            <h2 className="comman-heading">Trading Platform</h2>
                            <span className="border rounded-pill py-1 px-3">3</span>
                        </div>
                        <div className="breadcrumb-img-wrapper">
                            <div className="breadcrumb-img">
                                <img src={trading_image} alt="" className="w-100 h-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Trading Platform</h2>
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
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {traders.map((trader, index) => (
                                        <tr key={trader.id}>
                                            <td>{index + 1}</td>
                                            <td>{trader.name}</td>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <div className="form-check form-switch status-button">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id={`switch-${trader.id}`}
                                                            checked={trader.status}
                                                            onChange={() => { }}
                                                        />
                                                        <label className="form-check-label" htmlFor={`switch-${trader.id}`}></label>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-center gap-2 align-items-center">
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

export default TradingPlatform
