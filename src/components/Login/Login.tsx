import React, { useState } from 'react';
import './Login.css';
import background from '../../assets/logo-background.png';
import googleIcon from '../../assets/icons/flat-color-icons_google.svg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberPassword, setRememberPassword] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleRememberPasswordChange = () => {
        setRememberPassword(!rememberPassword);
    };

    const handleShowPasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Password:', rememberPassword);
    };

    return (
        <div className="container">
            <div className="left-side" style={{ backgroundImage: `url(${background})` }}>
                <div>
                    <h1>Добро пожаловать в наш сервис</h1>
                    <p>Ваше путешествие начинается здесь.</p>
                </div>
            </div>
            <div className="right-side">
                <div>
                    <h1>Login to your Account</h1>
                    <p>with your registered Email Address</p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Enter your email"
                                style={{ width: '426px', height: '64px' }} // Применяем стили здесь
                                required
                            />
                        </div>
                        <div className={`input-container ${showPassword ? 'show-password' : ''}`}>
                            <label>Password:</label>
                            <div className="password-input-container">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Enter your password"
                                    style={{ width: '426px', height: '64px' }} // Применяем стили здесь
                                    required
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={handleShowPasswordToggle}
                                >
                                    {showPassword ? <FaEyeSlash className="eye-slash-icon" /> : <FaEye  className="eye-icon"/>}
                                </button>
                            </div>
                        </div>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                checked={rememberPassword}
                                onChange={handleRememberPasswordChange}
                            />
                             <label>Remember my password</label>
                        
                        </div>
                        <button type="submit" className="primary" style={{ width: '426px', height: '64px' }}>Login</button>
                        <p>or</p>
                        <button type="button" className="google-button" onClick={() => console.log('Login with Google')}>
                            <img src={googleIcon} alt="Google Icon" className="google-icon" />
                            Login with Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
