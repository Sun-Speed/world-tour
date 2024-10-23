import { useEffect, useState } from 'react';
import {Mountains, ShowCard} from '../components/mountains';
import api from '../All_Api/mountain.json'
import './tops.css'
import { Affluents, Airports, Countries, Forests, Natures, Planets, Rivers, Space, University, Wonders } from '../components/forest';
import { Clock } from './clock';

export const Tops = () => {

    const [selectedTopic, setSelectedTopic] = useState('');
    const [width, setWidth] = useState(window.innerWidth);
    const [click, setClick] = useState(false);

    const handleResize = () => {
        setWidth(window.innerWidth); 
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        if(width >= 500){
            setClick(true)
        }else{
            setClick(false)
        }
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, [width]);

    const handleTopicChange = (topic) => setSelectedTopic(topic);

    const buttonMenu = () => {
        return (
            <div className={`opt ${click ? "flex-dis" : "flex-none"}`}>
                <button onClick={() => handleTopicChange('Mountains')}>Mountains</button>
                <button onClick={() => handleTopicChange('Forests')}>Forests</button>
                <button onClick={() => handleTopicChange('Rivers')}>Rivers</button>
                <button onClick={() => handleTopicChange('Natures')}>Natures</button>
                <button onClick={() => handleTopicChange('Wonders')}>Wonders</button>
                <button onClick={() => handleTopicChange('Countries')}>Countries</button> 
                <select onChange={(e) => handleTopicChange(e.target.value)} name="topics">
                    <option value="">Select Topic</option>
                    <option value="Affluents">Rich peoples</option>
                    <option value="Space">Space</option>
                    <option value="Universities">Universities</option>
                    <option value="Airports">Airports</option>
                    <option value="Planets">Planets</option>
                </select>
            </div>
        )
    }

    const options = () => {
        return (
            <select onChange={(e) => handleTopicChange(e.target.value)} name="topics">
                <option value="">Select Topic</option>
                <option value="Mountains">Mountains</option>
                <option value="Forests">Forests</option>
                <option value="Rivers">Rivers</option>
                <option value="Natures">Natures</option>
                <option value="Wonders">Wonders</option>
                <option value="Countries">Countries</option>
                <option value="Affluents">Rich peoples</option>
                <option value="Space">Space</option>
                <option value="Universities">Universities</option>
                <option value="Airports">Airports</option>
                <option value="Planets">Planets</option>
            </select>
        )
    }
    
    const renderCards = () => {
        switch (selectedTopic) {
            case "Mountains":
              return <Mountains data={api} />;
          
            case "Forests":
              return <Forests data={api} />;
          
            case "Rivers":
              return <Rivers data={api} />;
          
            case "Natures":
              return <Natures data={api} />;
          
            case "Wonders":
              return <Wonders data={api} />;
          
            case "Countries":
              return <Countries data={api} />;
          
            case "Affluents":
              return <Affluents data={api} />;
          
            case "Space":
              return <Space data={api} />;
          
            case "Universities":
              return <University data={api} />;
          
            case "Airports":
              return <Airports data={api} />;
          
            case "Planets":
              return <Planets data={api} />;
          
            default:
              return <ShowCard data={api} />;
          }
    }

    return (<>
        
        <div className="topics">
            
            {width <= 500 ? options() : buttonMenu()}
        </div>
        <Clock/>
        <div className="render">
            
            <section className="card-section">
                <div className="tops-container">
                    {renderCards()}  
                </div>
            </section>
        </div>
        <div className="tops-footer">
            
            <p>copy right 2024 by sunspeed [all rights reserved]</p>
        </div>
    </>)
}