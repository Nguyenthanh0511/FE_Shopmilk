# FE_ShopMilk

## Overview
FE_ShopMilk is a frontend web application for managing a milk shop's operations. It provides a user-friendly interface for customers to browse products, make purchases, and for administrators to manage inventory, orders, and customer data. This frontend application works in conjunction with the [ShopMilk_API](https://github.com/Nguyenthanh0511/ShopMilk_API) backend.

## Features

### Customer Features
- Product browsing with search and filter capabilities
- Product details view with nutritional information
- Shopping cart functionality
- Checkout process
- Order history and tracking
- User account management
- Wishlist creation and management

### Admin Features
- Dashboard with sales analytics and statistics
- Product management (add, edit, delete)
- Inventory management
- Order management and processing
- Customer management
- Promotions and discount management
- User role management

## Tech Stack
- Vuejs - Frontend framework
- React Router - Navigation
- Axios - API requests
- Material-UI/Bootstrap - UI components
- Formik & Yup - Form handling and validation

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- ShopMilk_API backend running

### Installation
1. Clone the repository:
```
git clone https://github.com/Nguyenthanh0511/FE_Shopmilk.git
```

2. Navigate to the project directory:
```
cd FE_Shopmilk
```

3. Install dependencies:
```
npm install
```

4. Create a `.env` file in the root directory and configure your environment variables:
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_IMAGES_URL=http://localhost:5000/images
```

5. Start the development server:
```
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure
```
FE_Shopmilk/
├── public/                   # Static files
│   ├── index.html            # HTML template
│   ├── favicon.ico           # Favicon
│   └── assets/               # Public assets like images
│
├── src/                      # Source files
│   ├── assets/               # Images, fonts, etc.
│   ├── components/           # Reusable components
│   │   ├── common/           # Common UI components
│   │   ├── layout/           # Layout components (Header, Footer, etc.)
│   │   ├── product/          # Product-related components
│   │   ├── cart/             # Shopping cart components
│   │   ├── checkout/         # Checkout components
│   │   └── admin/            # Admin dashboard components
│   │
│   ├── pages/                # Application pages
│   │   ├── Home/             # Home page
│   │   ├── Shop/             # Shop page
│   │   ├── ProductDetail/    # Product detail page
│   │   ├── Cart/             # Cart page
│   │   ├── Checkout/         # Checkout page
│   │   ├── Account/          # User account pages
│   │   └── Admin/            # Admin dashboard pages
│   │
│   ├── context/              # React Context providers
│   ├── hooks/                # Custom React hooks
│   ├── redux/                # Redux state management
│   │   ├── actions/          # Action creators
│   │   ├── reducers/         # Reducers
│   │   ├── slices/           # Redux Toolkit slices
│   │   └── store.js          # Redux store configuration
│   │
│   ├── services/             # API services
│   │   ├── api.js            # API configuration
│   │   ├── authService.js    # Authentication service
│   │   ├── productService.js # Product service
│   │   ├── orderService.js   # Order service
│   │   └── userService.js    # User service
│   │
│   ├── utils/                # Utility functions
│   │   ├── formatters.js     # Data formatters
│   │   ├── validators.js     # Form validators
│   │   └── helpers.js        # Helper functions
│   │
│   ├── routes/               # Route definitions
│   ├── constants/            # Application constants
│   ├── App.js                # Main application component
│   ├── index.js              # Application entry point
│   └── setupTests.js         # Test configuration
│
├── .env                      # Environment variables
├── .gitignore                # Git ignore file
├── package.json              # Dependencies and scripts
├── README.md                 # Project documentation
└── tailwind.config.js        # Tailwind CSS configuration (if used)
```

## Features Implementation

### Authentication
- JWT-based authentication
- Protected routes for authenticated users
- Role-based access control (Admin, Customer)
- Session management

### Product Catalog
- Grid and list views
- Filtering by categories, price, etc.
- Sorting options
- Product search
- Pagination

### Shopping Cart
- Add/remove products
- Update quantities
- Save for later
- Persistent cart (local storage)

### Checkout
- Multi-step checkout process
- Address management
- Payment method selection
- Order summary

### Admin Dashboard
- Sales overview
- Recent orders
- Low stock alerts
- User management
- Performance metrics

## API Integration
This frontend application consumes the RESTful API provided by [ShopMilk_API](https://github.com/Nguyenthanh0511/ShopMilk_API). The main API endpoints used are:

- `/api/products` - Product management
- `/api/orders` - Order management
- `/api/customers` - Customer management
- `/api/auth` - Authentication and user management

## State Management
Redux is used for application-wide state management, with separate slices for:
- User authentication
- Product catalog
- Shopping cart
- Orders
- UI state (loading, errors, modals)

## Responsive Design
The application is fully responsive and optimized for:
- Desktop
- Tablet
- Mobile

## Building for Production
To build the application for production:
```
npm run build
```

This will create a `build` directory with optimized production files.

## Deployment
Instructions for deploying to:
- Netlify
- Vercel
- Firebase
- AWS Amplify

## Contribution
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Original project concept by Hieu k15
- All contributors to the FE_ShopMilk project

## Contact
- Developer: [Nguyen Trung Thanh]
- Email: [nguyentrungthanhdev@gmail.com]
- Frontend Repository: https://github.com/Nguyenthanh0511/FE_Shopmilk
- Backend Repository: https://github.com/Nguyenthanh0511/ShopMilk_API
