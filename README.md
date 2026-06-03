# BusyBuy-II 🛒

A modern e-commerce application built with React, Redux, and Firebase, featuring a warm Shopify-style design theme.

## ✨ Features

- **Product Browsing**: View products in an elegant grid layout with filtering options
- **Search Functionality**: Real-time search by product name
- **Advanced Filtering**: Filter products by price range and category
- **Shopping Cart**: Add, remove, and adjust product quantities in cart
- **User Authentication**: Sign up and sign in functionality
- **Order Management**: View order history and purchase products
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Warm Theme**: Cream/off-white backgrounds with dark charcoal text for a cozy shopping experience

## 🛠 Tech Stack

- **Frontend**: React.js
- **State Management**: Redux
- **Backend**: Firebase (Firestore for database, Authentication)
- **Styling**: CSS Modules with custom design system
- **Build Tool**: Create React App
- **Notifications**: React Toastify

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd BusyBuy-II
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Enable Authentication (Email/Password)
   - Create a Firestore database
   - Copy your Firebase configuration

4. **Configure environment variables**
   - Create a `.env` file in the root directory
   - Add your Firebase credentials:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

5. **Run the application**
   ```bash
   npm start
   ```

6. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Usage

### Browsing Products
- Use the search bar to find products by name
- Click the "Filters" button to open the filter dropdown
- Adjust the price slider to filter by price range
- Select categories to filter by product type

### Shopping Cart
- Click "Add To Cart" on any product
- Navigate to the cart page to view your items
- Adjust quantities using the +/- buttons
- Click "Remove From Cart" to remove items
- Click "Purchase" to complete your order

### Account Management
- Sign up for a new account
- Sign in to access your cart and orders
- View your order history in the "My Orders" section

## 📁 Project Structure

```
BusyBuy-II/
├── src/
│   ├── components/          # Reusable components
│   │   ├── FilterSidebar/   # Filter panel component
│   │   ├── Navbar/          # Navigation bar
│   │   ├── OrderTable/      # Order display table
│   │   ├── Product/         # Product-related components
│   │   │   ├── ProductCard/
│   │   │   ├── ProductContainer/
│   │   │   ├── ProductGrid/
│   │   │   └── ProductList/
│   │   └── UI/              # UI components (Loader, Icons)
│   ├── pages/               # Page components
│   │   ├── CartPage/
│   │   ├── HomePage/
│   │   ├── LoginPage/
│   │   ├── OrdersPage/
│   │   └── RegisterPage/
│   ├── redux/               # Redux store and reducers
│   │   ├── reducers/
│   │   └── store/
│   ├── utils/               # Utility functions
│   ├── App.js               # Main app component
│   └── index.js             # Entry point
├── public/                  # Static assets
├── .env                     # Environment variables
├── .gitignore              # Git ignore rules
└── package.json            # Project dependencies
```

## 🎨 Design System

BusyBuy-II uses a warm, cozy design system inspired by Shopify:

- **Background**: Cream/off-white (`#FAF9F6`)
- **Text**: Dark charcoal (`#1C1C1E`)
- **Borders**: Warm taupe (`#D6CFC4`)
- **Accents**: Warm accent colors for interactive elements
- **Typography**: Inter font family for clean readability

## 🔧 Configuration

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Authentication** → **Sign-in method** → **Email/Password**
4. Create **Firestore Database** in test mode or production mode
5. Go to **Project Settings** → **General** → **Your apps**
6. Register a web app and copy the configuration
7. Paste the configuration into your `.env` file

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🐛 Known Issues

If you encounter any issues, please report them in the GitHub Issues section.

## 📧 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

Built with ❤️ using React, Redux, and Firebase
