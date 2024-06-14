import React from 'react'

const Component1 = () => {
    /*return ( //oppure ritornare un <React.Fragment> con all'interno i h2
        <div>
            <h2>Ciao</h2>
            <h3>Ciao ciao</h3>
        </div>
    )
    */

    /*return React.createElement("div",
        {},
        React.createElement('h2', {}, "sono dentro un div")
    );
    */

    //Nota bene: devono essere chiusi tutti i tag. Ad es, in html <input> non va chiuso, qui si!

    return <section>
        <Saluto/>
    </section>;
};

const Persona = () => {
    return <h2>First card</h2>
}
const Messaggio = () => <h4>I am a card</h4>;
const Saluto = () =>{
    return(
        <React.Fragment>
            <Persona/>
            <Messaggio></Messaggio>
        </React.Fragment>
    );
}

export default Component1
