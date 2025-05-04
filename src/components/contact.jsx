import call from '../assets/phone-solid.svg'
import mail from '../assets/envelope-solid.svg'

function  Contact({img,name,number,email}){
    return(
<div className="contacts">
    <article className="contact-card">
        <img 
            src={img}
            alt={`Photo of ${name}`}
        />
        <h3>{name}</h3>
        <div className="info-group">
            <img 
                src={call} 
                alt="phone icon" 
            />
            <p>{number}</p>
        </div>
        <div className="info-group">
            <img 
                src={mail}
                alt="mail icon"
            />
            <p>{email}</p>
        </div>
    </article>
</div>
    )
}


export default Contact
