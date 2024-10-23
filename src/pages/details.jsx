import { useLoaderData } from "react-router-dom"
import {detailsFetch} from '../components/api'
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import './details.css';

export const Details = () => {

    const navigate = useNavigate()
    const data = useLoaderData();
    const currencyCode = Object.keys(data[0].currencies)[0];
    const currency = data[0].currencies[currencyCode];

    const handleBackClick = () => {
        navigate(-1);
    }

    return(<>
        <div className="detBox">
            <img src={data[0].flags.svg} alt={data[0].name.common} />
            <div className="detCard">
                <p><span className="spn">Name : </span>{data[0].name.common}</p>
                <p><span className="spn">Capital : </span>{data[0].capital[0]}</p>
                <div className="langBox">
                    <p>Languages:</p>
                    <ul className="lang">
                        {data[0]?.languages &&
                            Object.entries(data[0].languages).slice(0, 3).map(([key, value], idx) => 
                                <span key={idx} className="spn"> 
                                    {value}{idx < 2 && ", "}
                                </span>
                            )
                        }
                    </ul>
                </div>
                <p><span className="spn">Continent : </span>{data[0].continents}</p>
                <p><span className="spn">Population : </span>{data[0].population}</p>
                <p>
                    <span className="spn">Currency Name: </span> {currency.name}, 
                    <span className="spn">Symbol : </span> " {currency.symbol} "
                </p>
                <div className="borders">
                    <span className="spn">Borders : </span>
                    <ul className="borderUl">
                        {data[0].borders?.map((curr, idx) => {
                            return <p key={idx} > {curr}, </p>
                        })}
                    </ul>
                </div>
            </div>
            <button onClick={handleBackClick} className="backBtn"><IoMdArrowRoundBack/></button>
        </div>
        <footer>
            copy right 2024 by sunspeed [all rights reserved]
        </footer>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    </>)
}

export const detailedCountry = async({params}) => {
    try {
        const name = params.name;
        const res = await detailsFetch(name);
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}          