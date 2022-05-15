import React from "react";

const Main = ({handleSelectChange, countries}) =>{
    return(
        <>
            <main>
                <h1>Birdsong-Natures Eurovision</h1>
                <p>We can look at migration patterns, breeding groups and hatching locations across the avian population to get a reminder that borders don't exist for birds. They can feed, move and breed wherever there is a viable location.  </p>
                <p>Birdsong can be heard in Ukraine amongst the Russian shells, in Ethopia and Yemen. It will be an ever present background to the political wrangling of events that celebrate and enforce borders and national identities. Starlings will sing behind the Eurovision in Milan and a falcon will call during the World Cup opening ceremoy.</p>
                <p> So enjoy birdsong, a constant and truely global sound, wherever you may be. Also this one is geese all the way down.</p>
                <h4>Where to listen:</h4>
                <select onChange={handleSelectChange}>
                
                    {countries.map(country => {
                        return <option key={country.location} value={country.url}>{country.location}</option>
                    })}
                    </select>
                
            </main>
        </>
    )
}

export default Main;