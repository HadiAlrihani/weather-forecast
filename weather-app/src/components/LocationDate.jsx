function LocationDate({city, date}) {
    return (
        <div className='flex flex-1 flex-col items-start'>
            <h1 className='text-4xl font-mono font-bold'>{city}</h1>
            <h2>{date}</h2>
        </div>
    )
}

export default LocationDate