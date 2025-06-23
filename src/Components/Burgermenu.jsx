export default function Burgermenu({ onClick }) {
    return (
        <button className="flex flex-col justify-center items-center w-10 h-10"
            onClick={onClick}
            aria-label="Open menu"
        >
            {/* burger lines */}
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
        </button>
    );
}