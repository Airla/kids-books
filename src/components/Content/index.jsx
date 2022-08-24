import './style.css';

export default function Content(props) {
    return(
        <div className={`content ${props.nameClass}`}>
            {props.children}
        </div>
    )
}