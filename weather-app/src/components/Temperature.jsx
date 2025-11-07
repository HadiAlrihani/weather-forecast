function Temperature({temp, cond}) {
    return (
        <>
            <div className="flex flex-none items-center text-8xl pr-[1%]">
                <p>{temp}</p>
            </div>
            <div className=" flex flex-1 flex-col items-start justify-center text-xl">
                <p>°C</p>
                <p>{cond}</p>
            </div>
        </>
    )
}

export default Temperature