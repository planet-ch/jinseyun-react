import React from 'react';
import Show from './../components/show';
import HandleNum from '../components/handleNum';
import { Link } from "react-router-dom";
class ATobShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: '', scale: 'c'};
    }
    handleCelsiusChange = (temperature) => {
        this.setState({ scale: 'c', temperature });
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({ scale: 'f', temperature });
    }
    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }
    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;
        return (
            <fieldset>
                <HandleNum scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <HandleNum scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <Show celsius={parseFloat(celsius)} />
                <ul>
                    <li>
                        <Link to="/what">go what</Link>
                    </li>
                    <li>
                        <Link to="/shopList">go shopList</Link>
                    </li>
                </ul>
            </fieldset>
        );
    }
}
export default ATobShow
