import { connect } from 'react-redux';
import ErrorMessage from '../components/ErrorMessage';

const mapStateToProps = state => {
  return {
    message: state.error && state.error.message
  };
};

const connectedErrorMessage = connect(mapStateToProps)(ErrorMessage);

export default connectedErrorMessage;
