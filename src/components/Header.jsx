import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../context/ProfileContext";
// import "bootstrap/dist/css/bootstrap.min.css";
import user4 from "../assets/img/user/user4.jpg";

const Header = () => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "light-blue-white-color"
  );
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const { profileData, loading, error } = useContext(ProfileContext);
//   console.log(profileData);
  

  const themes = [
    { value: "light-blue-white-color", label: "Light Blue" },
    { value: "yellow-color", label: "Yellow" },
    { value: "danger-color", label: "Red" },
    { value: "success-color", label: "Green" },
    { value: "gray-color", label: "Gray" },
  ];

  // Apply theme on mount and when changed
  useEffect(() => {
    document.body.classList.remove(
      "light-blue-white-color",
      "yellow-color",
      "danger-color",
      "success-color",
      "gray-color"
    );
    document.body.classList.add(currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleThemeChange = (newTheme) => setCurrentTheme(newTheme);

  const logout = () => {
    localStorage.removeItem("x-auth-token-user-gfz");
    window.location.reload();
  };

  return (
    <div id="header" className="header">
      <div className="d-flex justify-content-end align-items-center h-100">
        {/* Theme Selector */}
        <div className="change-color" onClick={() => setIsOpen(!isOpen)}>
          <div className={`change-color-item ${currentTheme} main-display`}></div>
          {isOpen && (
            <div className="change-color-dropdown">
              {themes.map((theme) => (
                <div className="d-flex justify-content-between gap-1" key={theme.value}>
                  <div className={`change-color-item ${theme.value}`}></div>
                  <input
                    type="radio"
                    name="color-change"
                    value={theme.value}
                    checked={currentTheme === theme.value}
                    onChange={() => handleThemeChange(theme.value)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Notification Icon */}
        <div className="me-3 notification-bell">
          <i className="fa-solid fa-bell"></i>
        </div>

        {/* Profile Section */}
        <div className="position-relative custom-profile-dropdown" ref={menuRef}>
          <div className="profile">
            <div className="user mt-4">
              <h3>{profileData?.user_name}</h3>
              <p>{profileData?.email}</p>
            </div>
            <div className="img-box po" onClick={() => setIsOpenProfile(!isOpenProfile)}>
              <img src={profileData?.profile_image || user4} alt="User Profile" />
            </div>
          </div>

          {/* Profile Dropdown Menu */}
          {isOpenProfile && (
            <div className="menu active">
              <ul>
                <li>
                  <Link to="/profile_info" onClick={() => setIsOpenProfile(false)}>
                    <i className="fa-solid fa-user text-main"></i> Profile
                  </Link>
                </li>
                <li>
                  <Link to="/settings" onClick={() => setIsOpenProfile(false)}>
                    <i className="fa-solid fa-gear text-main"></i> Settings
                  </Link>
                </li>
                <li>
                  <Link to="/help" onClick={() => setIsOpenProfile(false)}>
                    <i className="fa-brands fa-hire-a-helper text-main"></i> Help
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={logout}>
                    <i className="fa-solid fa-right-from-bracket text-main"></i> Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
