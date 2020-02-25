import { connect } from "react-redux";
import Navigation from '../components/Navigation'
import { logout } from "../redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(Navigation)