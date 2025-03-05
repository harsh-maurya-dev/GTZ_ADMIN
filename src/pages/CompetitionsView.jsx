const CompetitionsView = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header">
                        <h2 className="comman-heading">Competitions Details</h2>
                    </div>
                    <div className="comman-design-body">
                        <div className="row">
                            <div className="col-md-3 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-heading"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Name</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">Competition 1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-object-group"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Group</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">Group A</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-calendar"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Min Trading Days</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">10</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-laptop"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Max Lots</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">50</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-4">
                                <div className="info-text">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="">
                                            <i className="fa-solid fa-book-reader"></i>
                                        </div>
                                        <p className="fs-5 text-dark-light m-0">Max Soft Breaches</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-6 fw-medium text-dark m-0">5</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-4">
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
                            <div className="col-md-3 mt-4">
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
                        <div className="comman-design-header px-0 flex-column border-top mt-4 border-2">
                            <div className="w-100">
                                <h2 className="comman-heading">Leaderboard</h2>
                                <div className="table-responsive mt-3">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="bg-main text-white">Rank</th>
                                                <th className="bg-main text-white">Account Size</th>
                                                <th className="bg-main text-white">Winner</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="">
                                                <td className="bg-light-blue">1</td>
                                                <td className="bg-light-blue">50K</td>
                                                <td className="bg-light-blue">Jhon Doe</td>
                                            </tr>
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

export default CompetitionsView
