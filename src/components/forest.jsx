import { useEffect, useState } from "react"
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import './forest.css'

export const Forests = ({data}) => {

    const [forestData, setForestData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === 0 ? forestData.length - 1 : prevIdx - 1;
        })
    }

    const handleNext = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === forestData.length - 1 ? 0 : prevIdx + 1
        })
    }

    useEffect(() => {
        setForestData(data.forests || []);
    }, [data])

    const currentForest = forestData[currentIndex];

    return (<>
        <div className="forest-card all-card-outer-blur">
            <div className="forest-card-left all-card-left">
                {currentForest && (
                    <> 
                        <img src={currentForest.image_url} alt={currentForest.name} />
                        <h1>{currentForest.name} </h1>
                        <p><span>Location : </span>{currentForest.location}</p>
                        <p><span>Type : </span> {currentForest.type}</p>
                        <div className="topNo">
                            <span>Top </span> {currentForest.toplist}
                        </div>
                    </>
                )}
            </div>
            <div className="forest-card-right all-card-right">
                {currentForest && (
                    <> 
                        <p><span>Famous for : </span>{currentForest.famous_for}</p>
                        <p><span>Land : </span>{currentForest.land_area_sq_km} square km</p>
                        <p><span>Climate : </span>{currentForest.climate}</p>
                        <p><span>Vegetation type : </span>{currentForest.vegetation_type}</p>
                        <p><span>Wildlife : </span>{currentForest.wildlife}</p>
                        <p><span>Specialities : </span>{currentForest.specialities}</p>
                    </>
                )}
            </div>
        </div>

        <div className="button-group">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="prevBtn1"><GrPrevious/></button>
            <button onClick={handleNext} disabled={currentIndex === forestData.length - 1} className="nextBtn1"><GrNext/></button>
        </div>
    </>)
}

export const Rivers = ({data}) => {

    const [riverData, setRiverData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === 0 ? riverData.length - 1 : prevIdx - 1;
        })
    }

    const handleNext = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === riverData.length - 1 ? 0 : prevIdx + 1
        })
    }

    useEffect(() => {
        setRiverData(data.rivers || []);
    }, [data])

    const currentRiver = riverData[currentIndex];

    return (<>
        <div className="forest-card all-card-outer-blur">
            <div className="forest-card-left all-card-left">
                {currentRiver && (
                    <> 
                        <img src={currentRiver.image_url} alt={currentRiver.name} />
                        <h1>{currentRiver.name} </h1>
                        <p><span>Location : </span>{currentRiver.location}</p>
                        <p><span>Length : </span> {currentRiver.length_km} km</p>
                        <div className="topNo">
                            <span>Top </span> {currentRiver.toplist}
                        </div>
                    </>
                )}
            </div>
            <div className="forest-card-right all-card-right">
                {currentRiver && (
                    <> 
                        <p><span>born : </span>{currentRiver.born}</p>
                        <p><span>Ending Place : </span> {currentRiver.ending_place}</p>
                        <p><span>Famous for : </span>{currentRiver.famous_for}</p>
                        <p><span>Countries Passed : </span>{currentRiver.countries_passed} </p>
                    </>
                )}
            </div>
        </div>

        <div className="button-group">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="prevBtn1"><GrPrevious/></button>
            <button onClick={handleNext} disabled={currentIndex === riverData.length - 1} className="nextBtn1"><GrNext/></button>
        </div>
    </>)
}


export const Natures = ({data}) => {

    const [natureData, setNatureData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === 0 ? natureData.length - 1 : prevIdx - 1;
        })
    }

    const handleNext = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === natureData.length - 1 ? 0 : prevIdx + 1
        })
    }

    useEffect(() => {
        setNatureData(data.nature || []);
    }, [data])

    const currentNature = natureData[currentIndex];

    return (<>
        <div className="forest-card all-card-outer-blur">
            <div className="forest-card-left all-card-left">
                {currentNature && (
                    <> 
                        <img src={currentNature.image_link} alt={currentNature.name} />
                        <h1>{currentNature.name} </h1>
                        <p><span>Location : </span>{currentNature.location}</p>
                        <div className="topNo">
                            <span>Top </span> {currentNature.toplist}
                        </div>
                    </>
                )}
            </div>
            <div className="forest-card-right all-card-right">
                {currentNature && (
                    <> 
                        <p><span>Reason For Best Nature : </span>{currentNature.reason_for_best_nature}</p>
                        <p><span>Famous For : </span> {currentNature.famous_for}</p>
                        <p><span>Wonder_Details : </span>{currentNature.wonder_details} </p>
                    </>
                )}
            </div>
        </div>

        <div className="button-group">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="prevBtn1"><GrPrevious/></button>
            <button onClick={handleNext} disabled={currentIndex === natureData.length - 1} className="nextBtn1"><GrNext/></button>
        </div>
    </>)
}

