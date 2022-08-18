import './style.css';

import mascote  from '../../assets/mascote.png';

export default function Header() {
    return(
        <div className="header">
            <div className="logo">
                <img className="img-mascote" src={mascote} alt="Mascote" />
                <h2 className="tittle-primary">
                    <span className="tittle__kids">Kids</span>
                    <span className="tittle__books">Books</span>
                </h2>
            </div>
        </div>
    )
}