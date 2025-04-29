# QR Code Generator - Backend

This is the backend service for the QR Code Generator project.  
It handles user registration, authentication, QR code creation (both public and private), and user profile management.

---

## 🚀 Tech Stack

- Node.js
- Express
- MySQL
- Sequelize (ORM)
- JWT (Authentication)
- Cookie-based authentication (HttpOnly Cookies)
- bcryptjs (Password hashing)
- express-validator (Data validation)
- dotenv (Environment variable management)
- cors (Cross-Origin Resource Sharing)

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone git@github-dzhamal:djafarov05/qr-code-generator-backend.git
   ```

2. Navigate into the project directory:
   ```bash
   cd qr-code-generator-backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory with the following content:

   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=qr_code_generator
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=7d
   ```

5. Run the server in development mode:
   ```bash
   npm run dev
   ```

6. Or start the server in production mode:
   ```bash
   npm start
   ```

---

## 📚 API Endpoints

| Method | Endpoint               | Description |
|:------:|:------------------------|:------------|
| POST   | `/api/auth/register`     | Register a new user |
| POST   | `/api/auth/login`        | Authenticate user and issue JWT |
| GET    | `/api/qrcodes/public`    | Generate a public QR code (no saving) |
| POST   | `/api/qrcodes/private`   | Create a private QR code (for logged-in users) |
| PUT    | `/api/qrcodes/:id`       | Update an existing private QR code |
| DELETE | `/api/qrcodes/:id`       | Delete a private QR code |
| GET    | `/api/users/profile`     | Get user profile information |
| PUT    | `/api/users/profile`     | Update user profile information |

---

## 🔒 Security

- Authentication using JWT stored in HttpOnly Cookies.
- Passwords are securely hashed using bcryptjs before storing.
- All user input is validated and sanitized.
- ORM (Sequelize) automatically protects against SQL injections.

---

## 👤 Author

- **Dzhamal Dzhafarov** — [GitHub](https://github.com/djafarov05)

---
