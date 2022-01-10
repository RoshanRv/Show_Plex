import React from 'react'

const ProductionHouse = ({image,name}) => {
    return (
        <div className>
            <img src={image} alt={name} className='bg-white p-1 border-2 border-black' />
            <h1 className='md:text-lg text-md'>{name}</h1>
        </div>
    )
}

export default ProductionHouse
