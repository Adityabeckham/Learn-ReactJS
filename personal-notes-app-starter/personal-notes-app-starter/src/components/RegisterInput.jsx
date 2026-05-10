import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import LocaleContext from '../contexts/LocaleContext';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');
  const { locale } = useContext(LocaleContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert(locale === 'id' ? 'Password dan Konfirmasi Password harus sama' : 'Password and Confirm Password must match');
      return;
    }
    register({ name, email, password });
  };

  return (
    <form className="input-register" onSubmit={onSubmitHandler}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={onNameChange} required />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} required />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={onPasswordChange} required />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" value={confirmPassword} onChange={onConfirmPasswordChange} required />
      <button type="submit">Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
