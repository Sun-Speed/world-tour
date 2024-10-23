import { useEffect, useState } from "react";
import { getCountry } from '../components/api.jsx';
import { NavLink } from "react-router-dom";
import './country.css'

export const Country = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState(""); 
    const [sortedData, setSortedData] = useState([]);
    const [continentData, setContinentData] = useState("");

    const getCountryData = async () => {
        const res = await getCountry();
        setData(res.data);
        setSortedData(res.data);
        
    };
    
    const handleAscendingBtn = () => {
        const sorted = [...sortedData].sort((a, b) => a.name.common.localeCompare(b.name.common));
        setSortedData(sorted);
    };

    const handleDescendingBtn = () => {
        const sorted = [...sortedData].sort((a, b) => b.name.common.localeCompare(a.name.common));
        setSortedData(sorted);
    };

    const handleSelectionChange = (value) => {
        setContinentData(value);
        

        const sortedContinent = data.filter((curr) => curr.continents.includes(value));
        setSortedData(sortedContinent);

        if(value === "Select Continent"){
            setSortedData(data);
        }
    }
    
    useEffect(() => {
        getCountryData();
    }, []);

    let filterdCountry = sortedData.filter((curr) => curr.name.common.toLowerCase().includes(search.toLowerCase()))

    return (<>

        <div className="outer">
            
            <div className="search">
                <input type="text" placeholder="search country" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button className="a-z" onClick={handleAscendingBtn}>A to Z</button>
                <button className="a-z" onClick={handleDescendingBtn}>Z to A</button>
                <select 
                    name="continents" 
                    className="continent"
                    value={continentData} 
                    onChange={(e) => handleSelectionChange(e.target.value)}>

                    <option value="Select Continent">Select Continent</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                    <option value="North America">North America</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Oceania">Oceania</option>
                    <option value="South America">South America</option>
                </select>
            </div>
        </div>
        
        <div className="countries-box"> 
            <h1 className="country-heading">Countries List</h1>
            <ul>
                {filterdCountry.map((curr, index) => (
                    <div key={index}>
                        <h3>{curr.name.common}</h3>
                        <img src={curr.flags.svg} alt={curr.flags.svg}/>
                        <NavLink to={`/country/${curr.name.common}`}>
                            <button className="details">details</button>
                        </NavLink>
                    </div>
                ))}
            </ul>
        </div>
    </>);
};
