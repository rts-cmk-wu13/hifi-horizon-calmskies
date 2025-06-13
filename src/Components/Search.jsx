import { FaSearch } from 'react-icons/fa';

export default function Search() {
    return (
        <div className="search bg-black relative inset-0">
            <input type="search" className="bg-white text-black p-1 text-justify rounded-sm" placeholder="Search product... " /> 
            <FaSearch  className="absolute z-0 right-2 text-black top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"/>
        </div>

    )
}