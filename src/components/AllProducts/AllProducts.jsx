import React from 'react'
import "./AllProducts.css"
import Card from './Card'
const AllProducts = () => {
  return (
    <div className="all-products-container">
        <h1>All Products</h1>
        <div className="css-menus">
            <div className="css-menu1">
                <label for="cars">Filter:</label>
                <select name="cars" id="cars">
                    <option value="volvo">All Products</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div className="css-menu2">
                <label for="cars">Sort:</label>
                <select name="cars" id="cars">
                    <option value="volvo">Best Selling</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div>
        <div className="all-products-card">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            
        </div>
        <div className="view-all-btn">
            <button>View All</button>
        </div>
    </div>
  )
}

export default AllProducts