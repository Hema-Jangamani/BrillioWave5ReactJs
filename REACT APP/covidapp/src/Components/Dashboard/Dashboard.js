import React, { useEffect, useState } from "react";
//import CountryCard from "../card/CountryCard";
import Card_M from "../Card_M/Card_M";
export default function Dashboard({ searchVal }) {
  const [inputCountry, setInputCountry] = useState([]);
  useEffect(() => {
    console.log(searchVal);
    if (searchVal === "") return;
    fetch(`https://corona.lmao.ninja/v2/countries/${searchVal}`)
      .then((res) => res.json())
      .then((data) => {
        inputCountry.push(data);
        console.log("inputCountry = ", inputCountry);
        let arr = [...inputCountry];
        setInputCountry(arr);
      });
  }, [searchVal]);

  return (
    <>
      {inputCountry.map((country, i) => (
        <Card_M
          key={i}
          flag={country.countryInfo.flag}
          country={country.country}
          cases={country.cases}
          active={country.active}
          deaths={country.deaths}
        />
      ))}
    </>
    // <div data-testid="one" className="container mt-3">
    //   <div data-testid="two" className="row">
    //     {inputCountry.map((country, i) => (
    //       <CountryCard
    //         key={i}
    //         flag={country.countryInfo.flag}
    //         country={country.country}
    //         cases={country.cases}
    //         active={country.active}
    //         deaths={country.deaths}
    //       />
    //     ))}
    //   </div>
    // </div>
  );
}
