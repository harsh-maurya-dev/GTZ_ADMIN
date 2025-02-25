import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import dummy_img from "../assets/img/user/user4.jpg";
import { useDispatch, useSelector } from "react-redux";
// import { profileDataApi } from "../redux/slice/profileSlice";

function ProfileInfo() {
  const [userDetails, setUserDetails] = useState({ user_name: "", email: "", phone_number: "", profile_image: "" });
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setformData] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const dispatch = useDispatch();
  const { profileData, error, loading, messsage } = useSelector(
    (state) => state.profile
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log("Selected File:", file);
  };

  const token = localStorage.getItem("token");
  const fetchProfileData = async () => {
    if (token) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/user/getMyProfile`,
          {
            headers: {
              "Content-Type": "application/json",
              // "x-auth-user-type": "admin"
              "x-auth-token-user": token,
            },
          }
        );
        setUserDetails(response.data.results?.user);
        // console.log(response.data.results?.user);
      } catch (error) {
        toast.error(
          "Data fetching Failed: " +
          (error.response?.data?.message || error.message),
          { style: { backgroundColor: "#1a406a", color: "#fff" } }
        );
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const changePassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/auth/changePassword`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token-user": token,
          },
        }
      );

      console.log("Success:", response.data.message);
    } catch (error) {
      if (error.response) {
        console.error(
          "Error:",
          error.response.data.message || "Something went wrong"
        );
      } else if (error.request) {
        console.error("No response from server. Please try again.");
      } else {
        console.error("Request failed:", error.message);
      }
    }
  };

  const editProfile = async () => {
    if (!selectedFile) {
      toast.error("Please select an image first!", { style: { backgroundColor: "#1a406a", color: "#fff" } });
      return;
    }

    const formData = new FormData();
    formData.append("profile_image", selectedFile);

    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/user/updateProfile`, formData, {
        headers: {
          "x-auth-token-user": token,
        },
      });

      if (response.data.error === false) {
        toast.success(response.data.message, { style: { backgroundColor: "#1a406a", color: "#fff" } });
        setSelectedFile(null)
        // window.location.reload()
      } else {
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error.response ? error.response.data : error.message);
    }
  };

  // console.log(userDetails);
  // console.log(user_name);

  useEffect(() => {
    // dispatch(profileDataApi())
    fetchProfileData();
  }, [editProfile]);

  return (
    <>
      <div className="mt-4">
        <div className="comman-design">
          <div className="mb-4 text-end">
            <button className="comman-btn">
              <i className="fa-solid fa-address-card me-2"></i>
              Access Customer Profile
            </button>
          </div>
          <div className="profile-wrapper">
            <div className="profile-img-wrapper">
              <div className="profile-user-img">
                <img
                  src={userDetails?.profile_image === "" ? dummy_img : userDetails?.profile_image}
                  className="w-100 h-100"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-center profile-text">{userDetails?.user_name}</h2>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="d-flex gap-2">
                <div className="table-icon bg-danger">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="table-icon bg-main">
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className="table-icon bg-primary">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="row">
          <div className="col-5 d-none">
            <div className="comman-design2">
              <div className="comman-design-header">
                <h2 className="comman-heading">Information</h2>
              </div>
              <div className="comman-design-body">
                {userDetails && (
                  <>
                    <div className="form-group">
                      <label htmlFor="user_name" className="form-label">
                        User Name
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="mobile_number" className="form-label">
                        Mobile Number
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="comman-design">
              <div className="comman-design-header">
                <ul className="nav nav-pills" id="actionTabs" role="tablist">
                  <li
                    className="nav-item text-sm fw-medium"
                    role="presentation"
                  >
                    <button
                      className="nav-link active"
                      id="add-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#add-profile"
                      type="button"
                      role="tab"
                      aria-controls="add-profile"
                      aria-selected="false"
                    >
                      Profile Information
                    </button>
                  </li>
                  <li
                    className="nav-item text-sm fw-medium"
                    role="presentation"
                  >
                    <button
                      className="nav-link"
                      id="add-competition-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#add-competition"
                      type="button"
                      role="tab"
                      aria-controls="add-competition"
                      aria-selected="false"
                    >
                      Change Password
                    </button>
                  </li>
                  <li
                    className="nav-item text-sm fw-medium"
                    role="presentation"
                  >
                    <button
                      className="nav-link"
                      id="merge-customer-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#merge-customer"
                      type="button"
                      role="tab"
                      aria-controls="merge-customer"
                      aria-selected="false"
                    >
                      Upload Image
                    </button>
                  </li>
                </ul>
              </div>
              <div className="comman-design-body">
                {/* <!-- Tabs Content --> */}
                <div className="tab-content mt-3" id="actionTabsContent">
                  {/* <!-- Send Notification Tab --> */}
                  {/* <!-- Add to the Competition Tab --> */}
                  <div
                    className="tab-pane fade show active"
                    id="add-profile"
                    role="tabpanel"
                    aria-labelledby="add-profile-tab"
                  >
                    <div className="comman-design-body">
                      {userDetails && (
                        <div className="row">
                          <div className="form-group col-6">
                            <label htmlFor="user_name" className="form-label">
                              User Name
                            </label>
                            <input type="text" className="form-control" name="user_name" value={userDetails?.user_name} onChange={handleChange} />
                          </div>
                          <div className="form-group col-6">
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <input type="text" className="form-control" name="email" value={userDetails?.email} onChange={handleChange} />
                          </div>
                          <div className="form-group col-6">
                            <label
                              htmlFor="mobile_number"
                              className="form-label"
                            >
                              Mobile Number
                            </label>
                            <input type="text" className="form-control" name="phone_number" value={userDetails?.phone_number} onChange={handleChange} />
                          </div>
                        </div>
                      )}

                      <div className="form-group col-6">
                        <button className="comman-btn">Save Changes</button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="add-competition"
                    role="tabpanel"
                    aria-labelledby="add-competition-tab"
                  >
                    <form onSubmit={changePassword}>
                      <div className="form-design row">
                        <div className="form-group col-6">
                          <label
                            htmlFor="competitionName"
                            className="form-label"
                          >
                            Old Password
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="competitionName"
                            placeholder="Enter Your Old Password"
                            value={formData.oldPassword}
                            name="oldPassword"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-6">
                          <label htmlFor="customerId" className="form-label">
                            New Password
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="customerId"
                            placeholder="Enter Your New Password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                          />
                        </div>
                        <button type="submit" className="comman-btn mt-4">
                          Change Password
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="merge-customer"
                    role="tabpanel"
                    aria-labelledby="merge-customer-tab"
                  >
                    <div className="form-design">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Upload Image
                        </label>
                        <div className="upload-img">
                          <input type="file" className="form-upload" accept="image/png, image/jpeg, image/jpeg" onChange={handleFileChange} />
                          <i className="fa solid fa-cloud-upload-alt upload-icon"></i>
                        </div>
                      </div>
                      <div className="form-group">
                        <button className="comman-btn" type="button" onClick={editProfile}>
                          Upload
                          <i className="fa-solid fa-upload ps-2"></i>
                        </button>
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
  );
}

export default ProfileInfo;
