import { HeaderUser, Footer } from '../../components'
import "./Book.css"
import FormCare from './components/FormCare';
import FormSpa from './components/FormSpa';
import FormTrainer from './components/FormTrainer';


type BookProps = {
    background : string;
    typeof_form : string;
}

const Book = (props : BookProps) => {
    const {background, typeof_form} = props;
    return (
    <div>
        <HeaderUser/>
        <div 
            className="book-container"
            style={{backgroundImage : `url(${process.env.PUBLIC_URL+ "images/" + background})`, 
            backgroundSize: 'cover', backgroundPosition: '50% 70%' , backgroundRepeat: 'no-repeat'}} 
        >
            <header className='book-container-header'>Book Online 24/7</header>
            {typeof_form==='FormCare' && <div><FormCare /></div>}
            {typeof_form==='FormSpa' && <div><FormSpa /></div>}
            {typeof_form==='FormTrainer' && <div><FormTrainer /></div>}
            
        </div>
        
    </div>
  )
}

export default Book;

