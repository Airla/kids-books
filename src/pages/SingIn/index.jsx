import './style.css';
import { BsEnvelope } from 'react-icons/bs';
import { BsLock } from 'react-icons/bs';
import Container  from '../../components/Conteiner';
import Content from '../../components/Content';
import Main from '../../components/Main';
import Header from '../../components/Header';

export default function SingIn() {
    return(
    <Container>
        <Content>
            <Header/>
            <Main>
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
            </Main>
        </Content>
    </Container>
    )
}