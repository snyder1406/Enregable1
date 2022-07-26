import React from "react"

const CardUsers = ({randomUser, randomColors, getRandomAll}) => {

    console.log(randomColors)
    
    const objectStyle = {
        color: randomColors
    }
    const objectBgStyle = {
        backgroundColor: randomColors
    }

    return (
        <div className="card" style={objectStyle}>
            
            <h1 className="card_quote"><i className="go"class="fa-solid fa-quote-left"></i>{randomUser.quote}</h1>

            <div className="autor"><h2 className="card_authors">"{randomUser.author}"</h2></div>
            
            
            <div className="buton">
            <button onClick={getRandomAll} className="boton" style={objectBgStyle}>&#62;</button>
            </div>

        </div>

    )
}

export default CardUsers