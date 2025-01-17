import styled from "styled-components"

const RollDice = ({currentDice,  rollDice}) => {


  return (
    <DiceContainer>
        <div className="dice" onClick={rollDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on the dice to roll</p>
    </DiceContainer>
    
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    p{
        font-size: 20px;
    }
    .dice{
        cursor: pointer;
    }
`