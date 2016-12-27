import React from 'react'
import { withRouter } from 'react-router'
import './UselessCard.css'

const UselessCard = withRouter((props) => {

    const { router } = props;

    const goHome = () => {
      router.push('/');
    }

    const drop_handler = (evt) => {
       evt.preventDefault();
       //var data = JSON.parse(evt.dataTransfer.getData('text'));
       var data = evt.dataTransfer.getData("text");
       console.log(data);
       evt.target.appendChild(document.getElementById(data));
    }

    const onDragOver = (evt) => {
       evt.preventDefault();
    }

    return (
      <div>
         <div onDragOver={onDragOver} onDrop={drop_handler} className="useless-box"></div>
         <button className="gohome-btn" onClick={goHome}>gohome!</button>
      </div>
    )
})

export default UselessCard