function Location({place}) {
    return (
        <div className='flex flex-1 flex-col items-start'>
            <h1 className='text-4xl font-bold'>{place.city}</h1>
            <h2 className="text-2xl">{place.country}</h2>
        </div>
    )
}

export default Location