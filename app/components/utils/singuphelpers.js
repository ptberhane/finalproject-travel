import axios from 'axios';
import {Router, Route, hashHistory, browserHistory} from 'react-router';
import signup from './signupHelper';

const signupHelper = {


class SignUp extends React.Component {
  startLoading() {
    this.setState({
      loading: true
    });
  }

  endLoading() {
    this.setState({
      loading: false
    });
  }

  redirectToHome() {
    this.context.router.push('');
  }

  sendSuccessNotification() {
    notification['success']({
      message: 'YAY!!!',
      description: 'THANK YOU FOR SIGNING UP!',
    });
  }

  sendErrorNotification() {
    notification['error']({
      message: 'Oops',
      description: 'Please try again.',
    });
  }


  // Data Request Methods

  createUser(event) {
    event.preventDefault();
    this.startLoading();
    console.log(this.state);
    axios.post('/Signup', this.state)
      .then(() => {
        this.sendSuccessNotification();
        this.endLoading();
        this.redirectToHome();
      })
      .catch((error) => {
        this.sendErrorNotification();
        this.endLoading();
        console.log(error);
      });
  }


  initializeState() {
    this.setState({
      loading: false
    });
  }

  componentWillMount() {
    this.initializeState();
  }

  handleChange(e) {
    console.log('changing');
    var value = e.target.value;
    var id = e.target.id;
      
    var updatedState = {};
    updatedState[id] = value;
    this.setState(updatedState);
  }

  render(){
    return (
      <div>
        <Row className ="SignUp-form">
      <Col xs={12} md={6}>
        <h2 className='SignUp-header'>
          SignUp
        </h2>
        <form onSubmit={(event) => this.createUser(event)}>
          <div className='SignUp-email'>
            <label htmlFor='username'>Email</label><br/>
            <input 
              value={this.state.username}
              type='text'
              id='username'
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className='SignUp-email'>
              <label htmlFor='password'>Password</label><br/>
              <input 
                value={this.state.password}
                type="password"
                id='password'
                onChange={(e) => this.handleChange(e)}
              />
          </div>
          <div className='form-row'>
            <Button
              id='SignUpButton'  
              type='primary'
              htmlType='submit'
              loading={this.props.loading}
            >
              Sign Up
            </Button>
          </div>
        </form>
        </Col>
        </Row>
     </div>
    )
  }
}

	SignUp.contextTypes = {
	  router: React.PropTypes.any
	};

};

export default signupHelper;