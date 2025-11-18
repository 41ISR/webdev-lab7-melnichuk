import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import { api } from "../api/api"
import { Link, useNavigate } from "react-router-dom"
import {useUserStore} from "../store/useUserStore"


const SignIn = () => {
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const {setSession} = useUserStore()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        const user = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        
        try {
            const data = await api.loginUser(user)
            console.log(data);
            
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
                <h1 className="auth-title">Login</h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <Input required id="username" name="username" type="text" label="Username" placeholder="Enter your username" />
                    <Input required id="password" name="password" type="password" label="Password" placeholder="Enter your password" />

                    <Button>Sign in</Button>
                </form>
                <div className="auth-footer">
                    <p>
                        <Link to={'/signup'}>Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignIn