import City from './City.js';

export default function Body(){
    const identifiers = [1, 2];
    
    return (
    <>
        <div className="LeftCity">
            <h1>City 1</h1>
            <City identifier={identifiers[0]} />
        </div>
        <div className="RightCity">
            <h1>City 2</h1>
            <City identifier={identifiers[1]}/>
        </div>
    </>
    )
}