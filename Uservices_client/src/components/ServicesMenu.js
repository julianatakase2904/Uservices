import React from "react";
import petServices from '../assets/PetServices.jpg';
import applianceRepair from '../assets/ApplianceRepair.jpg';
import housekeep from '../assets/Housekeep.jpg';
import houseRepair from '../assets/HouseRepair.jpg';
import beauty from '../assets/Beauty.jpg';
import personalCare from '../assets/PersonalCare.jpg';
import healthCare from '../assets/HealthCare.jpg';
import others from '../assets/Others.jpg';

export default function ServicesMenu() {
    return (
        <div className="w3-row w3-grayscale" style={{ marginTop: '0px' }}>
        <div className="w3-col l3 s6">
          <div className="w3-container">
            <div className="w3-display-container">
              <img src={petServices} style={{width: '100%'}} alt="PetServices"/>
              <div className="w3-display-middle w3-display-hover">
                <a href="/browseServiceProviders"><button className="w3-button w3-black">Search<i className="fa fa-shopping-cart" /></button></a>
              </div>
            </div>
            <p>Pet Services</p>
          </div>
          <div className="w3-container">
            <div className="w3-display-container">
              <img src={applianceRepair} style={{width: '100%'}} alt="ApplianceRepair" />
              <div className="w3-display-middle w3-display-hover">
              <a href="/browseServiceProviders"><button className="w3-button w3-black">Search<i className="fa fa-shopping-cart" /></button></a>
              </div>
            </div>
            <p>Appliances Repair</p>
          </div>
        </div>
        <div className="w3-col l3 s6">
          <div className="w3-container">
            <div className="w3-display-container">
              <img src={housekeep} style={{width: '100%'}} alt="Housekeep" />
              <span className="w3-tag w3-display-topleft">New</span>
              <div className="w3-display-middle w3-display-hover">
              <a href="/browseServiceProviders"><button className="w3-button w3-black">Search<i className="fa fa-shopping-cart" /></button></a>
              </div>
            </div>
            <p>Housekeep</p>
          </div>
          <div className="w3-container">
            <div className="w3-display-container">
              <img src={houseRepair} style={{width: '100%'}} alt="HouseRepair" />
              <div className="w3-display-middle w3-display-hover">
              <a href="/browseServiceProviders"><button className="w3-button w3-black">Search<i className="fa fa-shopping-cart" /></button></a>
              </div>
            </div>    
            <p>House Repair</p>
          </div>
        </div>
        <div className="w3-col l3 s6">
          <div className="w3-container">
            <div className="w3-display-container">
              <img src={beauty} style={{width: '100%'}} alt="Beauty" />
              <div className="w3-display-middle w3-display-hover">
              <a href="/browseServiceProviders"><button className="w3-button w3-black">Search<i className="fa fa-shopping-cart" /></button></a>
              </div>
            </div> 
            <p>Beauty</p>
          </div>
          <div className="w3-container">
            <div className="w3-display-container">
              <img src={personalCare} style={{width: '100%'}} alt="PersonalCare" />
              <div className="w3-display-middle w3-display-hover">
              <a href="/browseServiceProviders"><button className="w3-button w3-black">Search<i className="fa fa-shopping-cart" /></button></a>
              </div>
            </div>
            <p>Personal Care Assistance</p>
          </div>
        </div>
        <div className="w3-col l3 s6">
          <div className="w3-container">
            <div className="w3-display-container">
              <img src={healthCare} style={{width: '100%'}} alt="HealthCare" />
              <div className="w3-display-middle w3-display-hover">
              <a href="/browseServiceProviders"><button className="w3-button w3-black">Search<i className="fa fa-shopping-cart" /></button></a>
              </div>
            </div>
            <p>Health Care</p>
          </div>
          <div className="w3-container">
            <div className="w3-display-container">
              <img src={others} style={{width: '100%'}} alt="Others" />
              <div className="w3-display-middle w3-display-hover">
              <a href="/browseServiceProviders"><button className="w3-button w3-black">Search<i className="fa fa-shopping-cart" /></button></a>
              </div>
            </div>
            <p>Other Services</p>
          </div>
        </div>
      </div>
    )
}