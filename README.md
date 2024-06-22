# Finance Tracker

Finance Tracker is a minimalist and effective personal finance tracking application built with Node.js, Express, and React. It allows users to manage their income, expenses, and savings with features like transaction categorization, budget setting, and simple visualizations. The application emphasizes secure coding practices and data encryption to ensure user privacy and data security.

## Features

- Track income and expenses
- Categorize transactions
- Set and manage budgets
- Simple visualizations for financial data
- User authentication and authorization
- Secure data handling and encryption

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT
- **Styling:** CSS

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/finance-tracker.git
   cd finance-tracker
   ```

2. **Backend Setup:**

   Navigate to the root directory and install the backend dependencies:

   ```bash
   npm install
   ```

   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

   Start the backend server:

   ```bash
   nodemon server.js
   ```

3. **Frontend Setup:**

   Navigate to the `client` directory and install the frontend dependencies:

   ```bash
   cd client
   npm install
   ```

   Start the React development server:

   ```bash
   npm start
   ```

## Usage

1. **Register a new user:**
    - Open the application in your browser.
    - Navigate to the registration page and create a new account.

2. **Log in:**
    - Use your registered credentials to log in.

3. **Add Transactions:**
    - Add income and expense transactions with categories and amounts.
    - View your transaction history.

4. **Set Budgets:**
    - Set and manage budgets for different categories.

5. **Visualize Data:**
    - View simple visualizations of your financial data to track your spending and savings.

## API Endpoints

### Authentication

- **Register a new user:** `POST /api/auth/register`
- **Login:** `POST /api/auth/login`

### Transactions

- **Add a new transaction:** `POST /api/transactions`
- **Get all transactions for a user:** `GET /api/transactions`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or support, please contact [perpignanj13@gmail.com](mailto:your-email@example.com).

---

Happy tracking!
