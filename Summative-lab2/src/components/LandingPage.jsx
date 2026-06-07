import { Link } from "react-router-dom"
export default function Landing(){
    return (
        <div className="text-center">
            <h1 className="display-4 fw-bold mb-3">Tech Hub</h1>
            <p className="lead text-secondary mb-4"> 
                The go-to portal for managing your electronics inventory</p>
            <Link to="/products" className="btn btn-dark btn-lg px-4">
            <button> Browse Products</button>
            </Link>
        </div>
    )
}