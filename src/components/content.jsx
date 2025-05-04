import Japan from '../assets/Japan.jpg'
import Australia from '../assets/Australia.jpg'
import Norway from '../assets/Norway.jpg'
import Location from '../assets/Location.svg'
import './content.css'
function Content(){
    return(
        <div className='contents-container'>
            <div className='container'>
                <img src={Japan} alt="Japan" />
                <div className='contents'>
                    <img src={Location} className='Location' />
                    <span>JAPAN</span>
                    <a href="https://maps.app.goo.gl/86u4FRerVptNcVTJ9">View on Google Maps</a>
                    <h2>Mount Fuji</h2>
                    <h5>12 Jan, 2023 - 24 Jan, 2023</h5>
                    <p>Mount Fuji, highest mountain in Japan.
                        It rises to 12,388 feet (3,776 metres) near the Pacific Ocean coast in Yamanashi 
                        and Shizuoka ken (prefectures) of central Honshu, about 60 miles (100 km)
                        west of the Tokyo-Yokohama metropolitan area
                    </p>
                </div>
                
            </div>
            <div className='container'>
                <img src={Australia} alt="Australia"  />
                <div className='contents'>
                <img src={Location} className='Location' />
                <span>AUSTRALIA</span>
                <a href="https://maps.app.goo.gl/6dNnhVDgLWLFPCCx5">View on Google Maps</a>
                <h2>Sydney Opera House</h2>
                <h5>27 May, 2023 - 8 Jun, 2023</h5>
                <p>
                The Sydney Opera House is a multi-venue performing arts centre in Sydney, New South Wales, Australia. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings
                </p>
            </div>
            </div>
            <div className='container'>
                <img src={Norway} alt="Norway"  />
                <div className='contents'>
                <img src={Location} className='Location' />
                <span>NORWAY</span>
                <a href="https://maps.app.goo.gl/aH7rkoZFZ82o57ek7">View on Google Maps</a>
                <h2>Geirangerfjord</h2>
                <h5>
                01 Oct, 2024 - 18 Nov, 2024
                </h5>
                <p>
                The Geirangerfjord is an arm of a larger fjord system that extends all the way to Ålesund. The fjord reaches a depth of 260 metres, while the steep mountains surrounding it rise to 1600-1700 metres above sea level.
                </p>
            </div>
            </div>
        </div>

    )
}

export default Content