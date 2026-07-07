👨‍💻 About the Developer
Hi, I’m Rudra Pratap Singh, a Computer Science Engineering student at the National Institute of Technology, Raipur. I am passionate about building scalable digital systems, competitive programming, and deep-tech architecture. AstroBlaze is a culmination of my interest in full-stack development and complex network configuration.

🛠 Tech Stack Details
Frontend: React.js, Redux Toolkit (state management), AuthContext API (JWT sessions), custom CSS.

Backend: Node.js, Express.js architecture with middleware-based protection.

Database: MongoDB (via Mongoose schemas).

Infrastructure: Cloudinary (Image handling), Razorpay (Payments), JWT-based authentication.

🚀 Quick Start / Local Development Guide
1️⃣ Environment Setup
Inside the backend/ folder, configure your .env file with the following variables:

Code snippet
PORT=5001
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/astroblaze
JWT_SECRET=your_secure_key
RAZORPAY_KEY_ID=your_id
RAZORPAY_KEY_SECRET=your_secret
2️⃣ Populate the Database (Seeding)
The platform is seeded with a curated catalog of high-end astronomy equipment:

Bash
npm run seed
3️⃣ Start the Application
Run this single command at the root to bind the Backend and Frontend concurrently:

Bash
npm run dev
☁️ Deployment (Render Optimized)
The codebase includes a seamless fallback mechanic leveraging process.env.NODE_ENV === "production". When deployed to Render, the Express backend serves the React build directly.

Repository: Connect your GitHub repo to a Web Service on Render.

Build Command: npm run render-build

Start Command: npm start

Environment Variables: Ensure NODE_ENV=production is mapped in the Render dashboard.

📄 API Testing
This repository includes AstroBlaze_Postman_Collection.json. Import this file into Postman to test protected admin/user/order payloads using the {{token}} variable.

2. The "Renaming Checklist"
To ensure the app fully transitions to AstroBlaze, perform a "Find in Files" (Cmd+Shift+F in VS Code) for "ShopNest" and "AstroGaze" and replace them with "AstroBlaze" in the following spots:

frontend/public/index.html: Update the <title> tag.

frontend/src/components/Navbar.jsx: Update the logo image filename (/astroblaze-logo.png) and the text inside the link.

frontend/src/components/Footer.jsx: Update the copyright text and the brand name.

package.json: Check the project name field in both the root and sub-folders.

backend/server.js: If you have any hardcoded response strings or file paths referencing the old name, update those.

File Names: Don't forget to rename your logo file in frontend/public/ to astroblaze-logo.png.