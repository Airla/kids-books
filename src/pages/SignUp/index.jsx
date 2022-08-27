import './style.css';
import { FiUser } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { BsEnvelope } from 'react-icons/bs';
import Container  from '../../components/Conteiner';
import Content from '../../components/Content';
import Main from '../../components/Main';
import Header from '../../components/Header';
import * as React from 'react';
import api from '../../services/api';

export default function SignUp() {

    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [confirmSenha, setConfirmSenha] = React.useState('');

    const [users, setUsers] = React.useState([]);

    const getUsers = async () => {
        const response = await api.get('/users')
        setUsers(response.data)
    }

    React.useEffect(() => {
        getUsers();
    }, [])

    const addUser = async (e) => {
        e.preventDefault()
        if(validatorUser()) {
            await api.post('/users', {
                name: nome,
                email: email,
                senha: senha,
                confirmSenha: confirmSenha
            })
            clearInputs();
            alert("Usuario cadastrado!")
        }
    }

    const clearInputs = () => {
        setNome('');
        setEmail('');
        setSenha('');
        setConfirmSenha('');
    }

    const validatorUser = () => {
        for (const user of users) {
            if(user.email === email) {
                alert("O e-mail já está cadastrado!")
                return false;
            }
        }

        if( senha !== confirmSenha) {
            alert("A senha e confirmação de senha não correspondem!")
            return false;
        }

        return true;
    }

    return (
        <Container>
            <Content nameClass="sign-up">
                <Header/>
                <Main>
                    <form className="form-sign-up" onSubmit={addUser}>
                        <label htmlFor="" className="label-input-sign-up">
                            <FiUser className="icon-modify" />
                            <input
                            type="text"
                            placeholder="Nome *"
                            required="true"
                            id="nome"
                            name='nome'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            />
                        </label>
                        <label htmlFor="" className="label-input-sign-up">
                            <BsEnvelope className="icon-modify" />
                            <input
                            type="email"
                            placeholder="E-mail *"
                            required="true"
                            id="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label htmlFor="" className="label-input-sign-up">
                            <FiLock className="icon-modify" />
                            <input
                            type="password"
                            placeholder="Senha *"
                            required="true"
                            id="senha"
                            name='senha'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            />
                        </label>
                        <label htmlFor="" className="label-input-sign-up">
                            <FiLock className="icon-modify" />
                            <input
                            type="password"
                            placeholder="Confirmar Senha *"
                            required="true"
                            id="confirmSenha"
                            name='confirmSenha'
                            value={confirmSenha}
                            onChange={(e) => setConfirmSenha(e.target.value)}
                            />
                        </label>
                        <button className="btn-sign-up">INSCREVER-SE</button>
                    </form>
                    <Link to="/login" className="link-sign-up">Entrar</Link>
                </Main>
            </Content>
        </Container>
    )
}