import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      selected: this.props.selected,
      buttonText: this.props.button
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  update(type) {
    return e => {
      this.setState({[type]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.selected === 'signin') {
      this.props.login(this.state).then(this.props.closeModal);
    } else {
      this.props.signup(this.state).then(this.props.closeModal);
    }
  }

  handleDemoUser() {
    const username = 'demo@demo.com';
    const password = 'password';
    this.setState({ email: username, password: password }, () => {
      this.props.login(this.state).then(this.props.closeModal);
    });
  }

  selectButton(type) {
    return e => {
      this.props.clearErrors();
      const text = type === 'signin' ? 'Sign in' : 'Submit';
      this.setState({ selected: type, buttonText:  text });
    };
  }

  renderBottom() {
    if (this.state.selected === 'signin') {
      return <p>Forgot your password?</p>;
    } else {
      return (
        <div className="session-signup-text">
          <li>Outside the U.S.?</li>
          <li><span>I accept Pillows</span> Terms of Use</li>
        </div>
      );
    }
  }

  renderMore() {
    if (this.state.selected === 'signin') return null;
    return (
      <div>
        <li className="password">At least 8 characters</li>
        <li className="password">Mix of letters and numbers</li>
        <li className="session-checkbox">
          <input type="checkbox"/>
          <label>I am a landlord or industry professional</label>
        </li>
      </div>
    );
  }

  renderErrors() {
    return this.props.errors.map((err, idx) => {
      return <li key={`err-${idx}`} className="errors">{err}</li>;
    });
  }

  render() {
    let errors = this.renderErrors();
    return(
      <div>
        <h1>Welcome to Pillow</h1>
        <div className="close-modal" onClick={this.props.closeModal}>
          <i className="fas fa-times"></i>
        </div>
        <div className="modal-buttons">
          <button
            className={this.state.selected === 'signin' ? 'selected-button' : ''}
            onClick={this.selectButton('signin')}>Sign in</button>
          <button
            className={this.state.selected === 'signup' ? 'selected-button' : ''}
            onClick={this.selectButton('signup')}>New account</button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input 
            className={errors.length > 0 ? 'error-input' : ''}
            type="text"
            placeholder="Enter email"
            onChange={this.update('email')} 
            value={this.state.email}/>
            {errors[0]}
          <input 
            className={errors.length > 0 ? 'error-input' : ''}
            type="password"
            placeholder="Enter password"
            onChange={this.update('password')} 
            value={this.state.password}/>
            {errors[1]}
          {this.renderMore()}
          <div className="submit">
            <input type="submit" value={this.state.buttonText}/>
            {this.renderBottom()}
          </div>
        </form>
        <div className="submit">
            <button 
              id={this.state.selected === 'signin' ? "demo-button" : "hidden"}
              onClick={this.handleDemoUser}>
                Demo User
            </button>
          </div>
        <div>
          <div className="connect">Or connect with:
            <i className="fab fa-facebook"></i>
            <i className="fab fa-google"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;