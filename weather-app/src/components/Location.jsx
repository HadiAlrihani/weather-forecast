function Location({place}) {
    return (
        <div className='flex flex-1 flex-col items-start'>
            <h1 className='text-4xl font-bold'>{place.city}</h1>
            <h2>{place.country}</h2>
        </div>
    )
}

export default Location