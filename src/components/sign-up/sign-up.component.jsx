import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-up.styles.scss';

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
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
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
      </div>
    );
  }
}

export default SignUp;
