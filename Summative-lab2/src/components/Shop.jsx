import React from "react";
import { useState } from "react";

function Shop(){
    const [products, setProducts] = useState([
        {
            "id":1,
            "name": "Headphones",
            "price": 300.00,
            "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?",
            "category":"Audio",
            "stock":"20"
        },
        {
            "id":2,
            "name": "iPhone 15 Pro",
            "price": 999.00,
            "image": "https://unsplash.com/photos/an-iphone-is-sitting-on-top-of-a-box-LunVPm34ly4",
            "category":"Mobile",
            "stock":"7"
        },
        {
            "id":3,
            "name": "Logitech MX Master 3",
            "price": 99.99,
            "image": "https://unsplash.com/photos/a-computer-mouse-sitting-on-top-of-an-orange-surface-JVUqiEc2Svc",
            "category":"Accessories",
            "stock":"22"
        }
    ])
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")
    const [editingId, setEditingId] = useState(null)
    const [newPrice, setNewPrice] = useState("")
}