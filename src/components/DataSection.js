
export default function DataSection({ weatherData }){
    if(!weatherData[0]) return <div className="noData"><h2>Input a City to See the Weather Here!</h2></div>


    return (
        <div className="dataContainer">
            <div className="dataItem dataItem1">Current Temperature: {weatherData[0]}{weatherData[4]}</div>
            <div className="dataItem dataItem2">Today's High Temperature: {weatherData[1]}{weatherData[4]}</div>
            <div className="dataItem dataItem3">Today's Low Temperature: {weatherData[2]}{weatherData[4]}</div>
            <div className="dataItem dataItem4">Rain Today: {weatherData[3]} in.</div>
        </div>
    );
}