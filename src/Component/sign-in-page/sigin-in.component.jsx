const SignUp = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <label>Email</label>
                <input type="email"/>
                <label>Username</label>
                <input type='text' />
                <label>Password</label>
                <input label="Password" type='password' />
                <label>Password</label>
                <input label="Password" type='password' />
                <label>Sign Up as a Store?</label><br/>
                <input type="checkbox"/>
                <button className="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default SignUp;