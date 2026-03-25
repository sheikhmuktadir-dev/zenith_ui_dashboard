import Style from "./profile.module.css";
import profile from "/images/profile.webp";
import { FiEdit } from "react-icons/fi";

export default function Profile() {
  const currentUser = JSON.parse(localStorage.getItem("zenithUI-currentUser"));

  return (
    <div className={Style.profileBoxGrid}>
      <div className={Style.profilePerson}>
        <div className={Style.profileImageBox}>
          <img
            src={profile}
            alt="profile image"
            className={Style.profileImage}
          />
        </div>

        <div className={Style.profileText}>
          <h4 className={Style.profileTextName}>
            <span>{currentUser.firstName}</span>
            <span>{currentUser.lastName}</span>
          </h4>
          <p className={Style.profileTextPara}>{currentUser.email}</p>
        </div>

        <div className={Style.profileDetailsArea}>
          <div className={Style.profileProgress}>
            <p>Your Profile 100% Complete</p>
            <div className={Style.progressWrapper}>
              <div className={Style.progressBar}></div>
            </div>
          </div>

          <div className={Style.profileDetailsText}>
            <label className={Style.profileLabel}>Location</label>
            <p>Madhapur, Hyderabad</p>
          </div>
        </div>
      </div>

      <div className={Style.profileRightBoxArea}>
        <div className={Style.profileDetails}>
          <h4>Account Information</h4>
          <form className={Style.profileForm}>
            <div className={Style.profileFormGrid}>
              <div className={Style.profileFormField}>
                <label className={Style.profileLabel}>
                  Personal KYC Status
                </label>
                <input
                  type="text"
                  value="Approved"
                  readOnly
                  className={Style.profileInputField}
                />
              </div>

              <div className={Style.profileFormField}>
                <label className={Style.profileLabel}>Account ID</label>
                <input
                  type="text"
                  value="446909"
                  readOnly
                  className={Style.profileInputField}
                />
              </div>
            </div>
          </form>
        </div>

        <div className={Style.profileDetails}>
          <h4>User Information</h4>
          <form className={Style.profileForm}>
            <div className={Style.profileFormGrid}>
              <div className={Style.profileFormField}>
                <label className={Style.profileLabel}>First Name</label>
                <input
                  type="text"
                  value={currentUser.firstName}
                  readOnly
                  className={Style.profileInputField}
                />
              </div>

              <div className={Style.profileFormField}>
                <label className={Style.profileLabel}>Last Name</label>
                <input
                  type="text"
                  value={currentUser.lastName}
                  readOnly
                  className={Style.profileInputField}
                />
              </div>

              <div className={Style.profileFormField}>
                <label className={Style.profileLabel}>Email</label>
                <input
                  type="text"
                  value={currentUser.email}
                  readOnly
                  className={Style.profileInputField}
                />
              </div>

              <div className={Style.profileFormField}>
                <label className={Style.profileLabel}>Address</label>
                <input
                  type="text"
                  readOnly
                  value="Madhapur, Hyderabad"
                  className={Style.profileInputField}
                />
              </div>
            </div>

            <div className={Style.profileFormBtnEnd}>
              <button type="button" className={Style.profileBtn}>
                <FiEdit />
                <span> Edit Details</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
