const ContractView = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Contracts Details</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="row">
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-heading"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Customer Number</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">C12023</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-quote-left"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Account</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">558591</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-quote-left"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Contract Name</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">Vistor Test</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-quote-left"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Contract Type</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">Funded Trader</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-quote-left"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Contract Status</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium badge text-success bg-light-success">Active</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-quote-left"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">KYC Status</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark">Not Verified</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-quote-left"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Signature Date</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-quote-left"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Signature Date</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark">(UTC)</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- <div className="col-md-4 mt-4">
                                        <div className="info-text">
                                            <div className="d-flex gap-2 align-items-center">
                                                <div className="">
                                                    <i className="fa-solid fa-file-pdf"></i>
                                                </div>
                                                <p className="fs-5 text-dark-light m-0">Add Contract (PDF)</p>
                                            </div>
                                            <div className="">
                                                 <div className="pdf-img">
                                                    <img src="assets/img/bg-img/pdf.png" className="w-100 h-100" alt="">
                                                 </div>
                                            </div>
                                        </div>
                                    </div> --> */}
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContractView
