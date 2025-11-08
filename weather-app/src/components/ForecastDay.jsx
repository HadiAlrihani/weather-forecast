function ForecastDay({day, high, low, icon}) {
    return(
        <div className="flex flex-col flex-1 h-full box-border justify-center">
            <p>{day}</p>
            <img src={icon} className='max-w-full max-h-full object-contain' />
            <p className="flex justify-center gap-4">
                <span>
                    {Math.round(low)}°
                </span> 
                <span>
                    {Math.round(high)}°
                </span>
            </p>
        </div>
    )
}

export default ForecastDay