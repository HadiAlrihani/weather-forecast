import LocationDate from "./locationDate"
import SearchBar from "./searchBar"

function Header() {
    return (
        <div className='h-[20vh] p-5 flex flex-row'>
            <LocationDate />
            <SearchBar />
        </div>
    )
}

export default Header