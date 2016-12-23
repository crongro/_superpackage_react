import Counter from '../../../Components/MainSection/Card/Counter'
import * as actions from '../../../Actions/Action'
import { connect } from 'react-redux'

const mapStateToProps = (valuestate)  => {
  return {valuestate};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDecrement() {
      dispatch(actions.minusCount());
    },
    onIncrement() {
      dispatch(actions.addCount());
    },
    onSendFetchData() {
      dispatch(actions.sendFetchData(dispatch));
    }
  }
};


const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CardContainer;
