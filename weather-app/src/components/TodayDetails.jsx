function TodayDetails({feelsLike, wind, icon}) {
    return (
        <>
            <div className="flex flex-[2]">
                <div className='flex flex-1 justify-end'>
                    <img src={icon} className='max-w-full max-h-full object-contain pb-2'/>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <p>Feels Like: {Math.round(feelsLike)}°</p>
                    <p>Wind: {wind} km/h</p>
                </div>
            </div>
        </>
    )
}

export default TodayDetails