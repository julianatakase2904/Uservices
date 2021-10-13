import React from "react";
import dogWalker from '../assets/DogWalker.jpg';

export default function Carrosel() {
    return (
        <div className="w3-display-container w3-container" style={{  marginTop: '0px' }}>
            <img src={dogWalker} alt="DogWalker" style={{ width: '100%' }} />
            <div className="w3-display-topleft w3-text-white" style={{ padding: '24px 48px' }}>
                <h1 className="w3-jumbo w3-hide-small">All Services in One Place</h1>
                {/* <h1 class="w3-hide-small">PET SERVICES</h1> */}
                <p><a href="/browseServiceProviders" className="w3-button w3-black w3-padding-large w3-large">FIND A SERVICE</a></p>
            </div>
        </div>
    )
}