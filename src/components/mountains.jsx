import { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import './mountains.css';


export const Mountains = ({ data }) => {
    const [mountData, setMountData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setMountData(data.mountains || []);
    }, [data]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === mountData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? mountData.length - 1 : prevIndex - 1
        );
    };

    if (!mountData.length) {
        return <p>No mountains available</p>;
    }

    const currentMount = mountData[currentIndex];

    return (<>
    
        <div className="tops-card" key={currentMount.id}>
            <div className="mountain-card-left all-card-left">
                <img src={currentMount.image_url} alt={currentMount.name} />
                <h1>{currentMount.name}</h1>
                <p><span>Location : </span> {currentMount.location}</p>
                <p><span>Height :</span> {currentMount.height}</p>
            </div>
            <div className="mountain-card-right all-card-right">
                <p><span>Top List : </span> {currentMount.toplist}</p>
                <p><span>Type : </span> {currentMount.type}</p>
                <p><span>About Mountain : </span> {currentMount.aboutMountain}</p>
                <ul>Specialities :-
                    {Object.entries(currentMount.specialities || {}).map(([key, value]) => (
                        <p key={key}><span> {key} : </span> {value}</p>
                    ))}
                </ul>
            </div>
        </div>
        
        <div className="button-group">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="prevBtn1"><GrPrevious/></button>
            <button onClick={handleNext} disabled={currentIndex === mountData.length - 1} className="nextBtn1"><GrNext/></button>
        </div>
        
    </>);
};

export const ShowCard = ({data}) => {

    const [heroData, setHeroData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setHeroData(data.hero || []);
    }, [data]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === heroData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? heroData.length - 1 : prevIndex - 1
        );
    };
    useEffect(() => {
        const interval = setTimeout(() => {
            handleNext()
        }, 3000);
        return () => clearTimeout(interval);
    })

    if (!heroData.length) {
        return <p>No Hero Section Available</p>;
    }

    const currentHero = heroData[currentIndex];

    return (
        <> 
            <div className="hero-card all-card-outer-blur">
                <h1>{currentHero.name}</h1>
                <img src={currentHero.image_url} alt={currentHero.name} />
            </div>
            
            <div className="button-group">
                <button onClick={handlePrev} disabled={currentIndex === 0} className="prevBtn1"><GrPrevious/></button>
                <button onClick={handleNext} disabled={currentIndex === heroData.length - 1} className="nextBtn1"><GrNext/></button>
            </div>
        </>
    );
};