export const Wonders = ({data}) => {

    const [wonderData, setWonderData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === 0 ? wonderData.length - 1 : prevIdx - 1;
        })
    }

    const handleNext = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === wonderData.length - 1 ? 0 : prevIdx + 1
        })
    }

    useEffect(() => {
        setWonderData(data.wonders || []);
    }, [data])

    const currentWonder = wonderData[currentIndex];

    return (<>
        <div className="forest-card all-card-outer-blur">
            <div className="forest-card-left all-card-left">
                {currentWonder && (
                    <> 
                        <img src={currentWonder.image_url} alt={currentWonder.name} />
                        <h1>{currentWonder.name} </h1>
                        <p><span>Location : </span>{currentWonder.location}</p>
                        <p><span>Area : </span>{currentWonder.area}</p>
                        <div className="topNo">
                            <span>Top </span> {currentWonder.toplist}
                        </div>
                    </>
                )}
            </div>
            <div className="forest-card-right all-card-right">
                {currentWonder && (
                    <> 
                        <p><span>Built : </span>{currentWonder.built}</p>
                        <p><span>Architecture : </span>{currentWonder.architecture}</p>
                        <p><span>Style : </span> {currentWonder.style}</p>
                        <p><span>Culture : </span>{currentWonder.culture} </p>
                        <p><span>Purpose of Built : </span>{currentWonder.purpose_of_built} </p>
                    </>
                )}
            </div>
        </div>

        <div className="button-group">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="prevBtn1"><GrPrevious/></button>
            <button onClick={handleNext} disabled={currentIndex === wonderData.length - 1} className="nextBtn1"><GrNext/></button>
        </div>
    </>)
}

export const Countries = ({data}) => {

    const [countryData, setCountryData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === 0 ? countryData.length - 1 : prevIdx - 1;
        })
    }

    const handleNext = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === countryData.length - 1 ? 0 : prevIdx + 1
        })
    }

    useEffect(() => {
        setCountryData(data.countries || []);
    }, [data])

    const currentCountry = countryData[currentIndex];

    return (<>
        <div className="forest-card all-card-outer-blur">
            <div className="forest-card-left all-card-left">
                {currentCountry && (
                    <> 
                        <img src={currentCountry.image_url} alt={currentCountry.name} />
                        <h1>{currentCountry.name} </h1>
                        <p><span>Capital : </span>{currentCountry.capital}</p>
                        <p className="gdp-per-capita"><span>Population : </span>{currentCountry.population} <span>Land : </span>{currentCountry.land_in_sq_km} square km</p>
                        <p className="gdp-per-capita"><span>GDP : </span>{currentCountry.gdp} <span>Per Capita : </span>{currentCountry.per_capita}</p>
                        <div className="topNo">
                            <span>Top </span> {currentCountry.id}
                        </div>
                    </>
                )}
            </div>
            <div className="forest-card-right all-card-right">
                {currentCountry && (
                    <> 
                        <p><span>Toplist : </span>{currentCountry.toplist}</p>
                        <p><span>Largest City : </span> {currentCountry.largest_city}</p>
                        <p><span>Top Visiting Places : </span>{currentCountry.famous_visiting_places} </p>
                        <p><span>Longest Riveres : </span>{currentCountry.longest_rivers} </p>
                        <p><span>Airports : </span>{currentCountry.number_of_airports} </p>
                        <p><span>Road Length : </span>{currentCountry.road_length_km} </p>
                        <p><span>Train Track Length : </span>{currentCountry.train_length_km} </p>
                    </>
                )}
            </div>
        </div>

        <div className="button-group">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="prevBtn1"><GrPrevious/></button>
            <button onClick={handleNext} disabled={currentIndex === countryData.length - 1} className="nextBtn1"><GrNext/></button>
        </div>
    </>)
}


