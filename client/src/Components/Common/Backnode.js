import React, { useEffect, useState } from 'react'

function Backnode() {
    
    const [initialState, setInitialState]= useState([])
    
    useEffect(() => {
     fetch('/api/').then(res => {
         if (res.ok){
             return res.json()
         }
     }).then(jsonResponse => setInitialState(jsonResponse))
    }, [])
   
    
    return (
        <div>
            
        </div>
    )
}

export default Backnode
