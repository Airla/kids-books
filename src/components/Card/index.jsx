import './style.css';
import mascote  from '../../assets/mascote.png';

export default function Card() {
    return(
        <div className="card-book">
            <img src={mascote} alt="mascote" />
            <p className="book__name">Nome do livro</p>
            <p className="book__author-name">Autor</p>
        </div>
    )
}