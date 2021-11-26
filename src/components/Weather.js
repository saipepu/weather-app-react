import React from 'react'
import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FetchWeatherData } from '../redux/Actions'
import { ToastContainer } from 'react-toastify'
import moment from 'moment'
import { render } from '@testing-library/react'
import "react-toastify/dist/ReactToastify.css";

class Weather extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            searchInput: ""
        };
    }


componentDidMount() {
    const { FetchWeatherData } = this.props.action;
    FetchWeatherData();
}

handleOnChange = (e) => {
    this.setState({
        searchInput: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault();
    const { searchInput } = this.state;
    const { FetchWeatherData } = this.props.action;
    if ( searchInput ) {
        FetchWeatherData(this.state.searchInput)
    }
    this.setState({ searchInput: ""})
}
render() {
    const { data, success} =  this.props.weatherData;
    const { weather, sys, name, main} = data;
    const { searchInput } = this.state;
    return(
        <>
        <div className="container">
            <div className="heading">Weather Forecasting React App</div>
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Search Weather by City"
                    value={searchInput}
                    onChange={e => this.handleOnChange(e)}/>
                <button>Find</button>
            </form>
            <div className="helper-text">Type City Name and Hit Enter</div>
            <div className="info">
                <div className="sub-heading">
                    Weather Forecast <div>on</div>
                </div>
                <p className="date">
                    {success ? moment().format("MM DD YYYY") : null}
                </p>
                <div className="location">
                    {success ? name: null}
                    <p>({success ? sys.country : null})</p>
                </div>
                <div className="forecast-info">
                    <div className="forecast-icon">
                        {success ? (
                            <img
                                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                                alt="weather icon"/>
                        ) : null}
                    </div>
                <div className="forecast-value">
                    <div className="degrees">
                        <span className="degrees-count">
                            {success ? main.temp: null}
                        </span>
                        C
                    </div>
                        <span className="weather-condition">
                            {success ? weather[0].main: null}
                        </span>

                </div>
                <div className="additional-info">
                    <ul className="list">
                        <li>
                            <b>Feels Like</b> {success ? main.feels_like : null}
                        </li>
                        <li>
                            <b>Min temp</b> {success ? main.temp_min : null}
                        </li>
                        <li>
                            <b>Max temp</b> {success ? main.temp_max : null}
                        </li>
                        <li>
                            <b>Pressure</b> {success ? main.pressure : null}
                        </li>
                        <li>
                            <b>Humidity</b> {success ? main.humidity : null}
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        <ToastContainer />
        </>
    )
}
}
const mapStateToProps = state => ({
    weatherData: state
})
const mapDispatchToProps = dispatch => ({
    action: bindActionCreators({ FetchWeatherData }, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Weather);