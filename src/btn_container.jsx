import { useState } from "react";
import Button from "./Button";
import { numbers, letters } from "./buttonlist";

function BtnContainer() {
    // State to toggle between numbers and letters
    const [isNumbers, setIsNumbers] = useState(true);

    // Function to toggle between numbers and letters
    const toggleArray = () => {
        setIsNumbers(!isNumbers);
    };

    // Choose the array to map based on the state
    const arrayToDisplay = isNumbers ? numbers : letters;

    return (
        <div>
           

            {/* Grid layout to display the buttons */}
            <div
                style={{
                    width: "15%",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
                    gap: "20px",
                }}
            >
                {arrayToDisplay.map((item, index) => {
                    return <Button key={index} num={item} />;
                })}
            </div>

             {/* Button to toggle between numbers and letters */}
             <button onClick={toggleArray} className="change-button">
                Switch to {isNumbers ? "Letters" : "Numbers"}
            </button>
            

        </div>
    );
}

export default BtnContainer;
