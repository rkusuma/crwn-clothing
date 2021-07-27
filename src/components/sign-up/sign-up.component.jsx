import React from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { SignUpContainer, SignUpTitle } from './sign-up.styles.jsx';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSumit = async (event) => {
    event.preventDefault();

    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
    }

    signUpStart({ displayName, email, password, confirmPassword });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSumit}>
          <FormInput
            type='text'
            name='displayName'
            label='Display Name'
            required
            value={displayName}
            handleChange={this.handleChange}></FormInput>
          <FormInput
            type='text'
            name='email'
            label='Email'
            required
            value={email}
            handleChange={this.handleChange}></FormInput>
          <FormInput
            type='password'
            name='password'
            label='Password'
            required
            value={password}
            handleChange={this.handleChange}></FormInput>
          <FormInput
            type='password'
            name='confirmPassword'
            label='Confirm Password'
            required
            value={confirmPassword}
            handleChange={this.handleChange}></FormInput>
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
