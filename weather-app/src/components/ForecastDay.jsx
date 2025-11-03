import sun from '../assets/sun.png'

function ForecastDay() {
    return(
        <div className="flex flex-col flex-1 h-full box-border justify-center">
            <p>Day</p>
            <img src={sun} alt='Sun' className='max-w-full max-h-full object-contain' />
            <p>low High</p>
        </div>
    )
}

export default ForecastDay