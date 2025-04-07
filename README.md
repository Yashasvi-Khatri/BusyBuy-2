# BusyBuy

BusyBuy is a modern e-commerce web application built with React that provides a seamless shopping experience. Users can browse products, filter by categories, add items to cart, and complete purchases.

![BusyBuy Screenshot](/screenshots/homepage.png)

## Features

- **User Authentication**: Secure sign-up and login functionality
- **Product Browsing**: View all products with details
- **Product Filtering**: Filter products by categories and price range
- **Search Functionality**: Find products by name
- **Shopping Cart**: Add, remove, and update products in your cart
- **Wishlist**: Save products for later
- **Order Management**: View order history and details
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Live Demo

[BusyBuy Live Demo](https://busybuy-2.netlify.app/)

## Technologies Used

- **Frontend**: React.js, React Router, Context API
- **State Management**: React Context API with useReducer
- **Styling**: CSS Modules
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **Hosting**: Netlify

## Installation and Setup

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- Firebase account

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/Yashasvi-Khatri/BusyBuy-2.git
   ```

2. Navigate to the project directory:
   ```bash
   cd BusyBuy-2
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your Firebase configuration:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

### User Authentication
- Sign up with email and password
- Login with your credentials
- Reset your password if forgotten

### Shopping
- Browse products on the homepage
- Filter products by category or price
- Search for specific products
- View detailed product information

### Cart Management
- Add products to your cart
- Update product quantities
- Remove products from cart
- Proceed to checkout

### Orders
- View your order history
- Check status of current orders

## Project Structure

```
src/
├── components/       # React components
├── contexts/         # Context providers
├── hooks/            # Custom hooks
├── pages/            # Page components
├── services/         # API services
├── utils/            # Utility functions
├── assets/           # Images and static files
├── App.js            # Main component
└── index.js          # Entry point
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Yashasvi Khatri - [LinkedIn](https://www.linkedin.com/in/yashasvi-khatri/)

Project Link: [https://github.com/Yashasvi-Khatri/BusyBuy-2](https://github.com/Yashasvi-Khatri/BusyBuy-2)

## Acknowledgements

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Netlify](https://www.netlify.com/)
