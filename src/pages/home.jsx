import {NavLink} from 'react-router-dom'
import { GiWorld } from "react-icons/gi";
import './home.css'
import wonders from './indiaWonder.json'

export const Home = () => {
    return (<>
        <div className="home-container">
            <div className="hero-section">
                <img src="/world5.gif" alt="worldMap" />
                <p>"Discover New Cultures, Breathtaking Landscapes, and Unforgettable Adventures!"
                    <NavLink to='/country' className="navLink">
                        <button>countries <GiWorld/></button>
                    </NavLink>
                </p>
            </div>
            <div className="wonder-cards">
                    <h1>Wonders of India</h1>
                    <ul className='wonder-ul'>
                        {wonders?.india_wonders.map((wonder) => {
                            return <div key={wonder.id} className='wonder-card'>
                                <img src={wonder.image_url} alt={wonder.name} height="100" width="100"/>
                                <h2>{wonder.name}</h2>
                                <p className='locate'><span>Location : {wonder.location}</span></p>
                                <p><span>Built year : {wonder.year_built}</span></p>
                                <span>category : {wonder.category}</span>
                            </div>
                        })}
                    </ul>
            </div>
        </div>
        <div className="foot">
            copy right 2024 by sunspeed [all rights reserved]
        </div>
    </>)
}