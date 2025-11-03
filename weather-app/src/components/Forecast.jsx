import ForecastDay from "./ForecastDay"

function Forecast() {
    return (
        <>
            <div className="flex flex-row flex-1 box-border p-[4%] 
  rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
                <ForecastDay />
                <ForecastDay />
                <ForecastDay />
                <ForecastDay />
                <ForecastDay />
            </div>
        </>
    )
}

export default Forecast