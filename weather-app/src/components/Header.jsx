import LocationDate from "./locationDate"
import SearchBar from "./searchBar"

function Header() {
    return (
        <div className='h-[20vh] pl-[4%] pr-[4%] pt-[4%] flex flex-row'>
            <LocationDate />
            <SearchBar />
        </div>
    )
}

export default Header