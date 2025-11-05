import sun from '../assets/sun.png'

function TodayDetails({feelsLike, wind}) {
    return (
        <>
            <div className="flex flex-[2]">
                <div className='flex flex-1 justify-end'>
                    <img src={sun} alt='Sun' className='max-w-full max-h-full object-contain pb-2'/>
                </div>
                <div className='flex flex-col items-start justify-end'>
                    <p>Feels Like: {feelsLike}</p>
                    <p>Wind: {wind} km/h</p>
                </div>
            </div>
        </>
    )
}

export default TodayDetails