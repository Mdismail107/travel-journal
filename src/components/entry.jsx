// import './content.css'
// import Location from '../assets/Location.svg'

// function Entry({img,title,country,googleMapsLink,dates,text}){
//     return(

//     <div className='contents-container'>
//         <div className='container'>
//                 <img src={img.src} alt={img.alt} />
//                 <div className='contents'>
//                     <img src={Location} className='Location' alt="location icon"/>
//                     <span>{country}</span>
//                     <a href={googleMapsLink}>View on Google Maps</a>
//                     <h2>{title}</h2>
//                     <h5>{dates}</h5>
//                     <p>{text}
//                     </p>
//                 </div>
                
//             </div>

//         </div>
//     )

// }

// export default Entry


import './content.css'
import Location from '../assets/Location.svg'

function Entry({img, title, country, googleMapsLink, dates, text}) {
    return (
        <div className='contents-container'>
            <div className='container'>
                <img src={img.src} alt={img.alt} />
                <div className='contents'>
                    <img src={Location} className='Location' alt="location icon" />
                    <span>{country}</span>
                    <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    <h2>{title}</h2>
                    <h5>{dates}</h5>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Entry
