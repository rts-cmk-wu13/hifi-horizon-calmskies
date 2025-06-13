export default function Search() {
    return (
        <div className="search relative inset-0">
            <input type="search" className="bg-white text-black p-1 text-justify rounded-sm" placeholder="Search product... "/> 
            <img src="src\assets\search-icon.png" className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"/>
        </div>

    )
}