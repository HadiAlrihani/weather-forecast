function Temperature() {
    return (
        <>
            <div className="flex flex-none items-end text-8xl pr-[1%]">
                <p>15</p>
            </div>
            <div className=" flex flex-1 flex-col items-start justify-end">
                <p>°C | °F</p>
                <p>Partly cloudy</p>
            </div>
        </>
    )
}

export default Temperature