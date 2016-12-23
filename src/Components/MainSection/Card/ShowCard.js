import React, { PropTypes } from 'react'
import './ShowCard.css'

const ShowCard = (props) => {

    const { cardCount } = props;

    let aCardList = [];
    for (var i = 0; i < cardCount; i++) {
        let str =`${i+1}번째 카드`;
        aCardList.push(<li key={i}> {str} </li>)
    }

    return (
         <div className="cardUIWrap">
            <ul className="cardList">
                {aCardList}
            </ul>
         </div>
    ) 

}

ShowCard.propTypes = {
  cardCount : PropTypes.number.isRequired
}

export default ShowCard