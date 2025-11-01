import Temperature from "./temperature"
import TodayDetails from "./TodayDetails"

function WeatherToday() {
    return (
        <div className="h-[40vh] flex flex-row pr-[4%] pl-[4%]">
            <Temperature />
            <TodayDetails />
        </div>
    )
}

export default WeatherToday