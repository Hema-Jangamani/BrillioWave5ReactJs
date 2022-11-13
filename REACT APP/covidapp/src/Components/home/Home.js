import React,{useEffect, useState} from 'react'
import CountryCard from '../card/CountryCard';

export default function Home() {
    const [content, setContent] = useState([]);
    useEffect(() => {
       fetch('https://corona.lmao.ninja/v2/countries')
       .then(res=>res.json())
       .then(data=>{
            setContent(data);
       });
    }, [])
    return (
        <div>
            <div data-testid="one" className="container mt-3">
                <div data-testid="two" className="row">
                    {
                        content.map((country, i) =>
                            <CountryCard key={i}
                                flag={country.countryInfo.flag}
                                country={country.country}
                                cases={country.cases}
                                active={country.active}
                                deaths={country.deaths} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
