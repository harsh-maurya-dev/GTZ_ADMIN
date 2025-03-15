const OrderEdit = () => {
  return (
    <>
      <div className="mt-4">
        <div className="row">
          <div className="col-6">
            <div className="comman-design2">
              <div className="comman-design-header">
                <h2 className="comman-heading">
                  <i className="fa-solid fa-shopping-cart me-2"></i>
                  Order Details
                </h2>
              </div>
              <div className="comman-design-body">
                <div className="items">
                  <ul className="list-unstyled p-0">
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Order ID</p>
                      <input type="text" className="form-control" placeholder="0101" />
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Payment Provider ID
                      </p>
                      <input type="text" className="form-control" placeholder="0101" />
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Variation ID</p>
                      <input type="text" className="form-control" placeholder="0101" />
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Product ID</p>
                      <input type="text" className="form-control" placeholder="0101" />
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Plan Description</p>
                      <textarea type="text" className="form-control h-100"
                        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        rows="3"></textarea>
                    </li>3
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Add ons</p>
                      <input type="text" className="form-control" placeholder="0101" />
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Status</p>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox"
                          id="flexSwitchCheckChecked" checked />
                        <label className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"></label>
                      </div>
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Proceed</p>
                      <input type="text" className="form-control" placeholder="Yes" />
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">OK</p>
                      <input type="text" className="form-control" placeholder="Yes" />
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Purchase price</p>
                      <input type="text" className="form-control" placeholder="$415.96" />
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Currency</p>
                      <input type="text" className="form-control" placeholder="Doller" />
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Discount code</p>
                      <input type="text" className="form-control" placeholder="DS79FN8080" />
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Completed</p>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox"
                          id="flexSwitchCheckChecked" checked />
                        <label className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"></label>
                      </div>
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Refund</p>
                      <input type="text" className="form-control" placeholder="N/A" />
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Dispute</p>
                      <input type="text" className="form-control" placeholder="01-12-2024" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="comman-design">
                <button className="comman-btn">Update</button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="comman-design2">
              <div className="comman-design-header">
                <h2 className="comman-heading">
                  <i className="fa-solid fa-user-circle me-2"></i>
                  Customer Details
                </h2>
              </div>
              <div className="comman-design-body">
                <div className="items">
                  <ul className="list-unstyled p-0">
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Name</p>
                      <input type="text" className="form-control" placeholder="Mathew Anderson" />
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Email</p>
                      <input type="text" className="form-control" placeholder="Mathew@gmail.com" />
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Account No.</p>
                      <input type="text" className="form-control" placeholder="2209022" />
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Customer Number</p>
                      <input type="text" className="form-control" placeholder="+1 1234-1234-12" />
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Created</p>
                      <input type="text" className="form-control" placeholder="01-12-2024" />
                    </li>
                    <li className="mb-3">
                      <p className="fs-6 fw-semibold m-0 text-dark-light">Updated</p>
                      <input type="text" className="form-control" placeholder="01-12-2024" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="comman-design2">
                <div className="comman-design-header">
                  <h2 className="comman-heading">
                    <i className="fa-solid fa-map-marker-alt me-2"></i>
                    Billing Address
                  </h2>
                </div>
                <div className="comman-design-body">
                  <div className="items">
                    <ul className="list-unstyled p-0">
                      <li className="mb-3">
                        <p className="fs-6 fw-semibold m-0 text-dark-light">Address</p>
                        <input type="text" className="form-control" placeholder="2186 Joyce Street Rocky Mount" />
                      </li>
                      <li className="mb-3">
                        <p className="fs-6 fw-semibold m-0 text-dark-light">Zip Code</p>
                        <input type="text" className="form-control" placeholder="25645" />
                      </li>
                      <li className="mb-3">
                        <p className="fs-6 fw-semibold m-0 text-dark-light">State</p>
                        <input type="text" className="form-control" placeholder="New York" />
                      </li>
                      <li className="mb-3">
                        <p className="fs-6 fw-semibold m-0 text-dark-light">Country</p>
                        <input type="text" className="form-control" placeholder="United States" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="comman-design2">
                <div className="comman-design-header">
                  <h2 className="comman-heading">
                    <i className="fa-solid fa-shield-alt me-2"></i>
                    Transactions Details
                  </h2>
                </div>
                <div className="comman-design-body">
                  <div className="items">
                    <ul className="list-unstyled p-0">
                      <li className="mb-3">
                        <p className="fs-6 fw-semibold m-0 text-dark-light">Transactions</p>
                        <input type="text" className="form-control" placeholder="VLZ124561278124" />
                      </li>
                      <li className="mb-3">
                        <p className="fs-6 fw-semibold m-0 text-dark-light">Payment Method
                        </p>
                        <input type="text" className="form-control" placeholder="Debit Card" />
                      </li>
                      <li className="mb-3">
                        <p className="fs-6 fw-semibold m-0 text-dark-light">Card Holder Name
                        </p>
                        <input type="text" className="form-control" placeholder="2209022" />
                      </li>
                      <li className="mb-3">
                        <p className="fs-6 fw-semibold m-0 text-dark-light">Card Number</p>
                        <input type="text" className="form-control" placeholder="xxxx xxxx xxxx 2456" />
                      </li>
                      <li className="mb-3">
                        <p className="fs-6 fw-semibold m-0 text-dark-light">Total Amount</p>
                        <input type="text" className="form-control" placeholder="$415.96" />
                      </li>
                    </ul>
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

export default OrderEdit
