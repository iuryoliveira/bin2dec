import React, { Component } from 'react';
import './styles.css';

export default class Calculadora extends Component {
    state = {
        binario: '',
        decimal: 0
    }

    checkNumber = event => {
        const { value } = event.target;
        if(/[^01]/.test(value)) {
            alert('Número inválido');
            return;
        }
        
        this.setState({ binario: event.target.value})
    }

    converter = () => {
        const { binario } = this.state;

        let valorEntrada = binario.split("").reverse();
        let decimal = 0;

        for(let i = 0; i < valorEntrada.length; i++) {
            decimal += valorEntrada[i] * Math.pow(2, i);
        }

        this.setState({ decimal });
    }

    render() {
        const { binario, decimal} = this.state;

        return (
            <div className="form-calculadora">
                <input type="text" id="binario" onChange={event => this.checkNumber(event)} onKeyUp={this.converter} maxLength="8" value={binario}/>
                <p>{binario.length === 0 ? 0 : binario} em decimal é {decimal}</p>
            </div>
        )
    }
}