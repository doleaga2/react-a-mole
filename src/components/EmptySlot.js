// This will represent an empty molehill or an invalid location to click
import {useEffect} from 'react'
import molehill from "../molehill.png"

function EmptySlot(props){
    useEffect(() => {
        
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img 
            src={molehill}></img>
            
        </div>
    )
}


export default EmptySlot;