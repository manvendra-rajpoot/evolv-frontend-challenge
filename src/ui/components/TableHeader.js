import React from 'react';
import '../styles/TableHeader.css';

function TableHeader() {
    return (
            <div className='tableHeader'>
                <div className='dishName'>
                <span style={{ width: "100%", textAlign: "center"}}>Dish Name</span>
                </div>
                <div className='nutrientContent'>
                    <span>Protein (g)</span>
                </div>
                <div className='nutrientContent'>
                    <span>Fat (g)</span>
                </div>
                <div className='nutrientContent'>
                    <span>Carbs (g)</span>
                </div>
                <div className='nutrientContent'>
                    <span>Calories</span>
                </div>
                <div className='action'>
                    <span>Action</span>
                </div>
            </div>
    )
}

export default TableHeader
