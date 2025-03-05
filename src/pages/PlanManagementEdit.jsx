const PlanManagementEdit = () => {
    return (
        <>
            <div className="mt-4">
                <div className="comman-design2">
                    <div className="comman-design-header align-items-center ">
                        <h2 className="comman-heading">Plans Update</h2>
                        <button className="comman-btn">Upgrate Plan</button>
                    </div>
                    <div className="comman-design-body">
                        <div className="form-design">
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Leverage</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Starting Balance (USD)</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Max Drawdown (%)</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Profit Target (%)</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Daily Loss Limit (%)</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Profit Share (%)</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Live Profit Share Starting</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Max open Lots</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Min Trading Days</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Min Time</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Upgrade threshold (%)</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Inactive Period (Days)</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">initial Withdraw Delay (Days)</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Subsequent Withdrawl Delay
                                            (Days)</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Max Risk (%)</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label htmlFor="" className="form-label">Excessive Soft Breach
                                                    (%)</label>
                                                <input type="number" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label htmlFor="" className="form-label">Group</label>
                                                <input type="number" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="" className="form-label">Description</label>
                                                <textarea rows="5" className="form-control h-100"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckChecked" />
                                                <label className="form-check-label ms-2"
                                                    htmlFor="flexSwitchCheckChecked">Liquidate Friday</label>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckDisabled" checked />
                                                <label className="form-check-label ms-2"
                                                    htmlFor="flexSwitchCheckDisabled">Require Stop Loss</label>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckCheckedDisabled" />
                                                <label className="form-check-label ms-2"
                                                    htmlFor="flexSwitchCheckCheckedDisabled">Create Account As
                                                    Disabled</label>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckCheckedDisabled" />
                                                <label className="form-check-label ms-2"
                                                    htmlFor="flexSwitchCheckCheckedDisabled">Visible On
                                                    Leaderboard</label>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckCheckedDisabled" checked />
                                                <label className="form-check-label ms-2"
                                                    htmlFor="flexSwitchCheckCheckedDisabled">Allow EAs</label>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckCheckedDisabled" />
                                                <label className="form-check-label ms-2"
                                                    htmlFor="flexSwitchCheckCheckedDisabled">Make Drawdown
                                                    Static</label>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckCheckedDisabled" />
                                                <label className="form-check-label ms-2"
                                                    htmlFor="flexSwitchCheckCheckedDisabled">Make Drawdown
                                                    Static</label>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckCheckedDisabled" checked />
                                                <label className="form-check-label ms-2"
                                                    htmlFor="flexSwitchCheckCheckedDisabled">Look Upon
                                                    Payout</label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Upgrade plan</label>
                                        <select className="form-select">
                                            <option value="">Forex Trader Funds - One Step Funded - 10K - Days
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Scaling plan</label>
                                        <select className="form-select">
                                            <option value="">(None)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">COntract Template Account
                                            Creation</label>
                                        <select className="form-select">
                                            <option value="">(None)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox"
                                                id="flexSwitchCheckChecked" />
                                        </div>
                                        <label className="form-check-label ms-2"
                                            htmlFor="flexSwitchCheckChecked">Pass/Upgrade/Breach/Reset Move
                                            Group</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Breach Coupon Plan</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Repeat Coupen Discount (%)</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Breach Coupen Discount (%)</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Surrender Breach Coupon</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Product Id</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Price (USD)</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Internal Price (USD)</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Product Category</label>
                                        <select name="" id="" className="form-control"></select>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox"
                                                id="flexSwitchCheckCheckedDisabled" checked />
                                            <label className="form-check-label ms-2"
                                                htmlFor="flexSwitchCheckCheckedDisabled">Profit Share</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox"
                                                id="flexSwitchCheckCheckedDisabled" checked />
                                            <label className="form-check-label ms-2"
                                                htmlFor="flexSwitchCheckCheckedDisabled">Hold Weekend</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox"
                                                id="flexSwitchCheckCheckedDisabled" checked />
                                            <label className="form-check-label ms-2"
                                                htmlFor="flexSwitchCheckCheckedDisabled">No Stop Loss</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                    <button className="comman-btn" onClick="addMoreBundle()">
                                        <i className="fa-solid fa-plus"></i>
                                        ADD More Bundle
                                    </button>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Bundle</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Price</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-2 mt-3">
                                    <button className="table-icon bg-danger mt-4">
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                                <div className="col-12">
                                    <div className="row " id="addMoreBundle">

                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-label">Description</label>
                                        <textarea className="form-control h-100" rows="4"></textarea>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <button className="comman-btn">Update</button>
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

export default PlanManagementEdit
