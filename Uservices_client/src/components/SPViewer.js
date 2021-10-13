import React from 'react'
import SPCard from './SPCard'

const SPViewer = (props) => {

    return (
        <div>
            <button onClick={props.handleSPGoBack}>Back</button>
            <SPCard serviceProvider={props.serviceProvider}
                handleSPGoBack={props.handleSPGoBack} />
        </div>
    )
}

export default SPViewer