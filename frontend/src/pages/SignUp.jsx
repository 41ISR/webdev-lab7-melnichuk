import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import { api } from "../api/api"
import { Link, useNavigate } from "react-router-dom"
import {useUserStore} from "../store/useUserStore"


const SignUp = () => {
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const {setSession} = useUserStore

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        if(e.target.password.value !== e.target.password2.value) {setError("Passwords don't match"); return}

        const user = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        console.log(user);
        
        try {
            const data = await api.registerUser(user)

            setSession(data.data)
            navigate('/')
        } catch (error) {
            setError(error.response.data.error)
            console.error(error);
            
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Registration</h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <Input required id="username" name="username" type="text" label="Username" placeholder="Enter your username" />
                    <Input required id="email" name="email" type="email" label="Email" placeholder="Enter your email" />
                    <Input required id="password" name="password" type="password" label="Password" placeholder="Enter your password" />
                    <Input required id="password2" name="password2" type="password" label="Confirm your password" placeholder="Confirm your password" />

                    <Button>Sign up</Button>
                </form>
                <div className="auth-footer">
                    <p>
                        <Link to={'/signin'}>Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp