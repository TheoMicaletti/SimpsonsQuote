import React from 'react';

function QuoteCards({ quotes }) {
    return (
        <div className="QuoteCards">
            <img
                src={quotes.image}
                alt={quotes.character}
            />
            <h1 >{quotes.character}</h1>
            <p>{quotes.quote}</p>

        </div>
    );
}

export default QuoteCards;