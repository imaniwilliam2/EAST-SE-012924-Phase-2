import { useState } from "react";


function Pet({pet}){

    const [count, setCount] = useState(0)

    function handleClick(){
        setCount(count + 1)
    }


    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    function handleAnimalType(){
        setDisplayAnimalType((displayAnimalType) => !displayAnimalType)
    }


    const typeClass =  displayAnimalType ? "display-animal-type" : ""

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={handleAnimalType} className={typeClass}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
            <button onClick={handleClick} className="like-button">{count} Likes</button>
        </li>
    );
}

export default Pet;