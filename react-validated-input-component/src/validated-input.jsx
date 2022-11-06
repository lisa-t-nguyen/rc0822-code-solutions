import React from 'react';

export class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    if (this.state.password.length >= 8) {
      return (
        <form>
          <div className='password'>
            Password
          </div>
          <input type='password' value={this.state.password} onChange={this.handlePasswordChange} />
          <i className="fa-solid fa-check"></i>
        </form>
      );
    } else if (this.state.password === '') {
      return (
        <form>
          <div className='password'>
            Password
          </div>
          <input type='password' value={this.state.password} onChange={this.handlePasswordChange} />
          <i className="fa-solid fa-xmark"></i>
          <div className='pwrequired'>
           A password is required.
          </div>
        </form>
      );
    } else {
      return (
        <form>
          <div className='password'>
            Password
          </div>
          <input type='password' value={this.state.password} onChange={this.handlePasswordChange} />
          <i className="fa-solid fa-xmark"></i>
          <div className='pwrequired'>
            Your password is too short.
          </div>
        </form>
      );
    }
  }
}
