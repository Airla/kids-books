import './style.css';
import { BsEnvelope } from 'react-icons/bs';
import { BsLock } from 'react-icons/bs';
import mascote  from '../../assets/mascote.png';

export function SingIn() {
    return(
    <div className="container">
        <div className="content">
            <div className="logo">
                <img className="img-mascote" src={mascote} alt="Mascote" />
                <h2 className="tittle-primary">
                    <span className="tittle__kids">Kids</span>
                    <span className="tittle__books">Books</span>
                </h2>
            </div>
            <form className="form-login">
                <label htmlFor="" className="label-input">
                    <BsEnvelope className="icon-modify" />
                    <input type="email" placeholder="E-mail" />
                </label>
                <label htmlFor="" className="label-input">
                    <BsLock className="icon-modify" />
                    <input type="password" placeholder="Senha" />
                </label>
                <a href="#esqueceusenha" className="link password">Esqueceu sua senha?</a>
                <button className="btn-login">ENTRAR</button>
            </form>
            <a href="#paracadastro" className="link">Cadastre-se</a>
        </div>
    </div>
    )
}