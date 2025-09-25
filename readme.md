# Crypto Tracker Dashboard

A lightweight and real-time cryptocurrency tracking dashboard built entirely with vanilla JavaScript (ES6+), demonstrating core modern web development principles. This project fetches live data from the CoinGecko API and renders it in a clean, user-friendly interface with interactive search functionality.

## Key Features

- **Real-Time Data:** Fetches and displays the top 100 cryptocurrencies by market cap.
- **Interactive Search:** Instantly filters coins by name or symbol as the user types.
- **Efficient Data Handling:** Uses a `Map` data structure for O(1) time complexity lookups, ensuring high performance.
- **Modular Codebase:** Organized using OOP principles (Classes) to separate concerns (`ApiService`, `UIManager`).
- **Clean UI:** A simple, responsive grid layout to display crypto data cards.

## Core Concepts Demonstrated

This project was built to showcase a strong understanding of fundamental JavaScript concepts without relying on a framework.

- **Asynchronous JavaScript:**
  - `Promises` and the `Fetch API` for network requests.
  - `async/await` syntax for clean and readable asynchronous code.
  - `try...catch` blocks for robust error handling.
- **Object-Oriented Programming (OOP):**
  - `class` syntax for creating structured, reusable modules (`ApiService`, `UIManager`, `App`).
  - Encapsulation of logic and separation of concerns.
- **Data Structures:**
  - Practical application of the `Map` object for efficient key-value data storage and retrieval, contrasted with standard arrays.
- **DOM Manipulation:**
  - Dynamically creating and updating HTML elements from scratch using JavaScript.
- **Modern ES6+ Syntax:**
  - `Destructuring`, `Spread/Rest` operators, Arrow Functions, etc.

## Technologies Used

- **Vanilla JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **CoinGecko API**

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/KULLANICI-ADIN/crypto-dashboard.git](https://github.com/KULLANICI-ADIN/crypto-dashboard.git)