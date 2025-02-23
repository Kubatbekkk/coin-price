# Coin Price Tracker - [Deploy](https://youhodler-coin-tracker.netlify.app/)

This project is a simple Coin Price Tracker that allows users to monitor the prices of various cryptocurrencies.

## Technical Requirements Checklist

- [x] **Framework & Language**: Built using **React** with functional components and hooks, entirely typed with **TypeScript**.
- [x] **Routing**:
  - [x] `/` - **Index Page**: Displays a list of coins with basic information (name, ticker, rate).
  - [x] `/${ticker}` - **Coin Detail Page**: Displays detailed information about a single coin (rate, ask price, bid price, 24-hour price movement).
- [x] **Deployment & GitHub**:
  - [x] Deployed to a hosting platform (e.g., Vercel, Netlify, GitHub Pages).
  - [x] Provided links to the deployed application and GitHub repository.
- [x] **Design and UX**: Created a functional and visually appealing application.

## Bonus Points Checklist

- [ ] Submit both a **web application** and a **native app** (React Native with Expo).
- [ ] Use **Expo EAS Hosting** to deploy the web application.
- [x] Implement **React Suspense** for data fetching and asynchronous operations.
- [x] Incorporate **error handling** to gracefully handle issues like API failures or invalid data.
- [x] Use **MobX** for state management to demonstrate efficient and scalable state handling.
- [x] Use **Zod** for runtime validation of the API response, ensuring both data integrity and type safety.
- [x] Ensure a **consistent and user-friendly design**, with responsiveness and usability in mind.
- [x] Add **additional functionality**, such as sorting, filtering, or grouping, to enhance usability.

## Features

- Get actual price updates (rate, ask, bid, 24h difference)
- Support for multiple cryptocurrencies
- User-friendly interface

## Installation

1. Clone the repository:

```bash
git clone git@github.com:Kubatbekkk/coin-price.git
```

2. Navigate to the project directory:

```bash
cd coin-price
```

3. Install the dependencies:

```bash
npm install
```

## Usage

1. Create a `.env` file in the root directory and add your environment variables:

```plaintext
VITE_API_URL=your_api_key_here for example: https://app.youhodler.com/api/v3/rates/extended
```

2. Start the application:

```bash
npm run dev
```

3. Open your browser and go to `http://localhost:5173/` to view the Coin Price Tracker.
