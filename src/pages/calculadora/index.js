import React, { Component } from 'react';
import {
    StyledForm,
    BinaryTextInput,
    Label
  } from './styles'

export default class Calculadora extends Component {
    state = {
        binario: '',
        decimal: 0
    }

    checkNumber = event => {
        const { value } = event.target;
        if(/[^01]/.test(value)) {
            alert('Número informado inválido')
            return;
        }
        
        this.setState({ binario: event.target.value})
    }

    converter = () => {
        const { binario } = this.state;

        let valorEntrada = binario.split("").map(Number).reverse();
        let decimal = 0;

        if(!valorEntrada.length > 0) return;

        decimal = valorEntrada.reduce((total, current, index) => total + current * Math.pow(2, index));
        this.setState({ decimal });
    }

    render() {
        const { binario, decimal} = this.state;

        return (
            <StyledForm>
                <BinaryTextInput type="text" id="binario" onChange={event => this.checkNumber(event)} onKeyUp={this.converter} maxLength="8" value={binario}/>
                <Label>{binario.length === 0 ? 0 : binario} em decimal é {decimal}</Label>
            </StyledForm>
        )
    }
}