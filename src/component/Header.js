import React from 'react';

function Header() {
    const date = new Date();
    const hours = date.getHours();
    
    const styles = {
        fontSize: 36}

    let timeOfDay;

    if(hours < 12) { //12am-11:59am
        timeOfDay = "morning";
        styles.color = "#E3E38A";
        styles.backgroundColor = "#8ABDE3";
    }
    else if(hours >= 12 && hours < 17) { //12-5pm
        timeOfDay = "afternoon";
        styles.color = "white";
        styles.backgroundColor = "blue";
    }
    else {
        timeOfDay = "night";
        styles.color = "white";
        styles.backgroundColor = "black";
    }

    return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
    );
}

export default Header;