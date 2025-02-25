import React from 'react'
import order_image from "../assets/img/bg-img/ChatBc.webp"

const Order = () => {
    const orders = [
        { id: 1, orderId: 15, variationId: 1802, productId: 1802, payment: "PayPal", name: "Jhon Doe", email: "jhon@gmail.com", customerNumber: "2209022", accountNo: "C0012035", price: "$414.56", status: "Pending" },
        { id: 2, orderId: "#3232", variationId: "#12345", productId: "#343456", payment: "PayPal", name: "Jhon Doe", email: "jhon@gmail.com", customerNumber: "2209022", accountNo: "C0012035", price: "$414.56", status: "Complete" },
        { id: 3, orderId: "#3232", variationId: "#12345", productId: "#343456", payment: "PayPal", name: "Jhon Doe", email: "jhon@gmail.com", customerNumber: "2209022", accountNo: "C0012035", price: "$414.56", status: "Cancel" },
    ];

    

    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <div>
                                <h2 className="comman-heading">Order's</h2>
                            </div>
                        </div>
                        <div className="breadcrumb-img-wrapper">
                            <div className="breadcrumb-img">
                                <img src={order_image} alt="" className="w-100 h-100" />
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
                                aria-selected="false">Succeeded</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="failed-tab" data-bs-toggle="tab"
                                data-bs-target="#failed" type="button" role="tab" aria-controls="failed"
                                aria-selected="false">Failed</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pending-tab" data-bs-toggle="tab"
                                data-bs-target="#pending" type="button" role="tab" aria-controls="pending"
                                aria-selected="false">Pending Payment</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="other-tab" data-bs-toggle="tab" data-bs-target="#other"
                                type="button" role="tab" aria-controls="other"
                                aria-selected="false">Other</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-4 mb-5">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Order's</h2>
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
                                    {/* All table */}
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Sr</th>
                                                <th>Order ID</th>
                                                <th>Variation ID</th>
                                                <th>Product ID</th>
                                                <th>Payment Option</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Customer Number</th>
                                                <th>Account No.</th>
                                                <th>Purchase Price</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map((order, index) => (
                                                <tr key={order.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{order.orderId}</td>
                                                    <td>{order.variationId}</td>
                                                    <td>{order.productId}</td>
                                                    <td>{order.payment}</td>
                                                    <td>{order.name}</td>
                                                    <td>{order.email}</td>
                                                    <td>{order.customerNumber}</td>
                                                    <td>{order.accountNo}</td>
                                                    <td>{order.price}</td>
                                                    <td>
                                                        <div className={`badge ${order.status === "Complete" ? "bg-light-success text-success" : order.status === "Pending" ? "bg-warning" : "bg-light-danger text-danger"}`}>
                                                            {order.status}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-2 align-items-center">
                                                            <a href="order_view.html" className="table-icon bg-success">
                                                                <i className="fa-solid fa-desktop"></i>
                                                            </a>
                                                            <a href="order_edit.html" className="table-icon bg-main">
                                                                <i className="fa-solid fa-pencil"></i>
                                                            </a>
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
                            <div className="tab-pane fade" id="succeeded" role="tabpanel"
                                aria-labelledby="succeeded-tab">
                                <div className="table-responsive">
                                    {/* Succeeded table */}
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Sr</th>
                                                <th>Order ID</th>
                                                <th>Variation ID</th>
                                                <th>Product ID</th>
                                                <th>Payment Option</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Customer Number</th>
                                                <th>Account No.</th>
                                                <th>Purchase Price</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map((order, index) => (
                                                <tr key={order.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{order.orderId}</td>
                                                    <td>{order.variationId}</td>
                                                    <td>{order.productId}</td>
                                                    <td>{order.payment}</td>
                                                    <td>{order.name}</td>
                                                    <td>{order.email}</td>
                                                    <td>{order.customerNumber}</td>
                                                    <td>{order.accountNo}</td>
                                                    <td>{order.price}</td>
                                                    <td>
                                                        <div className={`badge ${order.status === "Complete" ? "bg-light-success text-success" : order.status === "Pending" ? "bg-warning" : "bg-light-danger text-danger"}`}>
                                                            {order.status}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-2 align-items-center">
                                                            <a href="order_view.html" className="table-icon bg-success">
                                                                <i className="fa-solid fa-desktop"></i>
                                                            </a>
                                                            <a href="order_edit.html" className="table-icon bg-main">
                                                                <i className="fa-solid fa-pencil"></i>
                                                            </a>
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
                            <div className="tab-pane fade" id="failed" role="tabpanel" aria-labelledby="failed-tab">
                                <div className="table-responsive">
                                    {/* failed table */}
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Sr</th>
                                                <th>Order ID</th>
                                                <th>Variation ID</th>
                                                <th>Product ID</th>
                                                <th>Payment Option</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Customer Number</th>
                                                <th>Account No.</th>
                                                <th>Purchase Price</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map((order, index) => (
                                                <tr key={order.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{order.orderId}</td>
                                                    <td>{order.variationId}</td>
                                                    <td>{order.productId}</td>
                                                    <td>{order.payment}</td>
                                                    <td>{order.name}</td>
                                                    <td>{order.email}</td>
                                                    <td>{order.customerNumber}</td>
                                                    <td>{order.accountNo}</td>
                                                    <td>{order.price}</td>
                                                    <td>
                                                        <div className={`badge ${order.status === "Complete" ? "bg-light-success text-success" : order.status === "Pending" ? "bg-warning" : "bg-light-danger text-danger"}`}>
                                                            {order.status}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-2 align-items-center">
                                                            <a href="order_view.html" className="table-icon bg-success">
                                                                <i className="fa-solid fa-desktop"></i>
                                                            </a>
                                                            <a href="order_edit.html" className="table-icon bg-main">
                                                                <i className="fa-solid fa-pencil"></i>
                                                            </a>
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
                            <div className="tab-pane fade" id="pending" role="tabpanel"
                                aria-labelledby="pending-tab">
                                <div className="table-responsive">
                                    {/* pending payments table */}
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Sr</th>
                                                <th>Order ID</th>
                                                <th>Variation ID</th>
                                                <th>Product ID</th>
                                                <th>Payment Option</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Customer Number</th>
                                                <th>Account No.</th>
                                                <th>Purchase Price</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map((order, index) => (
                                                <tr key={order.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{order.orderId}</td>
                                                    <td>{order.variationId}</td>
                                                    <td>{order.productId}</td>
                                                    <td>{order.payment}</td>
                                                    <td>{order.name}</td>
                                                    <td>{order.email}</td>
                                                    <td>{order.customerNumber}</td>
                                                    <td>{order.accountNo}</td>
                                                    <td>{order.price}</td>
                                                    <td>
                                                        <div className={`badge ${order.status === "Complete" ? "bg-light-success text-success" : order.status === "Pending" ? "bg-warning" : "bg-light-danger text-danger"}`}>
                                                            {order.status}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-2 align-items-center">
                                                            <a href="order_view.html" className="table-icon bg-success">
                                                                <i className="fa-solid fa-desktop"></i>
                                                            </a>
                                                            <a href="order_edit.html" className="table-icon bg-main">
                                                                <i className="fa-solid fa-pencil"></i>
                                                            </a>
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
                            <div className="tab-pane fade" id="other" role="tabpanel" aria-labelledby="other-tab">
                                <div className="table-responsive">
                                    {/* others table */}
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Sr</th>
                                                <th>Order ID</th>
                                                <th>Variation ID</th>
                                                <th>Product ID</th>
                                                <th>Payment Option</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Customer Number</th>
                                                <th>Account No.</th>
                                                <th>Purchase Price</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map((order, index) => (
                                                <tr key={order.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{order.orderId}</td>
                                                    <td>{order.variationId}</td>
                                                    <td>{order.productId}</td>
                                                    <td>{order.payment}</td>
                                                    <td>{order.name}</td>
                                                    <td>{order.email}</td>
                                                    <td>{order.customerNumber}</td>
                                                    <td>{order.accountNo}</td>
                                                    <td>{order.price}</td>
                                                    <td>
                                                        <div className={`badge ${order.status === "Complete" ? "bg-light-success text-success" : order.status === "Pending" ? "bg-warning" : "bg-light-danger text-danger"}`}>
                                                            {order.status}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-2 align-items-center">
                                                            <a href="order_view.html" className="table-icon bg-success">
                                                                <i className="fa-solid fa-desktop"></i>
                                                            </a>
                                                            <a href="order_edit.html" className="table-icon bg-main">
                                                                <i className="fa-solid fa-pencil"></i>
                                                            </a>
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
                </div>
            </div>
        </>
    )
}

export default Order
