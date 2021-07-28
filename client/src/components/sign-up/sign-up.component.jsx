import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { SignUpContainer, SignUpTitle } from './sign-up.styles.jsx';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSumit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
    }

    signUpStart({ displayName, email, password, confirmPassword });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSumit}>
        <FormInput
          type='text'
          name='displayName'
          label='Display Name'
          required
          value={displayName}
          handleChange={handleChange}></FormInput>
        <FormInput
          type='text'
          name='email'
          label='Email'
          required
          value={email}
          handleChange={handleChange}></FormInput>
        <FormInput
          type='password'
          name='password'
          label='Password'
          required
          value={password}
          handleChange={handleChange}></FormInput>
        <FormInput
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          required
          value={confirmPassword}
          handleChange={handleChange}></FormInput>
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
