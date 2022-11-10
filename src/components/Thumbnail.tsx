import { useState } from "react"
import { Link } from "react-router-dom"

interface ThumbnailProps {
    image: string
    movieId: number
    clickable: boolean
    movieName: string
}

const Thumbnail = ({
    image,
    movieId,
    clickable,
    movieName,
}: ThumbnailProps) => {
    const [hid, setHid] = useState(true)

    return (
        <div
            className={` overflow-hidden rounded-lg  relative h-max border-4  hover:border-red-700  shadow-md shadow-white hover:shadow-lg hover:shadow-red-500 mb-10`}
            onMouseOver={() => setHid(false)}
            onMouseOut={() => setHid(true)}
        >
            {clickable ? (
                <Link to={`/${movieId}`}>
                    <img
                        src={image}
                        alt="move_thumb"
                        className="hover:scale-110  transition-all duration-300 rounded-md ani"
                    />
                </Link>
            ) : (
                <img
                    src={image}
                    alt="move_thumb"
                    className="hover:scale-110 transition-all duration-300 rounded-md ani"
                />
            )}

            <div
                className={`absolute  bg-black w-full  transition-all duration-300 ${
                    hid ? "bottom-[-400px]" : "bottom-0"
                } text-white text-center font-display p-4 text-2xl`}
            >
                {movieName}
            </div>
        </div>
    )
}

export default Thumbnail
