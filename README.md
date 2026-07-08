# AstroBlaze | Astronomy Equipment Marketplace

<div align="center">
  <p>A full-stack E-commerce platform built to explore web development concepts through the lens of a personal hobby: observational astronomy.</p>
</div>

---

## 👨‍💻 About the Developer
Hi, I’m **Rudra Pratap Singh**, a Computer Science Engineering student at the National Institute of Technology, Raipur. 

My primary engineering focus is on competitive programming and algorithmic problem-solving using Java. I built AstroBlaze to step outside my typical terminal environments, learn how frontend interfaces consume RESTful APIs, and understand the end-to-end flow of a modern web application. 

The theme of the platform stems from my own interest in stargazing and tracking celestial bodies in the night sky.

---

## 🏗 Why I Built This & What I Learned
Instead of building a generic to-do app, I wanted a project that handled actual data relationships. Building this taught me how to explain and implement:
* **The Client-Server Model**: How React components request data from an Express backend.
* **Authentication**: How JSON Web Tokens (JWT) verify users without storing session states on the server.
* **State Management**: Using Redux to keep the shopping cart data consistent across different pages without constantly pinging the database.
* **Database Modeling**: Designing MongoDB schemas using Mongoose to link Users to their Order histories.

---

## 🛠 The Tech Stack
This project uses the standard MERN stack architecture:

* **Frontend**: React.js, Redux Toolkit (for global cart state), React Router (for navigation).
* **Backend**: Node.js, Express.js (for building the REST API).
* **Database**: MongoDB & Mongoose (NoSQL database for flexible product schemas).
* **Security & Auth**: Bcrypt (password hashing) and JWT (secure route protection).
* **Media**: Cloudinary API (handling image uploads for products).

---

## 🚀 Local Setup 

### 1️⃣ Environment Variables
Inside the `backend/` folder, configure your `.env` file:

```env
PORT=5001
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/astroblaze
JWT_SECRET=your_secure_key
RAZORPAY_KEY_ID=your_id
RAZORPAY_KEY_SECRET=your_secret