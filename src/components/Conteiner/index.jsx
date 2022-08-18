import './style.css';

export default function Conteiner({ children }) {
    return (
        <div className="container">
            {children}
        </div>
    )
}