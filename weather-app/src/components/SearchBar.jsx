function SearchBar() {
    return (
        <div className='flex flex-1 justify-center'>
            <input
                type="text"
                placeholder="Enter city name..."
                className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border 
                border-white/20 text-white placeholder-white/70 focus:outline-none 
                focus:ring-2 focus:ring-white/30 shadow-md"
            />
            <button className="bg-slate-50 rounded-xl text-gray-500 p-3 ml-2">
                Search
            </button>
        </div>
    )
}

export default SearchBar