
export default function SearchBox({onButton, identifier}){
    return (
    <>
        <input type="text" id={"cityGet" + identifier} className="cityGet" placeholder="Enter City [Format: City, State]" />
        <button type="button" id={"buttonCityGet" + identifier} className="buttonCityGet" onClick={onButton}>Go!</button>
    </>
    )
}