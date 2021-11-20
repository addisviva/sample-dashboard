import React, {useState} from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'
import Search from './Search'

function Banner() {
    
    const [showSearch, setShowSearch] = useState(false);
    
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search /> }
                <Button onClick={()=>setShowSearch(!showSearch)} 
                       className="banner__searchButton"
                         variant= 'outlined' >
                             Search Dates
                </Button>
            </div>
            
        </div>
    )
}

export default Banner
