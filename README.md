# Shipping Box Management Application

## 📌 Overview
This is a **React-based single-page application (SPA)** that calculates the shipping cost for boxes sent to specific international destinations. It uses **Redux for state management** and **Material UI (MUI) for styling**.

## 🚀 Features
- ✅ **Add a Shipping Box** with receiver name, weight, color, and destination.
- ✅ **Display a List** of all added boxes with calculated shipping costs.
- ✅ **State Management using Redux**.
- ✅ **Navigation** between Add Box and Box List views.

## 🛠️ Tech Stack
- **Frontend:** React.js, Redux, Material UI (MUI)
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM

## 📥 Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/rohitsoni98/shipping-box
   cd shipping-box
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```

## 📂 Project Structure
```
.
├── src
│   ├── views/app
│   │   ├── navBar/ Navbar.js
│   │   ├── addBox/ AddBox.js
│   │   ├── boxList/ BoxList.js
│   ├── redux
│   │   ├── actions
│   │   │   ├── boxActions.js
│   │   ├── reducers
│   │   │   ├── boxReducer.js
│   │   ├── store.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│── README.md
```

## 🔥 Future Enhancements
### 🔹 **Reusable Table Wrapper Component**
- 📌 Create a generic **`TableWrapper`** component that can be reused across different tables.
- 📌 Accept props like `columns`, `data`, and `renderRow` to dynamically render tables.

### 🔹 **Backend Integration**
- 🔄 Replace Redux state with API calls to store and retrieve data from a backend.

### 🔹 **Unit Testing**
- 🧪 Add Jest and React Testing Library to test components and Redux functionality.

### 🔹 **Advanced State Management**
- ⚡ Implement asynchronous operations using Redux Thunk or Redux Saga for API interactions.

## 👨‍💻 Author
[Rohit Soni]

