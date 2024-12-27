# Online Contest Management System - Frontend

This project is the **frontend** of the Online Contest Management System, built with React. It provides a user-friendly interface for managing and participating in online contests, allowing organizations and individuals to create, manage, and promote contests seamlessly.

## Table of Contents

- [Product Overview](#product-overview)
- [Key Features](#key-features)
  - [For Contest Organizers](#for-contest-organizers)
  - [For Users](#for-users)
  - [For System Administrators](#for-system-administrators)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the Frontend](#running-the-frontend)
- [API Documentation](#api-documentation)
- [License](#license)

## Product Overview

The **Frontend** of the Online Contest Management System offers a comprehensive interface for users to interact with the backend API. It manages user authentication, contest creation, registration, payment processing, and provides dashboards for organizers and administrators to monitor contest activities.

## Key Features

### For Contest Organizers

- **Create New Contests:** Define contest details such as name, description, dates, rules, skill requirements, and attachments (guides, images, videos). Set participation fees and configure online payment options.
- **Manage Contests:** Access a registration dashboard to track participants, payment statuses, and personal details. Approve or reject contestant applications and send automated notifications.
- **Analytics Tools:** Visualize registration statistics, analyze participant demographics (age, gender, location), and monitor revenue from paid contests.

### For Users

- **Account Registration:** Register via email or social login (e.g., Facebook, Google).
- **Browse and Register for Contests:** Search and filter contests by criteria (category, age, etc.). View contest details and register, making online payments if required.
- **Profile Management:** Track registered contests, edit profiles, and update personal details.

### For System Administrators

- **Contest Approval:** Review and approve new contests submitted by organizers.
- **Registration Statistics:** Monitor the number of contests and registered users.
- **Revenue Tracking:** Oversee overall system revenue and financial reports.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **Material-UI (MUI)**: React components for faster and easier web development.
- **React Router**: Declarative routing for React applications.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Toastify**: Notification library for React.
- **Formik & Yup**: For form management and validation.
- **Redux**: State management library.
- **React Query**: Data fetching and caching.
- **ESLint & Prettier**: Code linting and formatting tools.
- **GitHub Actions**: CI/CD pipeline for automated testing and deployment.

## Project Structure

```
frontend/
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc
├── .prettierrc.json
├── eslint.config.js
├── eslint.config.mjs
├── package.json
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── assets/
│   ├── components/
│   │   ├── admin-contests/
│   │   ├── admin-dashboard/
│   │   ├── contest/
│   │   ├── contest-creating/
│   │   ├── custom-components/
│   │   ├── home/
│   │   └── ...
│   ├── config/
│   │   └── theme/
│   ├── constant/
│   ├── features/
│   ├── hooks/
│   ├── index.css
│   ├── index.js
│   ├── layouts/
│   ├── pages/
│   ├── reportWebVitals.js
│   ├── routes/
│   ├── services/
│   ├── setupTests.js
│   ├── stores/
│   └── utils/
```

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/sloweyyy/OnlineContestManagementSystem-FE.git
    cd OnlineContestManagementSystem-FE
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Configure environment variables:**
    - Create a `.env` file in the root of the project.
    - Add the following environment variables to the `.env` file:

    ```bash
    REACT_APP_API_BASE_URL=http://localhost:5210/api
    REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
    REACT_APP_CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
    REACT_APP_CLOUDINARY_UPLOAD_PRESET=your-upload-preset
    ```

## Usage

### Running the Frontend

1. **Start the development server:**

    ```bash
    npm start
    # or
    yarn start
    ```

2. **Open the app in your browser:** Navigate to <http://localhost:3000>.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
