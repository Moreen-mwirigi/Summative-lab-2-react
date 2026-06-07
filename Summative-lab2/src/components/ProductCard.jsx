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
            <img src={product.image} className="card-img-top" alt ={product.name}/>
            <h3>{product.name}</h3>
            <p>Stock: {product.stock} units </p>
                {editing ? (
                    <>
                    <input type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value)}/>
                    <button onClick={savePrice}>Save</button>
                    </>
                ) : (
                    <>
                    <p className="price">Price: ${product.price}</p>
                    <button onClick={() => setEditing(true)}>Edit Price</button>
                    </>
                )
                }
        </div>
    )
}