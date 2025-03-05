const VideoManagementView = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Video Details</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="row">
                            <div className="col-12">
                                <div className="">
                                    <iframe className="w-100" height="500" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                    </iframe>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-heading"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Title</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">This Video Heading</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-heading"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Description</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoManagementView
