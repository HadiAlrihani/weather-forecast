import sun from '../assets/sun.png'

function ForecastDay({day, high, low}) {
    return(
        <div className="flex flex-col flex-1 h-full box-border justify-center">
            <p>{day}</p>
            <img src={sun} alt='Sun' className='max-w-full max-h-full object-contain' />
            <p>{Math.round(low)}° {Math.round(high)}°</p>
        </div>
    )
}

export default ForecastDay