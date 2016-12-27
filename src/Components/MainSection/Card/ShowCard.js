import React, { PropTypes } from 'react'
import './ShowCard.css'
import { withRouter } from 'react-router'

const ShowCard = withRouter((props) => {

    const { cardCount, router } = props;

    let aCardList = [];
    for (var i = 0; i < cardCount; i++) {
        let str =`${i+1}번째 카드`;
        aCardList.push(<li key={i}> {str} </li>)
    }

    const goHome = () => {
      router.push('/');
    }

    return (
      <div>
         <div className="cardUIWrap">
            <ul className="cardList">
                {aCardList}
            </ul>
         </div>
         <button onClick={goHome}>gohome!</button>
         </div>
    ) 

})

ShowCard.propTypes = {
  cardCount : PropTypes.number.isRequired
}

export default ShowCard