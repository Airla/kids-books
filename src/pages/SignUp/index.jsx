import './style.css';
import { FiUser } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { BsEnvelope } from 'react-icons/bs';
import Container  from '../../components/Conteiner';
import Content from '../../components/Content';
import Main from '../../components/Main';
import Header from '../../components/Header';

export default function SignUp() {
    return (
        <Container>
            <Content nameClass="sign-up">
                <Header/>
                <Main>
                    <form className="form-sign-up">
                        <label htmlFor="" className="label-input-sign-up">
                            <FiUser className="icon-modify" />
                            <input type="text" placeholder="Nome *" />
                        </label>
                        <label htmlFor="" className="label-input-sign-up">
                            <BsEnvelope className="icon-modify" />
                            <input type="email" placeholder="E-mail *" />
                        </label>
                        <label htmlFor="" className="label-input-sign-up">
                            <FiLock className="icon-modify" />
                            <input type="password" placeholder="Senha *" />
                        </label>
                        <label htmlFor="" className="label-input-sign-up">
                            <FiLock className="icon-modify" />
                            <input type="password" placeholder="Confirmar Senha *" />
                        </label>
                        <button className="btn-sign-up">INSCREVER-SE</button>
                    </form>
                    <Link to="/login" className="link-sign-up">Entrar</Link>
                </Main>
            </Content>
        </Container>
    )
}