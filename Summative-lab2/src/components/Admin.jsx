import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function AddProduct({ onAdd }) {
    const [form, setForm] = useState({name: "", price: "", image: "", category: "", stock: ""})
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    function validate(){
        const newErrors = {}
        if(!form.name) newErrors.name = "Product name is required"
        if(!form.price || form.price <= 0) newErrors.price = "Valid price is required"
        if(!form.category) newErrors.category = "Category is required"
        return newErrors
    }

    function handleSubmit(e) {
        e.preventDefault()
        const validationErrors = validate()
        setErrors(validationErrors)
        if(Object.keys(validationErrors).length === 0) {
         onAdd({...form, price: parseFloat(form.price), stock: parseInt(form.stock)})
         navigate("/products")
        }
    }
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 fw-bold"> Admin Portal </h2>
            <div className="card shadow-lg border-0">
                <div className="card-body p-4">
            <form onSubmit={handleSubmit} className="row g-3">
                <input 
                type="text"
                placeholder="Product Name" value={form.name} 
                onChange={e => setForm({...form, name:e.target.value})} required />
                
                <input type="number"step="0.01" placeholder="Price $" value={form.price}
                onChange={e =>setForm({...form, price: e.target.value})} required />
                <input placeholder="Image URL" value={form.image} 
                onChange={e => setForm({...form, image:e.target.value})} />
                <select value={form.category} onChange={e => setForm({...form, category: e.target.value})}required>
                    <option value="">Select Category</option>
                    <option value="Audio"> Audio </option>
                    <option value="Accessories">Accessories</option>
                    <option value="Mobile">Mobile</option>
                </select>
                <input type="number" placeholder="Stock Quantity" value={form.stock}
                onChange={e => setForm({...form, stock:e.target.value})} required/>
                <div className="col-12 mt-4">
                <button type="submit"> + Add Product </button>
                </div>
            </form>
        </div>
        </div>
        </div>
    )
}