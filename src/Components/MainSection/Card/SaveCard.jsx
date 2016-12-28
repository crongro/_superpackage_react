import React, {PropTypes} from 'react'
import { withRouter } from 'react-router'
import './SaveCard.css'

const SaveCard = withRouter((props) => {

    const { router, onRemoveCardInStorage, onSaveMyCard, savecardlist} = props;

    const goHome = () => {
      router.push('/');
    }

    const drop_handler = (evt) => {
      evt.preventDefault();
      const data = evt.dataTransfer.getData("text");

      //to prevent drag element removing.
      var nodeCopy = document.getElementById(data).cloneNode(true);
      const cardNumber  = data.replace(/\w+\-(\d+)/, "$1");
      nodeCopy.id = `copy-${cardNumber}`; 
      evt.target.appendChild(nodeCopy);


      //remove base card 
      onRemoveCardInStorage(cardNumber);

      //save my card
      onSaveMyCard(cardNumber);
    }

    const onDragOver = (evt) => {
       evt.preventDefault();
    }

    return (
      <div>
         <div onDragOver={onDragOver} onDrop={drop_handler} className="savecard-box"></div>
         <p> 현재 저장된 카드 번호들 : {savecardlist}</p>
         <button className="gohome-btn" onClick={goHome}>gohome!</button>
      </div>
    )
})

SaveCard.propTypes = {
  onRemoveCardInStorage : PropTypes.func.isRequired,
  onSaveMyCard: PropTypes.func.isRequired,
  savecardlist: PropTypes.string.isRequired,
}

export default SaveCard