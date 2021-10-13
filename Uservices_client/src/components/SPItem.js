import React from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const SPItem = (props) => {

    const { companyName, profileImages, price, availability } = props.serviceProvider
    const SPimage = profileImages[0];

    return (
        <div className="sp-item-container">
            <div className="sp-item" onClick={() => props.handleSPView(props.serviceProvider)}  style={{backgroundColor: "white"}}>
                <div className="sp-img-div">
                    <img className="sp-img" src={`/uploads/${SPimage}`} alt={companyName} />
                </div>
                <div className="dog-info" >
                    <h2 style={{paddingTop: "20px"}}>{companyName} </h2>
                    <p><strong>Price: </strong>${parseFloat(price).toFixed(2)} per hour</p> 
                    <p><strong>Availability: </strong>{availability}</p>
                </div>
                <p>Rate:<Rater rating={2} total={5} interactive={false} /></p>
                <div className="clear"></div>
            </div>
        </div>
    )
}

export default SPItem
