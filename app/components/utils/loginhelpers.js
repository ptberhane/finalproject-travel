var axios = require("axios");
var {Router, Route, hashHistory, browserHistory} = require ("react-router");

const loginHelper = {

	class Login extends React.Component{
  setUserCookie(user) {
    cookie.save('userId', user.id, { path: '/' });
  }

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
    this.context.router.push('home');
  }

  redirectToRegister() {
    this.context.router.push('register');
  }
  sendSuccessNotification() {
    notification['success']({
      message: 'Great!',
      description: 'You are logged in.',
    });
  }

  sendErrorNotification() {
    notification['error']({
      message: 'Uh-Oh',
      description: 'Account not found. Please register.',
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)   
    axios.post('/login', this.state)
        .then((user) => {
        this.sendSuccessNotification();
        this.endLoading();
        this.setUserCookie(user);
        this.redirectToHome();
        console.log(event);
      })
      .catch((error) => {
        this.sendErrorNotification();
        this.redirectToRegister();
        this.endLoading();
        console.log(error);
      }) 
 
  }  

  handleUpdateTextInput(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  initializeState() {
      this.setState({
      username:  '',
      password:  ''
    });
  }

  componentWillMount() {
    this.initializeState();
  }

  render(){
    return(
      <div>
      <Row className='login-form'>
      <Col xs={12} md={6}>
        <h2 className='login-header'>
          Log In
        </h2>
        <form onSubmit= {(event) => this.handleSubmit(event)}>
          <div className='login-email'>
            <label htmlFor='Username'>Email</label><br/>
            <input 
              defaultValue={this.state.username}
              type='text'
              id='username'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>
          <div className='login-password'>
              <label htmlFor='password'>Password</label><br/>
              <input 
                defaultValue={this.state.password}
                type="password"
                id='password'
                onChange={(event) => this.handleUpdateTextInput(event)}
              />
          </div>
          <div className='form-row'>
            <Button 
              id='loginButton' 
              type='primary'
              htmlType='submit'
              loading={this.props.loading}
            >
              Log In
            </Button>
          </div>
        </form>
        </Col>
        </Row>
        <Row className='redirect-Register'>
        <Col xs={12} md={6}>
          <Button 
            id='redirectToRegisterButton' 
            type='primary'
            htmlType='submit'             
          >
            Register
          </Button>
          </Col>
        </Row>
      </div>
    )
    
  }
  
}
	Login.contextTypes = {
	  router: React.PropTypes.any
	}

};


export default loginHelper;