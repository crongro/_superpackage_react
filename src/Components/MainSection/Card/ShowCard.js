import React, { PropTypes } from 'react'
import './ShowCard.css'
import { withRouter } from 'react-router'

const ShowCard = withRouter((props) => {

    const { cardCount } = props;

    const dragStart = (evt) => {
      evt.dataTransfer.setData("text/plain", evt.target.id);
      //evt.dropEffect = "move";
    }

    let aCardList = [];
    for (var i = 0; i < cardCount; i++) {
        let str =`${i+1}번째 카드`;
        let id = `list-${i}`;
        aCardList.push(<li id={id} key={i} draggable='true' onDragStart={dragStart}> {str} </li>)
    }

    return (
      <div>
         <div className="cardUIWrap">
            <ul className="cardList">
                {aCardList}
            </ul>
         </div>
         </div>
    ) 

})

ShowCard.propTypes = {
  cardCount : PropTypes.number.isRequired
}

export default ShowCard