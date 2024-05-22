import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <header>
    <div className="container py-3">
        <div className="row">
       <div className="col-lg-3">
       <div className="logo">
                <h2>ColoShop</h2>
            </div>
       </div>
       <div className="col-lg-9">
        <ul className='d-flex list-unstyled gap-4 justify-content-end'>
            <li>
                <Link className='text-black ' to={"/"}>Home</Link>
            </li>
            <li>
                <Link  className='text-black ' to={"/add-page"}>Add</Link>
            </li>
            <li>
                <Link  className='text-black ' to={"/basket"}>Basket</Link>
            </li>
            <li>
                <Link  className='text-black ' to={"/wishlist"}>Wishlist</Link>
            </li>
        </ul>
       </div>
        </div>
    </div>
   </header>
  )
}

export default Header