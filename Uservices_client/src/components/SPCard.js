import React from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const SPCard = (props) => {

    const { companyName, description , price, availability} = props.serviceProvider

    return (
        <div className="sp-card-container" style={{backgroundColor: "white"}}>
            <div className="sp-card" >
                <h2><b>Company Name : </b>{companyName} </h2>
                <p><b>Description : </b>{description} </p>
                <p><b>Price : $</b>{parseFloat(price).toFixed(2)}</p>
                <p><b>Availability : </b>{availability}</p>
                <div className="clear"></div>
                <div>
                    <p>Rate:<Rater rating={2} total={5} /></p>
                </div>
            </div>
        </div>
    )
}

export default SPCard