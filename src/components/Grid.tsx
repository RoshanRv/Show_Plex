import React, { ReactNode } from "react"

interface GridProps {
    header: string
    children: ReactNode
}

const Grid = ({ header, children }: GridProps) => {
    return (
        <div className="bg-black">
            <div className="max-w-screen-lg m-auto px-2">
                <h1 className="font-display text-4xl font-black pt-10 pb-8 text-white">
                    {header}
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Grid
