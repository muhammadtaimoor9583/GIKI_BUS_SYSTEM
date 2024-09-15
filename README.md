# GIKI BUS TICKET RESERVATION SYSTEM
This repository contains our Database Management System (DBMS) Project developed as a digital solution to address the challenges faced by GIKI students regarding bus ticket reservations. The current manual system at GIKI creates numerous hurdles for students seeking to book tickets. Our system aims to simplify the process for both students and administrators by providing a user-friendly interface for booking tickets and an admin panel for managing and maintaining ticket records.

## Features
- User-friendly interface for students to book tickets
- Admin panel for administrators to manage ticket records
- Digital solution to replace the manual bus reservation system
- Streamlined process for booking tickets, reducing hurdles for students
- Efficient record management for administrators

## Technologies Used
- **UI/UX**: Figma, DhiWise<br>
- **Front-End**: React.js, Tailwind CSS<br>
- **Back-End**: Node.js,Express.js<br>
- **Database**: MongoDB<br>
 
## Repository Structure:
```
frontend/
│
├── Hooks/
│   └── useUpdateProfile.jsx
│
├── components/
│   ├── EditProfileModal.jsx
│   ├── Header.jsx
│   ├── LoadingSpinner.jsx
│   ├── Ticket.jsx
│   └── admin/
│       ├── AddBus.jsx
│       └── AdminHeader.jsx
│
├── pages/
│   ├── BookingPage.jsx
│   ├── ConfirmPage.jsx
│   ├── LandingPage.jsx
│   ├── LoginPage.jsx
│   ├── PrintPage.jsx
│   ├── ProfilePage.jsx
│   ├── ResetPasswordCompletePage.jsx
│   ├── ResetPasswordForm.jsx
│   ├── ResetPasswordPage.jsx
│   ├── ResetPasswordSend.jsx
│   ├── SearchPage.jsx
│   ├── SignupPage.jsx
│   ├── TicketDetails.jsx
│   ├── TicketsPage.jsx
│   ├── VerificationPage.jsx
│   └── admin/
│       ├── AdminLandingPage.jsx
│       └── BusPage.jsx
│
├── public/
│   └── assets/
│       └── images/
│
├── src/
│   ├── App.jsx
│   └── main.jsx
│
├── utils/
│   └── GetDate.js
│
└── package.json

## Backend
backend/
│
├── controllers/
│   ├── bus.controllers.js
│   ├── ticket.controllers.js
│   └── user.controllers.js
│
├── db/
│   └── connectDB.js
│
├── middleware/
│   └── protectRoute.js
│
├── models/
│   ├── bus.model.js
│   ├── ticket.model.js
│   ├── token.model.js
│   └── user.model.js
│
├── routes/
│   ├── bus.routes.js
│   ├── ticket.routes.js
│   └── user.routes.js
│
├── utils/
│   ├── handleCookie.js
│   └── verification.js
│
├── package.json
└── server.js

```

## Demo

https://github.com/JunaidSalim/GIKI_Bus_Ticket_Reservation_System/assets/115392538/4d1d369c-3fda-4fe3-a208-56a34ca6aa60


## Installation and Setup

  ### Clone the repository:
  ```bash
  git clone https://github.com/JunaidSalim/GIKI_Bus_Ticket_Reservation_System.git
  ```
  
  ### Install the required packages:
  ```bash
  pip install 
  ```
  ### Configure `settings.py`
    Update the `settings.py` file with your database credentials and other necessary configurations. Ensure that the `DATABASES` setting matches your database setup and adjust any other settings such as `EMAIL_HOST`, `DEBUG`, and `STATIC_URL` as needed.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/giki-bus-reservation-system.git
   ```

2. **Navigate to the `frontend` and `backend` directories and install dependencies:**

   - **Frontend:**
     ```bash
     cd frontend
     npm install
     ```

   - **Backend:**
     ```bash
     cd backend
     npm install
     ```

3. **Give values to environment variables in .env in backend:**

4. **Start both the frontend and backend servers:**

   - **Frontend:**
     ```bash
     npm run dev
     ```

   - **Backend:**
     ```bash
     npm start
     ```

5. **Access the app:**  
   Open `http://localhost:3000` in your browser to interact with the app.

6. **Optional: Set up database:**  
   Ensure you have a MongoDB database running locally or via MongoDB Atlas. Update your `.env` file with the correct connection string for `MONGO_URI`.

---

You can replace `"your-username"` and other placeholders with actual values as needed. Let me know if you'd like any adjustments!

## Contribution Guidelines

We welcome contributions to the GIKI Bus Ticket Reservation System project! To ensure a smooth collaboration process, please follow these guidelines when contributing:

1. **Fork the Repository**: Start by forking the repository to your GitHub account.
2. **Create a Branch**: Create a new branch for your feature or bug fix.
3. **Make Your Changes**: Implement your changes in your branch. Ensure that your code follows the project's coding standards.
4. **Commit Your Changes**: Write clear and concise commit messages.
5. **Push to Your Branch**: Push your changes to your branch on GitHub.
6. **Create a Pull Request**: Submit a pull request to the `main` branch of the original repository. Include a detailed description of your changes and reference any related issues.

We appreciate your efforts to improve the project and look forward to your contributions!

## Contributors

- [Junaid Saleem](https://github.com/JunaidSalim) - Back-end in django
- [Hamza Faraz](https://github.com/hamzafaraz1821) - Front-End
- [Muneeb Bin Nasir](https://github.com/JMSNM) - UI/UX
- [Muhammad Taimoor](https://github.com/taimoorgiki) - Database,Translate back-end to Node.js,Express.js,Translate frontend to react.js


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.




