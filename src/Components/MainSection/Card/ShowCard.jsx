import React, { PropTypes } from 'react'
import './ShowCard.css'
import { withRouter } from 'react-router'

const ShowCard = withRouter((props) => {

    const { cardList } = props;

    const dragStart = (evt) => {
      evt.dataTransfer.setData("text/plain", evt.target.id);
    }

    let aCardList = [];
    for (var i = 0; i < cardList.length; i++) {
        let str =`${cardList[i]}번째 카드`;
        let id = `list-${cardList[i]}`;
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
  cardList : PropTypes.array.isRequired
}

export default ShowCard