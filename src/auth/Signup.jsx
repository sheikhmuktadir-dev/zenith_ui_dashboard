import { Link, useNavigate } from "react-router-dom";
import Style from "./auth.module.css";
import { GoEyeClosed } from "react-icons/go";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import usePasswordEyeToggle from "../hooks/usePasswordEyeToggle";
import { GoEye } from "react-icons/go";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";

export default function Signup() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { eyeToggle, inputType, eyeToggleHandler } = usePasswordEyeToggle();

  const { signupHandler, loading } = useContext(AuthContext);

  function onSubmit(data) {
    signupHandler(data, reset, navigate);
  }

  return (
    <div className={Style.authSection}>
      <div className={Style.authLogoBox}>
        <svg
          width="180"
          height="180"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0923 27.3033H30.8176V36.3143H10.0923V27.3033Z"
            fill="white"
          ></path>
          <path
            d="M31.5385 29.1956C31.5385 26.2322 30.3707 23.3901 28.2922 21.2947C26.2136 19.1992 23.3945 18.022 20.4549 18.022C17.5154 18.022 14.6963 19.1992 12.6177 21.2947C10.5392 23.3901 9.37143 26.2322 9.37143 29.1956L20.4549 29.1956H31.5385Z"
            fill="white"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5 31.989C26.8452 31.989 31.989 26.8452 31.989 20.5C31.989 14.1548 26.8452 9.01099 20.5 9.01099C14.1548 9.01099 9.01099 14.1548 9.01099 20.5C9.01099 26.8452 14.1548 31.989 20.5 31.989ZM20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17816 31.8218 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.8218 9.17816 41 20.5 41Z"
            fill="white"
          ></path>
        </svg>
        <div className={Style.authTitle}>
          Zenith<span>UI</span>
        </div>
      </div>

      <div className={Style.authTheme}>
        <ThemeToggle />
      </div>

      <div className={Style.authArea}>
        <form
          className={Style.authForm}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={Style.authFormHeading}>
            <h2>Create an account</h2>
            <p className={Style.authFormHeadingPara}>
              Enter your name, email, and password to register!
            </p>
          </div>

          <div className={Style.authFlex}>
            {/* First Name */}
            <div className={Style.authBox}>
              <label className={Style.authLabel}>First Name*</label>
              <input
                type="text"
                className={Style.authField}
                placeholder="John"
                {...register("firstName", {
                  required: "First name is required",
                  minLength: { value: 2, message: "At least 2 characters" },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Only letters allowed, no spaces",
                  },
                })}
                onChange={(e) =>
                  setValue("firstName", e.target.value.replace(/\s/g, ""), {
                    shouldValidate: true,
                  })
                }
              />
              {errors.firstName && (
                <p className={Style.authError}>{errors.firstName.message}</p>
              )}
            </div>

            {/* Last Name */}
            <div className={Style.authBox}>
              <label className={Style.authLabel}>Last Name*</label>
              <input
                type="text"
                className={Style.authField}
                placeholder="Smith"
                {...register("lastName", {
                  required: "Last name is required",
                  minLength: { value: 2, message: "At least 2 characters" },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Only letters allowed, no spaces",
                  },
                })}
                onChange={(e) =>
                  setValue("lastName", e.target.value.replace(/\s/g, ""), {
                    shouldValidate: true,
                  })
                }
              />
              {errors.lastName && (
                <p className={Style.authError}>{errors.lastName.message}</p>
              )}
            </div>

            {/* Email */}
            <div className={Style.authBox}>
              <label className={Style.authLabel}>Email*</label>
              <input
                type="text"
                placeholder="mail@simple.com"
                className={Style.authField}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                onChange={(e) =>
                  setValue("email", e.target.value.trim(), {
                    shouldValidate: true,
                  })
                }
              />
              {errors.email && (
                <p className={Style.authError}>{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className={Style.authBox}>
              <label className={Style.authLabel}>Password*</label>
              <div className={Style.authPassword}>
                <input
                  type={inputType}
                  className={Style.authField}
                  placeholder="Min. 8 characters"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 8, message: "At least 8 characters" },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])\S{8,}$/,
                      message:
                        "Use uppercase, lowercase, number & special character, no spaces",
                    },
                  })}
                  onChange={(e) =>
                    setValue("password", e.target.value.trim(), {
                      shouldValidate: true,
                    })
                  }
                />
                <button
                  type="button"
                  onClick={eyeToggleHandler}
                  className={Style.authPasswordToggle}
                >
                  {eyeToggle ? <GoEye /> : <GoEyeClosed />}
                </button>
              </div>
              {errors.password && (
                <p className={Style.authError}>{errors.password.message}</p>
              )}
            </div>

            <div className={Style.authBox}>
              <button disabled={loading} className={Style.authBtn}>
                {loading ? "Please wait..." : "Register"}
              </button>
            </div>

            <div className={Style.authBox}>
              <p className={Style.authAnotherLink}>
                Already have an account?
                <Link to="/login" className={Style.authRedirect}>
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
