<img width="2174" height="1358" alt="image" src="https://github.com/user-attachments/assets/4b95c1f9-8930-4ce4-9233-a9a904fefee6" />
<img width="2174" height="1358" alt="image" src="https://github.com/user-attachments/assets/1c5682f9-72df-48e9-ab83-82d18e6fc50b" />



# 🚀 Zenith UI Dashboard

A modern **React Dashboard with Authentication System** featuring protected routes, form validation, reusable UI components, and local storage-based session management.

🔗 **Live Demo:** https://zenith-ui-dashboard.vercel.app

---

## 📌 Features

* 🔐 Authentication (Signup / Login / Logout)
* 🛡️ Protected Routes (Dashboard access control)
* 💾 LocalStorage-based session handling
* ✅ Form validation using React Hook Form
* 👁️ Password visibility toggle
* 🌙 Dark / Light mode toggle
* 🔔 Toast notifications (React Toastify)
* ⚡ Fast performance with Vite
* ♻️ Clean & reusable component structure

---

## 🛠️ Tech Stack

* **React.js**
* **Vite**
* **React Router DOM**
* **React Hook Form**
* **Context API**
* **React Toastify**
* **CSS Modules**

---

## 📂 Folder Structure

```
src/
│
├── auth/                # Login & Signup pages
├── components/          # Reusable UI components
├── context/             # Global state (Auth, Theme, Menu)
├── hooks/               # Custom hooks
├── routes/              # Protected routing logic
├── style/               # Global styles
└── App.jsx
```

---

## 🔑 Authentication Flow

### Signup

* Stores user data in localStorage
* Redirects to login page

### Login

* Validates user credentials
* Sets:

  * `currentUser`
  * `token`
* Redirects to dashboard

### Logout

* Clears session
* Redirects to login

---

## 🛡️ Protected Routes

* Dashboard is accessible only when:

  * `token` exists
  * `currentUser` exists
* Otherwise, user is redirected to login page

---

## ⚙️ Getting Started

```bash
# Clone repository
git clone https://github.com/sheikhmuktadir-dev/zenith_ui_dashboard.git

# Go to project folder
cd zenith_ui_dashboard

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🎯 What I Learned

* Building real-world authentication flow
* Managing global state with Context API
* Implementing protected routing
* Handling forms with validation
* Creating reusable UI components

---

## 🚧 Future Improvements

* 🔗 Backend integration (Firebase / Node.js)
* 🔒 JWT authentication
* 🔑 Forgot password feature
* 📧 Email verification
* 🌐 API-based user system

---

## 👨‍💻 Author

**Sheikh Muktadir**

* GitHub: https://github.com/sheikhmuktadir-dev

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
