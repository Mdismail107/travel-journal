import Entry from "./components/entry"
import Data from "./components/data"
import Header from './components/header'

export default function App(){

    const travelall=Data.map((traveleach) =>(
        <Entry 
            key={traveleach.id}
            img={traveleach.img}
            title={traveleach.title}
            country={traveleach.country}
            googleMapsLink={traveleach.googleMapsLink}
            dates={traveleach.dates}
            text={traveleach.text}
        />
     ))

    return(
    <>
        <Header/>
        <main>
            {travelall}
        </main>
    </>
    )
}