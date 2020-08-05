import React from 'react';
import SimpleReactValidator from 'simple-react-validator';
import logo from './icons/logo.svg';
import name from './icons/name.png';
import surname from './icons/surname.png';
import email from './icons/email.png';
import plus from './icons/plus.png';
import close from './icons/cross.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      name: '',
      surname: '',
      email: '',
      submitForm: false,
      submitMessage: '',
      error: false
    }

    this.validator = new SimpleReactValidator();
  }

  showForm = () => {
    this.setState({
      showForm: true
    });
  }

  cleanData = () => {
    this.setState({
      name: '',
      surname: '',
      email: '',
      submitMessage: ''
    });
  }

  closeForm = () => {
    this.setState({
      showForm: false
    });
    this.cleanData();
    this.validator.hideMessageFor("name");
      this.validator.hideMessageFor("surname");
      this.validator.hideMessageFor("email");
  }

  inputName = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  inputSurname = (e) => {
    this.setState({
      surname: e.target.value
    });
  }

  inputEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  validateForm = () => {
    if (!this.validator.allValid()) {
      this.validator.showMessageFor("name");
      this.validator.showMessageFor("surname");
      this.validator.showMessageFor("email");
      this.setState({
        submitForm: false
      });
    } else {
      this.setState({
        submitForm: true
      });
    }
  }

  render() {
    return (
      <div>
        <header className="header">
          <img src={logo} alt="logo" className="logo"/>
          <button className="logout">Logout</button>
        </header>
        <div className="main-content">
          <div className="offer">
            <h2 className="offer-title">Dear sir, starting in our company gives you a big perspective</h2>
            <ul className="list">
              <li className="list-item">Opporunity to be a chief</li>
              <li className="list-item">Constant promotion opportunities</li>
              <li className="list-item">Premium status</li>
              <li className="list-item">Inclusive salary bonuses</li>
            </ul>
            <div className="price">
              <img className="price-logo" src={plus} alt="price-logo"/>
              <div className="prices">
                <div className="current-price">EUR 29,99</div>
                <div className="former-price">EUR 13,23</div>
              </div>
            </div>
            <div className="button-container">
              <button onClick={this.showForm} className="offer-button" disabled={this.state.showForm === true}>Find a job</button>
            </div>
          </div>
          {this.state.showForm && (
            <div className="form">
              <img className="close-form" onClick={this.closeForm} src={close} alt="close-form"/>
              <h2 className="form-title">Write your data here</h2>
              <div className="form-input">
                <div className="input-container">
                  <img src={name} alt="name" className="form-input-img"/>
                  <input type="text" value={this.state.name} className="form-input-field" onChange={this.inputName} onBlur={() => this.validator.showMessageFor('name')}/>
                </div>
                {this.validator.message('name', this.state.name, 'required|name', { className: 'error' })}
              </div>
              <div className="form-input">
                <div className="input-container">
                  <img src={surname} alt="surname" className="form-input-img"/>
                  <input type="text" value={this.state.surname} className="form-input-field" onChange={this.inputSurname} onBlur={() => this.validator.showMessageFor('surname')}/>
                </div>
                {this.validator.message('surname', this.state.surname, 'required|surname', { className: 'error' })}
              </div>
              <div className="form-input">
                <div className="input-container">
                  <img src={email} alt="email" className="form-input-img"/>
                  <input type="text" value={this.state.email} className="form-input-field" onChange={this.inputEmail} onBlur={() => this.validator.showMessageFor('email')}/>
                </div>
                {this.validator.message('email', this.state.email, 'required|email', { className: 'error' })}
              </div>
              <button onClick={this.validateForm} className="form-button">Sumbit</button>
            </div>
          )}
        </div>
        <footer className="footer">
          <img src={logo} alt="footer-logo" className="footer-logo"/>
          <p className="all-rights-reserved">All rights reserved</p>
        </footer>
      </div>
    )
  }
}

export default App;