import { useState } from "react";
import { AuthContext } from "./AuthContext";
import Toast from "../../components/Toast/Toast";
import { toast } from "react-toastify";

export default function AuthContextProvider({ children }) {
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem("zenithUI-users")) || [],
  );
  const [token, setToken] = useState(
    () => localStorage.getItem("zenithUI-token") || null,
  );
  const [currentUser, setCurrentUser] = useState(
    () => JSON.parse(localStorage.getItem("zenithUI-currentUser")) || null,
  );
  const [loading, setLoading] = useState(false);

  // signup
  const signupHandler = (data, reset, navigate) => {
    setLoading(true);

    setTimeout(() => {
      try {
        const existingUser = users.find((user) => user.email === data.email);

        if (existingUser) {
          toast.error("Email already registered");
          setLoading(false);
          return;
        }

        const updatedUsers = [...users, data];
        setUsers(updatedUsers);
        localStorage.setItem("zenithUI-users", JSON.stringify(updatedUsers));

        toast.success("Signup successful!", {
          autoClose: 3000,
          onClose: () => navigate("/login", { replace: true }),
        });

        reset();
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    }, 1500);
  };

  // login
  const loginHandler = (data, reset, navigate) => {
    setLoading(true);
    setTimeout(() => {
      try {
        const checkUser = users.find(
          (user) =>
            user.email === data.email && user.password === data.password,
        );

        if (!checkUser) {
          toast.error("Invalid Credentials");
          setLoading(false);
          return;
        }

        setCurrentUser(checkUser);
        localStorage.setItem("zenithUI-currentUser", JSON.stringify(checkUser));

        const fakeToken = Date.now().toString();
        setToken(fakeToken);
        localStorage.setItem("zenithUI-token", fakeToken);

        toast.success("Login successful!", {
          autoClose: 3000,
          onClose: () => navigate("/", { replace: true }),
        });

        reset();
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    }, 1500);
  };

  // logout
  const logoutHandler = (navigate) => {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem("zenithUI-currentUser");
    localStorage.removeItem("zenithUI-token");

    toast.info("Logged out successfully", {
      autoClose: 2000,
      onClose: () => navigate("/login", { replace: true }),
    });
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        loading,
        currentUser,
        token,
        signupHandler,
        loginHandler,
        logoutHandler,
      }}
    >
      {children}
      <Toast />
    </AuthContext.Provider>
  );
}
