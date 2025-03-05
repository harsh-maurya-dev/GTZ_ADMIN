import { Link } from "react-router-dom"

function FAQ() {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <div>
                                <h2 className="comman-heading">FAQ Management</h2>
                                <span className="border rounded-pill py-1 px-3">3</span>
                            </div>
                            <div>
                                <Link to="/FAQ_management_add" className="comman-btn">
                                    <i className="fa-solid fa-plus pe-2"></i>
                                    Add
                                </Link>
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
            <div className="comman-design2 mt-4">
                <div className="comman-design-header">
                    <h2 className="comman-header">FAQ</h2>
                </div>
                <div className="comman-design-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>sr</th>
                                    <th>titile</th>
                                    <th>Category</th>
                                    {/* <!-- <th>Faq</th> --> */}
                                    <th>Language</th>
                                    <th>position</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Can I Hold Position Over The Weekend?</td>
                                    <td>Trading Rules</td>
                                    <td>En</td>
                                    <td>23</td>
                                    <td>
                                        <div className="d-flex gap-3 justify-content-center">
                                            <Link to="/FAQ_management_view" className="table-icon bg-success">
                                                <i className="fa-solid fa-desktop"></i>
                                            </Link>
                                            <Link to="/FAQ_management_edit" className="table-icon bg-main">
                                                <i className="fa-solid fa-pencil"></i>
                                            </Link>
                                            <Link to="#" className="table-icon bg-danger">
                                                <i className="fa-solid fa-trash"></i>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ
