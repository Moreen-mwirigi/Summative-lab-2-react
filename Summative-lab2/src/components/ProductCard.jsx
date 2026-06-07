import React from "react";
import {useState} from "react"
//import Products from "./Products";

export default function ProductCard({product, onUpdatePrice}){
    const [editing, setEditing] = useState(false)
    const [price, setPrice] = useState(product.price)

    function savePrice() {
        onUpdatePrice(product.id, parseFloat(price))
        setEditing(false)
    }
    return (
        <div className="card h-100 shadow-sm">
            <span className="category-badge">{product.category}</span>
            <img src={product.image} className="card-img-top" alt ={product.name}
                style={{height: '220px', objectFit:'cover'}}
            />"
            <h3 className="card-title fw-bold">{product.name}</h3>
            <p className="text-muted mb-2">Stock: {product.stock} units </p>
                {editing ? (
                    <>
                    <input type="number" className="form-control" step="0.01" value={price ?? product.price} 
                    onChange={e => setPrice(e.target.value)}/>
                    <button className="btn btn-success btn-sm" onClick={savePrice}>Save</button>
                    </>
                ) : (
                    <>
                    <p className="form-control">Price: ${product.price}</p>
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => setEditing(true)}>Edit Price</button>
                    </>
                )
                }
        </div>
        
    )
}