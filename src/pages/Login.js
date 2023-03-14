import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import vetablesLogin from '../assets/vegetables2.png';
import myContext from '../context/myContext';
import useLocalStorage from '../hooks/useLocalStorage';

function Login() {
  const [disabled, setDisabled] = useState(true);
  const { email, setEmail, password, setPassword } = useContext(myContext);
  const [emailStorage, setEmailStorage] = useLocalStorage('user', '');
  const history = useHistory();

  const handleValidate = () => {
    const seis = 6;

    const emailRegex = /^[a-z0-9.-_]+@[a-z0-9]+\.[a-z]+\)?$/i.test(email);
    if (emailRegex && password.length >= seis) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  };

  const handleClick = () => {
    console.log(emailStorage);
    setEmailStorage({ email });
    history.push('/meals');
  };

  return (
    <div className="login-container">
      <form className="login-page">
        <div>
          <h1>App de Receitas</h1>

        </div>
        <input
          type="email"
          data-testid="email-input"
          placeholder="Email"
          value={ email }
          onChange={ ({ target }) => {
            setEmail(target.value);
            handleValidate();
          } }
        />
        <input
          type="password"
          placeholder="Password"
          data-testid="password-input"
          value={ password }
          onChange={ ({ target }) => {
            setPassword(target.value);
            handleValidate();
          } }
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ disabled }
          onClick={ handleClick }
        >
          Enter
        </button>
        <img src={ vetablesLogin } alt="" />
      </form>
    </div>
  );
}

export default Login;
