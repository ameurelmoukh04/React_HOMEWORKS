import React from 'react'
import { useSelector } from 'react-redux';

const Lecteur = () => {

    const storedValues = useSelector((state) => state);
    let text = 'activee'
    storedValues.notifications==true ? text='activee': text="pas activee";


    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", width: "80%", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                <h1 style={{ width: "100%", display: "inline-block" }}>the current Language is :</h1>
                <h2>{storedValues.language}</h2>
            </div>

            <div style={{ display: "flex", flexDirection: "row", width: "80%", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                <h1 style={{ width: "100%", display: "inline-block" }}>the current Theme is :</h1>
                <h2>{storedValues.theme}</h2>
                
            </div>

            <div style={{ display: "flex", flexDirection: "row", width: "80%", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                <h1 style={{ width: "100%", display: "inline-block" }}>Notifications :</h1>
                <h2>{text}</h2>
            </div>
        </div>
    )
}

export default Lecteur