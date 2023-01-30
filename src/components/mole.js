// This will represent a displayed mole.
import {useEffect} from 'react'
import mole from "../mole.png"

function Mole(props){
    useEffect(() => {
       
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img 
            src={mole}
            onClick={props.handleClick}></img>
        </div>
    )
}


export default Mole;