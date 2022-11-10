interface LoadMoreProps {
    text: string
    color: string
    callback?: () => void
}

const LoadMore = ({ text, callback, color }: LoadMoreProps) => {
    return (
        <div className="bg-black py-10">
            <button
                className={`md:px-8 px-4 font-display md:py-3 py-2 rounded-lg ${color} mx-auto my-10 text-xl text-white font-black border-2 border-white hover:border-red-500 hover:scale-110 transition-all  block shadow-md shadow-red-500`}
                onClick={callback}
            >
                {text}
            </button>
        </div>
    )
}

export default LoadMore
