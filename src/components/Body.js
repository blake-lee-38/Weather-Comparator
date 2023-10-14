import City from './City.js';

export default function Body(){
    const identifiers = [1, 2];
    
    return (
    <>
        <div className="LeftCity">
            <City identifier={identifiers[0]} />
        </div>
        <div className="RightCity">
            <City identifier={identifiers[1]}/>
        </div>
    </>
    )
}