import React from 'react';

function Header() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if(hours < 12) //12am-11:59am
        timeOfDay = "morning";
    else if(hours >= 12 && hours < 17) //12-5pm
        timeOfDay = "afternoon";
    else
        timeOfDay = "night";

        
    return (
        <div>
            <header className="navbar">
                Good {timeOfDay}!               
            </header>
        </div>
    );
}

export default Header;