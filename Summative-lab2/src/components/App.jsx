import React, { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink, data } from 'react-router-dom'
import Landing from './LandingPage'
import AddProduct from './Admin'
import Products from './Products'
import ProductCard from './ProductCard'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/products")
    .then(res => res.json())
    .then(data => {
      console.log("Data from API:", data)
      setProducts(data)
    })
    .catch(err => console.log("Fetch error:", err))
  }, [])

  function handleAddProduct(newProduct) {
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({...newProduct, stock: parseInt(newProduct.stock)})
    })
    .then(res => res.json())
    .then(product => setProducts([...products, product]))
  }

  function handleUpdatedPrice(id, newPrice) {
    fetch(`http://localhost:3001/products ${String(id).trim()}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({price: Number(newPrice)})
    })
    .then(res => res.json())
    .then(updated => {setProducts(products.map(p => p.id === updated.id ? updated : p))})
  }

  return (
    <BrowserRouter>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-4'>
      <h2 className='navbar-brand mb-0'> TECH HUB</h2>
      <div className='navbar-nav ms-auto'>
        <NavLink to="/"
        className={({isActive}) => "nav-link" + (isActive ? "active" : "")}
        > Home </NavLink>
        <NavLink to="/products"
        className={({isActive}) => "nav-link" + (isActive ? "active" : "")}
        > Shop </NavLink>
        <NavLink to="/add"
        className={({isActive}) => "nav-link" + (isActive ? "active" : "")}
        > Admin portal </NavLink>
      </div>
    </nav>
    <div className="container mt-4">
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/add" element={<AddProduct onAdd={handleAddProduct} />} />
      <Route path="/products" element={<Products products={products} onUpdatePrice={handleUpdatedPrice}/>} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
