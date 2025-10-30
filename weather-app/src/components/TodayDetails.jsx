import sun from '../assets/sun.png'

function TodayDetails() {
    return (
        <>
            <div className="flex flex-[2] content-center">
                <div className='flex flex-1'>
                    <img src={sun} alt='Sun' className='max-w-full max-h-full object-contain pb-2'/>
                </div>
                <div className='flex flex-1 flex-col justify-end items-start pb-5'>
                    <p>Feels Like: </p>
                    <p>Wind: km/h</p>
                </div>
            </div>
        </>
    )
}

export default TodayDetails