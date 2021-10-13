import React, { Component } from "react";
import PetServices2 from '../assets/PetServices2.jpg';
import HouseKeep2 from '../assets/Housekeep2.jpg';
import Beauty2 from '../assets/Beauty2.jpg';
import HealthCare2 from '../assets/HealthCare2.jpg';
import ApplianceRepair2 from '../assets/ApplianceRepair2.jpg';
import HouseRepair2 from '../assets/HouseRepair2.jpg';
import PersonalCare2 from '../assets/PersonalCare2.jpg';
import Others2 from '../assets/Others2.jpg';


class ServicesPage extends Component {

    render() {

        return (
            <div>
                <div className="w3-display-container w3-container">
                    <img src={PetServices2} alt="PetServices2" style={{ width: '100%' }} />
                    <div className="w3-display-topleft w3-text-white" style={{ padding: '24px 48px' }}>
                        <h1 className="w3-jumbo w3-hide-small">Pet</h1>
                        <p><a href="/pet" className="w3-button w3-black w3-padding-large w3-large">SEARCH</a></p>
                    </div>
                </div>
                <br />
                <div className="w3-display-container w3-container">
                    <img src={HouseKeep2} alt="LoginPic" style={{ width: '100%' }} />
                    <div className="w3-display-topleft w3-text-white" style={{ padding: '24px 48px' }}>
                        <h1 className="w3-jumbo w3-hide-small" >Housekeep</h1>
                        <p><a href="/housekeep" className="w3-button w3-black w3-padding-large w3-large">SEARCH</a></p>
                    </div>
                </div>
                <br />
                <div className="w3-display-container w3-container">
                    <img src={Beauty2} alt="LoginPic" style={{ width: '100%' }} />
                    <div className="w3-display-topleft w3-text-white" style={{ padding: '24px 48px' }}>
                        <h1 className="w3-jumbo w3-hide-small">Beauty</h1>
                        <p><a href="/beauty" className="w3-button w3-black w3-padding-large w3-large">SEARCH</a></p>
                    </div>
                </div>
                <br />
                <div className="w3-display-container w3-container">
                    <img src={ApplianceRepair2} alt="LoginPic" style={{ width: '100%' }} />
                    <div className="w3-display-topleft w3-text-white" style={{ padding: '24px 48px' }}>
                        <h1 className="w3-jumbo w3-hide-small">Appliances Repair</h1>
                        <p><a href="/applianceRepair" className="w3-button w3-black w3-padding-large w3-large">SEARCH</a></p>
                    </div>
                </div>
                <br />
                <div className="w3-display-container w3-container" >
                    <img src={HouseRepair2} alt="LoginPic" style={{ width: '100%' }} />
                    <div className="w3-display-topleft w3-text-white" style={{ padding: '24px 48px' }}>
                        <h1 className="w3-jumbo w3-hide-small">House Repair</h1>
                        <p><a href="/houseRepair" className="w3-button w3-black w3-padding-large w3-large">SEARCH</a></p>
                    </div>
                </div>
                <br />
                <div className="w3-display-container w3-container" >
                    <img src={PersonalCare2} alt="LoginPic" style={{ width: '100%' }} />
                    <div className="w3-display-topleft w3-text-white" style={{ padding: '24px 48px' }}>
                        <h1 className="w3-jumbo w3-hide-small">Personal Care</h1>
                        <p><a href="/personalCare" className="w3-button w3-black w3-padding-large w3-large">SEARCH</a></p>
                    </div>
                </div>
                <br />
                <div className="w3-display-container w3-container">
                    <img src={HealthCare2} alt="LoginPic" style={{ width: '100%' }} />
                    <div className="w3-display-topleft w3-text-white" style={{ padding: '24px 48px' }}>
                        <h1 className="w3-jumbo w3-hide-small">Health Care</h1>
                        <p><a href="/healthCare" className="w3-button w3-black w3-padding-large w3-large">SEARCH</a></p>
                    </div>
                </div>
                <br />
                <div className="w3-display-container w3-container" >
                    <img src={Others2} alt="LoginPic" style={{ width: '100%' }} />
                    <div className="w3-display-topleft w3-text-white" style={{ padding: '24px 48px' }}>
                        <h1 className="w3-jumbo w3-hide-small">Other Services</h1>
                        <p><a href="/otherServices" className="w3-button w3-black w3-padding-large w3-large">SEARCH</a></p>
                    </div>
                </div>
                <br />
            </div>

        )
    }
}


export default ServicesPage;