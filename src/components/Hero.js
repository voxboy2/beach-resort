import React from 'react'

export default function Hero ({children,hero}) {
    // we create two props children and hero..
    return(
        <header className={hero}>
            {children}
        </header>
    )
}


Hero.defaultProps = {
    hero: "defaultHero"
    // the hero here references the hero props passed in the header tag and curly brackets of the hero function
}

// we created a default props that can be used by default