export const Affluents = ({ data }) => {
    const [affluentsData, setAffluentsData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIdx) => 
            prevIdx === 0 ? affluentsData.length - 1 : prevIdx - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIdx) => 
            prevIdx === affluentsData.length - 1 ? 0 : prevIdx + 1
        );
    };

    useEffect(() => {
        setAffluentsData(data.affluents || []);
    }, [data]);

    const currentAffluents = affluentsData[currentIndex];

    return (
        <>
            <div className="forest-card all-card-outer-blur">
                <div className="forest-card-left all-card-left">
                    {currentAffluents && (
                        <> 
                            <img 
                                src={currentAffluents.image_url} 
                                alt={currentAffluents.name} 
                            />
                            <h1>{currentAffluents.name}</h1>
                            <p><span>Business : </span>{currentAffluents.business}</p>
                            <div className="topNo">
                                <span>Top </span>{currentAffluents.toplist}
                            </div>
                        </>
                    )}
                </div>
                <div className="forest-card-right all-card-right">
                    {currentAffluents && (
                        <>
                            <p><span>Age : </span>{currentAffluents.age}</p>
                            <p><span>Education : </span>{currentAffluents.education}</p>
                            <p><span>Networth : </span>{currentAffluents.networth}</p>
                            <p><span>From : </span>{currentAffluents.country}</p>
                            <p><span>Company : </span>{currentAffluents.company}</p>
                        </>
                    )}
                </div>
            </div>

            <div className="button-group">
                <button 
                    onClick={handlePrev} 
                    disabled={currentIndex === 0} 
                    className="prevBtn1"
                >
                    <GrPrevious />
                </button>
                <button 
                    onClick={handleNext} 
                    disabled={affluentsData.length === 0 || currentIndex === affluentsData.length - 1} 
                    className="nextBtn1"
                >
                    <GrNext />
                </button>
            </div>
        </>
    );
};


export const Space = ({data}) => {

    const [spaceData, setSpaceData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === 0 ? spaceData.length - 1 : prevIdx - 1;
        })
    }

    const handleNext = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === spaceData.length - 1 ? 0 : prevIdx + 1
        })
    }

    useEffect(() => {
        setSpaceData(data.space_missions || []);
    }, [data])

    const currentSpace = spaceData[currentIndex];

    return (<>
        <div className="forest-card all-card-outer-blur">
            <div className="forest-card-left all-card-left">
                {currentSpace && (
                    <> 
                        <img src={currentSpace.image_url} alt={currentSpace.name} />
                        <h1>{currentSpace.name} </h1>
                        <p className="gdp-per-capita"><span>Lanch Date : </span>{currentSpace.launch_date} <span>Budget : </span>{currentSpace.total_money_for_project}</p>
                        <p><span>Mission Type : </span>{currentSpace.mission_type}</p>
                        <div className="topNo">
                            <span>Top </span> {currentSpace.id}
                        </div>
                    </>
                )}
            </div>
            <div className="forest-card-right all-card-right">
                {currentSpace && (
                    <> 
                        <p><span>Lanching Organigation : </span>{currentSpace.launching_space_company}</p>
                        <p><span>Launch Mass : </span>{currentSpace.launch_mass}</p>
                        <p><span>Mission Duration : </span> {currentSpace.mission_duration}</p>
                        <p><span>Speed : </span>{currentSpace.speed_of_satellite} </p>
                        <p><span>Purpose : </span>{currentSpace.purpose} </p>
                        <p><span>Achievements : </span>{currentSpace.achievements} </p>
                    </>
                )}
            </div>
        </div>

        <div className="button-group">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="prevBtn1"><GrPrevious/></button>
            <button onClick={handleNext} disabled={currentIndex === spaceData.length - 1} className="nextBtn1"><GrNext/></button>
        </div>
    </>)
}


export const University = ({data}) => {

    const [universityData, setUniversityData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === 0 ? universityData.length - 1 : prevIdx - 1;
        })
    }

    const handleNext = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === universityData.length - 1 ? 0 : prevIdx + 1
        })
    }

    useEffect(() => {
        setUniversityData(data.universities || []);
    }, [data])

    const currentUniversity = universityData[currentIndex];

    return (<>
        <div className="forest-card all-card-outer-blur">
            <div className="forest-card-left all-card-left">
                {currentUniversity && (
                    <> 
                        <img src={currentUniversity.image_url} alt={currentUniversity.name} />
                        <h1>{currentUniversity.name} </h1>
                        <p><span>Location : </span>{currentUniversity.location}</p>
                        <div className="topNo">
                            <span>Top </span> {currentUniversity.world_rank}
                        </div>
                    </>
                )}
            </div>
            <div className="forest-card-right all-card-right">
                {currentUniversity && (
                    <> 
                        <p><span>Students : </span>{currentUniversity.students}</p>
                        <p><span>Notable Alumni : </span>{currentUniversity.notable_alumni}</p>
                        <p><span>Acceptance Rate : </span> {currentUniversity.acceptance_rate}</p>
                        <p><span>Nobel Laureates : </span>{currentUniversity.nobel_laureates} </p>
                    </>
                )}
            </div>
        </div>

        <div className="button-group">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="prevBtn1"><GrPrevious/></button>
            <button onClick={handleNext} disabled={currentIndex === universityData.length - 1} className="nextBtn1"><GrNext/></button>
        </div>
    </>)
}


