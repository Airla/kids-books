import './style.css';
import Container  from '../../components/Conteiner';
import Card from '../../components/Card';
import Main from '../../components/Main';
import Header from '../../components/Header';

export default function Ebooks() {
    return(
        <Container>
            <Main>
                <div className="line">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
                <div className="line">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </Main>
        </Container>
    )
}