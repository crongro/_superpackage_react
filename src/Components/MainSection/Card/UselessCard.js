import React from 'react'
import { withRouter } from 'react-router'
import './UselessCard.css'

const UselessCard = withRouter((props) => {

    const { router } = props;

    const goHome = () => {
      router.push('/');
    }

    return (
      <div>
         <div className="useless-box"></div>
         <button className="gohome-btn" onClick={goHome}>gohome!</button>
      </div>
    )
})

export default UselessCard