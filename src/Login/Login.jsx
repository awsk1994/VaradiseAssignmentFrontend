import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSuccessLogin = () => {
        window.open("/buildings", "_self");
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // Here you can perform authentication logic or API call with the entered username and password
        console.log('Username:', username);
        console.log('Password:', password);

        // TODO: 
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,   // TODO: encrypt password
                }),
            });

            if (response.ok) {
                // Authentication successful
                console.log('Login successful');
                // Redirect the user to the dashboard or another page
                // TODO: save sesssion id in cookie
                handleSuccessLogin();
            } else {
                // Authentication failed
                console.log('Login failed');
                setErr("Login Failed");         // TODO: rename
            }
        } catch (error) {
            console.error('Error occurred during login:', error);
            setErr(error.message)
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">Login</button>
                { err && <div>ERROR: {err}</div>}
            </form>
        </div>
    );
}


export default Login;