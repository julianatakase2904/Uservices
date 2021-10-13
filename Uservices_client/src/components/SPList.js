import React from 'react'
import SPItem from './SPItem'

const SPList = (props) => {

    return (
        <>
            <label style={{ fontWeight: "bold" }} htmlFor="search">Search by name </label>
            <input type="text" className="w3-input w3-border" value={props.inputValue} onChange={props.SPFilterOnChange} />
            <div >
                <br />
                {
                    props.serviceProviders.map(serviceProvider => {
                        return <SPItem serviceProvider={serviceProvider} key={serviceProvider.id} handleSPView={props.handleSPView} />
                    })
                }
            </div>
        </>
    )
}

export default SPList