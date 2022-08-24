import './style.css';
import { BsEnvelope } from 'react-icons/bs';
import { BsLock } from 'react-icons/bs';
import Container  from '../../components/Conteiner';
import Content from '../../components/Content';
import Main from '../../components/Main';
import Header from '../../components/Header';

export default function SignIn() {
    return(
    <Container>
        <Content>
            <Header/>
            <Main>
                <form className="form-sign-in">
                    <label htmlFor="" className="label-input-sign-in">
                        <BsEnvelope className="icon-modify-sign-in" />
                        <input type="email" placeholder="E-mail" />
                    </label>
                    <label htmlFor="" className="label-input-sign-in">
                        <BsLock className="icon-modify-sign-in" />
                        <input type="password" placeholder="Senha" />
                    </label>
                    <a href="#esqueceusenha" className="link-sign-in password">Esqueceu sua senha?</a>
                    <button className="btn-sign-in">ENTRAR</button>
                </form>
                <a href="#paracadastro" className="link-sign-in">Cadastre-se</a>
            </Main>
        </Content>
    </Container>
    )
}