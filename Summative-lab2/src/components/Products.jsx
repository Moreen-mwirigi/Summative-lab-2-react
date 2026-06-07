import React from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";

export default function Products ({products =[], onUpdatePrice}){
    console.log("Products:", products)
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")

    const categories = ["All", ...new Set(products.map(p => p.category))]

    const filtered = products.filter(p => {
        const name = p && typeof p.name === 'string' ? p.name.toLowerCase() :''
        const matchesSearch = name.includes(search.toLowerCase())
        const matchesCategory = category ==="All" || p?.category === category
        return matchesSearch &&matchesCategory
    }
        //p.name.toLowercase().includes(search.toLowerCase()) &&
        //(category === "All" || p.category === category)
    )

    return(
        <div className="container py-5">
            <h2 className="mb-4 text-center"> Shop </h2>
            <div className="row mb-4 g-3">
                <div className="col-md-8">
                <input className="search" placeholder="Search products ..." value={search}
                onChange={e => setSearch(e.target.value)}/>
                </div>
                <div className="col-md-4">
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    {categories.map(cat => <option key={cat}> {cat} </option>)}
                </select>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {filtered.map(products => 
                <ProductCard key={products.id} product={products} onUpdatePrice={onUpdatePrice}/>)}        
        </div>
        </div>
    )
}


