import { useState } from 'react'
import ButtonEffect from '../../components/buttonEffect'
import './style.css'
import { useLoginMutation } from '../../queries/user'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginMutation = useLoginMutation()
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            await loginMutation.mutateAsync({ email, password })
            alert('Login successful!')
            navigate('/config')
        } catch (error) {
            alert('Login failed!')
        }
    }

    return (
        <>
            <div className="container">
                <div className="card-login">
                    <img src="./src/images/logo/a-fire.png" alt="logo" width={80} height={80} />
                    <h3>Member Login</h3>
                    <form>
                        <input type="text" placeholder="User, Nickname or Email..." onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </form>
                    <ButtonEffect text="Login" width='150px' height='40px' onClick={async () => {
                        handleLogin()
                    }} />
                </div>
            </div>
        </>
    )
}