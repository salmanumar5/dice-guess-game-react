import { useState } from "react"
import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import TotalScore from "./TotalScore"
import styled from "styled-components"

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const rollDice = () => {
        if(!selectedNumber){
            setError("You have not selected any number");
            return;
        }

        const randomNumber = generateRandomNumber(1, 7);

        setCurrentDice((prev) => randomNumber);

        if(selectedNumber == randomNumber){
            setScore((prev) => prev + randomNumber);
        }else{
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(undefined);
    };


    return (
        <MainContainer>
            <div className="topSection">
                <TotalScore score={score}/>
                <NumberSelector
                error={error}
                setError={setError}
                selectedNumber={selectedNumber} 
                setSelectedNumber={setSelectedNumber} />
            </div>
            <RollDice currentDice={currentDice} rollDice={rollDice} />
        </MainContainer>
    )
}

export default GamePlay

const MainContainer = styled.main`
    padding: 30px 100px;

    .topSection{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
`