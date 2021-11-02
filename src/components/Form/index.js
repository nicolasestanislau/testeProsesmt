import React from 'react';
import './styles.css'

const Form = () => {

    function handleFormSubmit(event) {
        event.preventDefault();
    
        const data = new FormData(event.target);
    
        const formJSON = Object.fromEntries(data.entries());
    
        const results = document.querySelector('.results pre');
        results.innerText = JSON.stringify(formJSON, null, 2);
        console.log(formJSON)
    }
    
    const form = document.querySelector('.contact-form');

    return (
        <>
            <section className="contact-form">
                <h1>Formulário</h1>
                <p>Preencha todos os campos!</p>

                <form onSubmit={handleFormSubmit}>

                    <div className="input-group">
                        <label htmlFor="state">Estado</label>
                        <input id="state" name="state" required type="text" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="cases">Casos</label>
                        <input id="cases" name="cases" required type="number" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="deaths">Mortos</label>
                        <input id="deaths" name="deaths" required type="number" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="refuses">Recuperados</label>
                        <input id="refuses" name="refuses" required type="number" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="datetime">Data</label>
                        <input id="datetime" name="datetime" required type="datetime-local" />
                    </div>
                    <button type="submit" >Send It!</button>
                </form>
            </section>

            <div className="results">
                <h2>Form Data</h2>
                <pre></pre>
            </div>
        </>
    );

}

export default Form;