export const Airports = ({data}) => {

    const [airportsData, setAirportsData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === 0 ? airportsData.length - 1 : prevIdx - 1;
        })
    }

    const handleNext = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === airportsData.length - 1 ? 0 : prevIdx + 1
        })
    }

    useEffect(() => {
        setAirportsData(data.airports || []);
    }, [data])

    const currentAirport = airportsData[currentIndex];

    return (<>
        <div className="forest-card all-card-outer-blur">
            <div className="forest-card-left all-card-left">
                {currentAirport && (
                    <> 
                        <img src={currentAirport.image_url} alt={currentAirport.name} />
                        <h1>{currentAirport.name} </h1>
                        <p><span>Location : </span>{currentAirport.location}</p>
                        <p><span>Code : </span>{currentAirport.code}</p>
                        <div className="topNo">
                            <span>Top </span> {currentAirport.rank}
                        </div>
                    </>
                )}
            </div>
            <div className="forest-card-right all-card-right">
                {currentAirport && (
                    <> 
                        <p><span>Passanger Traffic : </span>{currentAirport.passenger_traffic}</p>
                        <p><span>Features : </span>{currentAirport.features}</p>
                        <p><span>Awards : </span> {currentAirport.awards}</p>
                        <p><span>Connectivity : </span>{currentAirport.connectivity} </p>
                        <p><span>Customer Rating : </span>{currentAirport.customer_rating} </p>
                        <p><span>Sustainability : </span>{currentAirport.sustainability} </p>
                    </>
                )}
            </div>
        </div>

        <div className="button-group">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="prevBtn1"><GrPrevious/></button>
            <button onClick={handleNext} disabled={currentIndex === airportsData.length - 1} className="nextBtn1"><GrNext/></button>
        </div>
    </>)
}


export const Planets = ({data}) => {

    const [planetsData, setPlanetsData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === 0 ? planetsData.length - 1 : prevIdx - 1;
        })
    }

    const handleNext = () => {
        setCurrentIndex((prevIdx) => {
            return prevIdx === planetsData.length - 1 ? 0 : prevIdx + 1
        })
    }

    useEffect(() => {
        setPlanetsData(data.planets || []);
    }, [data])

    const currentPlanets = planetsData[currentIndex];

    return (<>
        <div className="forest-card all-card-outer-blur">
            <div className="forest-card-left all-card-left">
                {currentPlanets && (
                    <> 
                        <img src={currentPlanets.image_url} alt={currentPlanets.name} />
                        <h1>{currentPlanets.name} </h1>
                        <p><span>Diameter : </span>{currentPlanets.diameter}</p>
                        <p><span>Mass : </span>{currentPlanets.mass}</p>
                        <p><span>Gravity : </span>{currentPlanets.gravity}</p>
                        <div className="topNo">
                            {currentPlanets.id}
                        </div>
                    </>
                )}
            </div>
            <div className="forest-card-right all-card-right">
                {currentPlanets && (
                    <>
                        <p><span>Day Length : </span>{currentPlanets.day_length} </p>
                        <p><span>Year Length : </span> {currentPlanets.year_length} </p>
                        <p><span>Average Temp : </span>{currentPlanets.average_temp} </p>
                        <p><span>Moons : </span>{currentPlanets.moons} </p>
                        <p><span>Distance from Sun : </span>{currentPlanets.distance_from_sun} </p>
                        <p><span>Atmosphere : </span>{currentPlanets.atmosphere} </p>
                    </>
                )}
            </div>
        </div>

        <div className="button-group">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="prevBtn1"><GrPrevious/></button>
            <button onClick={handleNext} disabled={currentIndex === planetsData.length - 1} className="nextBtn1"><GrNext/></button>
        </div>
    </>)
}