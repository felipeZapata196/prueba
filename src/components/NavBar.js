import React from "react";


export const NavBar = ()=>{
    const navbarStyles ={
        display:'flex',
        flexDirection: 'row',
        height: '80px',
        justifyContent: 'space-between',
        padding: '0 50px',
        boxShadow: '0 4px 4px rgb(0,0,0,0.1)'


    }
    return(
        <nav style={navbarStyles}>
            <div> 
                <p> Nav Bar</p>
            </div>
        </nav>  
    )
}