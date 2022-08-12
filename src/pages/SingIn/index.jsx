import './style.css';
import { BsEnvelope } from 'react-icons/bs';
import { BsLock } from 'react-icons/bs';
import logo from '../../assets/Bibliophile.svg';

export function SingIn() {
    return(
    <div className="container">
        <div className="content">
            <div class="first-column">
                <img src={logo} alt='logo'/>
            </div>
            <div className="second-column">
                <h2 className="tittle-primary">Login</h2>
                <p className="description">Bem vindo de volta!</p>
                <form className="form-login">
                    <label htmlFor="" className="label-input">
                        <BsEnvelope className="icon-modify" />
                        <input type="email" placeholder="E-mail" />
                    </label>
                    <label htmlFor="" className="label-input">
                        <BsLock className="icon-modify" />
                        <input type="password" placeholder="Senha" />
                    </label>
                    {/* <a href="#esqueceusenha" className="link">Esqueceu sua senha?</a> */}
                    <button className="btn-login">LOGIN</button>
                </form>
                <a href="#paracadastro" className="link">Cadastre-se</a>
            </div>
        </div>
    </div>
    )
}