import React from "react"

interface ProductionHouseProps {
    image: string
    name: string
}

const ProductionHouse = ({ image, name }: ProductionHouseProps) => {
    return (
        <div>
            <img
                src={image}
                alt={name}
                className="bg-white p-1 border-2 border-black"
            />
            <h1 className="md:text-lg text-md">{name}</h1>
        </div>
    )
}

export default ProductionHouse
