import { Link } from "react-router-dom"

const BreadCrumb = ({ title }: { title: string }) => {
    return (
        <div className="bg-gray-900/20 ">
            <div className="max-w-screen-lg mx-auto px-2 h-full">
                <Link to="/">
                    <span className="font-display md:text-2xl text-white font-black my-2 inline-block p-2">
                        Home
                    </span>
                </Link>
                <span className="font-display md:text-2xl text-white  my-2 inline-block p-2">
                    |
                </span>
                <span className="font-display  md:text-2xl text-white  my-2 inline-block p-2">
                    {title}
                </span>
            </div>
        </div>
    )
}

export default BreadCrumb
