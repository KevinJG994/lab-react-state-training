import { useState } from "react";

function Dice() {
    const [hiden, setHiden] = useState(false)

    const toggleImage = () => {
        setHiden(true);
        setTimeout(() => {
            <img src="./src/assets/images/dice6.png" alt="img-6"/>
            setHiden(false);
        }, 2000); 
    };

    return (
        <div className="dice-container">
            {hiden ? (
                <img src="./src/assets/images/dice-empty.png" alt="img-vacia" onClick={toggleImage} />
            )
            
            : (
                <img src="./src/assets/images/dice3.png" alt="img-3" onClick={toggleImage} />
            )}
        </div>
    );
}

export default Dice;
