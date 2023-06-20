import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SplashPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    async function handleLogin(e) {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Perform the login request using Axios
            const response = await axios.post('/api/login', { email, password });
            console.log(response.data); // You can handle the successful login response here
        } catch (error) {
            setError('Failed to login. Please check your credentials.');
        }

        setLoading(false);
    }

    async function handleSignup(e) {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Perform the signup request using Axios
            const response = await axios.post('/api/signup', { email, password });
            console.log(response.data); // You can handle the successful signup response here
        } catch (error) {
            setError('Failed to signup. Please try again later.');
        }

        setLoading(false);
    }

    return (
        <div>
            <h1>Welcome to GradeSage</h1>
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                {error && <p>{error}</p>}
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
                <button type="submit" disabled={loading}>Login</button>
            </form>
            <form onSubmit={handleSignup}>
                <h2>Signup</h2>
                {error && <p>{error}</p>}
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
                <button type="submit" disabled={loading}>Signup</button>
            </form>
            <p>
                Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
        </div>
    );
}

export default SplashPage;