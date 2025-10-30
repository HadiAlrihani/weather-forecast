import Temperature from "./temperature"
import TodayDetails from "./TodayDetails"

function WeatherToday() {
    return (
        <div className="h-[40vh] flex flex-row">
            <Temperature />
            <TodayDetails />
        </div>
    )
}

export default WeatherToday