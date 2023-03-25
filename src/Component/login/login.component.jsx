const Login = () => {
    return (
        <div>
            <h1>User Login</h1>
            <form>
                <label>Username</label>
                <input type='text' />
                <label>Password</label>
                <input label="Password" type='password' />
                <button className="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default Login;