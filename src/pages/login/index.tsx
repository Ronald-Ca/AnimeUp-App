import ButtonEffect from '../../components/buttonEffect'
import './style.css'
export default function Login() {
    return (
        <>
            <div className="container">
                <div className="card-login">
                    <h3>Member Login</h3>
                    <form>
                        <input type="text" placeholder="User, Nickname or Email..." />
                        <input type="password" placeholder="Password" />
                    </form>
                    <ButtonEffect text="Login" width='150px' height='40px' />
                </div>
            </div>
        </>
    )
}