import React from 'react'

function EmailManagement() {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design pb-0 light-list-blue">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <div className="">
                                <h2 className="comman-heading">Emails Management</h2>
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
                                    <div className="mb-4">
                                        <div className="d-flex gap-4">
                                            <button className="comman-btn">
                                                <i className="fa-solid fa-life-ring pe-2"></i>
                                                Live
                                            </button>
                                            <button className="comman-btn bg-blue">
                                                <i className="fa-solid fa-vials pe-2"></i>
                                                Test
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label for="" className="form-label">Email Templete Group</label>
                                        <select name="" id="" className="form-select"></select>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label for="" className="form-label">Email Templete</label>
                                        <select name="" id="" className="form-select"></select>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label for="" className="form-label">Language</label>
                                        <select name="" id="" className="form-select"></select>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4 mb-5">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label for="" className="form-label">Subject</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label for="" className="form-label">Sender Name</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label for="" className="form-label">From</label>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control"
                                                        placeholder="Recipient's username"
                                                        aria-label="Recipient's username"
                                                        aria-describedby="basic-addon2" />
                                                    <span className="input-group-text bg-light text-main"
                                                        id="basic-addon2">@forextrader.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className="form-group">
                                                <label for="" className="form-label">BCC</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-5 mt-2">
                                            <button className="comman-btn mt-4">
                                                <i className="fa-solid fa-download"></i>
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {/* <!-- Email Templete START --> */}
                                    <div
                                        style={{
                                            backgroundColor: "black",
                                            width: "100%",
                                            padding: "50px",
                                            borderRadius: "12px",
                                        }}
                                    >
                                        <div
                                            style={{border: '5px solid #080fb7', padding: '20px', borderRadius: '12px'}}>
                                            <div
                                                style={{paddingTop: "10px", paddingBottom: "10px", borderBottom: "3px solid #080fb7"}}>
                                                <img src="assets/img/logo-bg-black.svg"
                                                    style={{width: "100%", height: "fit-content"}} alt="" />
                                            </div>
                                            <div
                                                style={{textAlign: "center", borderTop: "3px solid #080fb7", borderBottom: "3px solid #080fb7", marginTop: "10px", padding: "20px 0"}}>
                                                <h1 style={{fontSize: "22px", color: "#ffff"}}>Welcome :
                                                    [Customer:Name]</h1>
                                                <p style={{fontSize: "12px", color: "#fff"}}>
                                                    Thank You For Registering For
                                                    [configuration.account_creator_prefix]
                                                </p>
                                                <p style={{fontSize: "12px", color: "#fff"}}>
                                                    You Can Find Your dashboard login information below. In a
                                                    Separate Email You Will Find Your New
                                                    Account Login Information Login Information, So be on the
                                                    lookout for that one as well
                                                </p>
                                            </div>
                                            <div
                                                style={{textAlign: "center", borderTop: "3px solid #080fb7", marginTop: "10px", padding: "20px 0"}}>
                                                <h1 style={{fontSize: '22px', color: '#ffff'}}>Dashboard Login :
                                                    [Customer.email]</h1>
                                                <h1 style={{fontSize: '22px', color: '#ffff'}}>Dashboard Tempoary
                                                    Password : [Customer.Mt4MasterPassword]</h1>
                                                <p style={{fontSize: '12px', color: '#fff', marginTop: '10px'}}>
                                                    You Can Find Your dashboard login information below. In a
                                                    Separate Email You Will Find Your New
                                                    Account Login Information Login Information, So be on the
                                                    lookout for that one as well
                                                </p>
                                                <div style={{marginTop: '20px'}}>
                                                    <button style={{height: '44px', lineHeight: '44px', textAlign: 'center',color: "#fff", border: '1px solid #06024d',
                                                            borderRadius: '6px', backgroundColor: '#080fb778', padding: '0 10px'}}>Dashboard Login</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Email Templete END --> */}
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
