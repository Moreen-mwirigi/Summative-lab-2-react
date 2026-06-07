# React Product Listing App
A responsive React Application that fetches products from jsn-server API an allows users to search, fiter by category and update products prices in real-time.

## Features
-**Fetch Products**:  Loads products from `http://localhost:3001/products` using json-server
-**Live Search**: Filter Products by name as you type.
**Category Filter**: Dropdown to filter by All, Audio, Mobile, Accessories.
**Add Product**: Admin portal allows you to add products.
**Responsive Design**: Built ith Bootstrap.
**Error Handling**: Bulletproof guards against null/undefined data.
**Image Fallback**:Shows placeholder if product image fails to load.

## Tech Stack
- React + Vite
- Bootstrap
- jSON-server

## Setup & Installation
git clone <your-repo-link>
cd Summative-lab2
npm install
npm install  json-server 
npm install bootstrap

## Project Structure
Summative-lab2/
|- db.json
|- index.html
|- package.json
|- src/
    |-components/
        |- App.jsx
        |- Admin.jsx
        |- LandingPage.jsx
        |- ProductCard.jsx
        |- Products.jsx
    |-index.scss
    |-main.jsx
|-README.md

## Run the Application
  'npm run dev'
  'json-server --watch db.json --port 3001' concurrently
  open http://localhost:5173 in browser
  
