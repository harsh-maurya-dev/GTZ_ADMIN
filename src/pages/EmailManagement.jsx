import tempImg from "../assets/img/gfz_email.png"

function EmailManagement() {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <div className="">
                                <h2 className="comman-heading">emails Management</h2>
                                <span className="border rounded-pill py-1 px-3">Email Templete </span>
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
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Email</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="form-design">
                            <div className="row">
                                <div className="col-12">
                                    <div className="mb-4 comman-tabs border-0">
                                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item me-4" role="presentation">
                                                <button className="nav-link active" id="pills-live-tab"
                                                    data-bs-toggle="pill" data-bs-target="#pills-live"
                                                    type="button" role="tab">
                                                    <i className="fa-solid fa-life-ring pe-2"></i> Live
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-test-tab"
                                                    data-bs-toggle="pill" data-bs-target="#pills-test"
                                                    type="button" role="tab">
                                                    <i className="fa-solid fa-vials pe-2"></i> Test
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4 mb-5">
                                <div className="col-md-6">
                                    <div className="tab-content" id="pills-tabContent">
                                        {/* <!-- Live Tab --> */}
                                        <div className="tab-pane fade show active" id="pills-live" role="tabpanel">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Email Template Group</label>
                                                        <select className="form-select"></select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Email Template</label>
                                                        <select className="form-select"></select>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Subject</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Sender Name</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label className="form-label">From</label>
                                                        <div className="input-group mb-3">
                                                            <input type="text" className="form-control"
                                                                placeholder="Recipient's username" />
                                                            <span
                                                                className="input-group-text bg-light text-main">@forextrader.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label className="form-label">Description</label>
                                                        <textarea rows="4" className="form-control h-100"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-5 mt-2">
                                                    <button className="comman-btn mt-4">
                                                        <i className="fa-solid fa-download"></i> Download
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Test Tab --> */}
                                        <div className="tab-pane fade" id="pills-test" role="tabpanel">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Email Template Group</label>
                                                        <select className="form-select"></select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Email Template</label>
                                                        <select className="form-select"></select>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Subject</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Sender Name</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label className="form-label">From</label>
                                                        <div className="input-group mb-3">
                                                            <input type="text" className="form-control"
                                                                placeholder="Recipient's username" />
                                                            <span
                                                                className="input-group-text bg-light text-main">@forextrader.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-3">
                                                    <div className="d-flex gap-3">
                                                        <button className="comman-btn"><i className="fa fa-file pe-3"></i>Save</button>
                                                        <button className="comman-btn bg-blue"><i className="fa fa-paper-plane pe-3"></i>Send</button>
                                                        <button className="comman-btn bg-blue"><i className="fa fa-refresh pe-3"></i>Make Live</button>
                                                    </div>
                                                </div>
                                                <div className="col-5 mt-2">
                                                    <button className="comman-btn mt-4">
                                                        <i className="fa-solid fa-download"></i> Download
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {/* Email Template START */}
                                    <div
                                        style={{
                                            backgroundColor: "black",
                                            width: "100%",
                                            padding: "50px",
                                            borderRadius: "12px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                border: "5px solid #080fb7",
                                                padding: "20px",
                                                borderRadius: "12px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    paddingTop: "10px",
                                                    paddingBottom: "10px",
                                                    borderBottom: "3px solid #080fb7",
                                                }}
                                            >
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <img
                                                                    src={tempImg}
                                                                    style={{ width: "150px", height: "auto", margin: "0 auto" }}
                                                                    alt="Logo"
                                                                />
                                                            </td>
                                                            <td>
                                                                <h2
                                                                    style={{
                                                                        fontSize: "42px",
                                                                        marginLeft: "10px",
                                                                        marginBottom: "0",
                                                                        textTransform: "uppercase",
                                                                    }}
                                                                >
                                                                    Global
                                                                </h2>
                                                                <h2
                                                                    style={{
                                                                        fontSize: "22px",
                                                                        marginLeft: "20px",
                                                                        marginTop: "0",
                                                                    }}
                                                                >
                                                                    FX ZONE
                                                                </h2>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div
                                                style={{
                                                    textAlign: "center",
                                                    borderTop: "3px solid #080fb7",
                                                    borderBottom: "3px solid #080fb7",
                                                    marginTop: "10px",
                                                    padding: "20px 0",
                                                }}
                                            >
                                                <h1 style={{ fontSize: "22px", color: "#fff" }}>Welcome : [Customer:Name]</h1>
                                                <p style={{ fontSize: "12px", color: "#fff" }}>
                                                    Thank You For Registering For [configuration.account_creator_prefix]
                                                </p>
                                                <p style={{ fontSize: "12px", color: "#fff" }}>
                                                    [Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ipsa dignissimos quod doloremque cumque atque? Ut quisquam illum reiciendis debitis harum, exercitationem nostrum pariatur corporis, adipisci dicta minus id ea?]
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailManagement
