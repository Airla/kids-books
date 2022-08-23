import './style.css';
import Container  from '../../components/Conteiner'; 
import Header from '../../components/Header';
import Content from '../../components/Content';
import Main from '../../components/Main';

import * as React from 'react';
import book from '../../assets/book.png';
import audio from '../../assets/audio.png';
import libra from '../../assets/libra.png';

export default function Ebooks() {
    const [filter, setFilter] = React.useState('');
    
    const hendleChange = (e) => {
        setFilter(e.target.value);
    }

    return (
        
        <Container>
            <Header/>
            
            
            
                <form className="form-ebook">
                    
                    <input className="ebook" type="text"
                     name='filter' 
                     value={filter} 
                     onChange={hendleChange}
                     placeholder= 'Digite' />
                   
                </form>

            
                    <div className='icons'/>
                        <img className="book" src={book} alt="book"/>
                        <img className="audio" src={audio} alt="audio"/>
                        <img className="libra" src={libra} alt="libra"/>
                 
                
          
   
        </Container>
    )
}     
            
            
        
            
        
            

            
            
          
            
        
            

        
                
            
            
    
