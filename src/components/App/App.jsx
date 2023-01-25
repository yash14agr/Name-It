import React from 'react';
import Header from './../Header/Header';
import SearchBox from './../SearchBox/SearchBox';
import ResultContainer from './../ResultContainer/ResultContainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {

    state = {
        headerText: 'Name It!!',
        headexpanded: true,
        Result: [],
    };

    HandleInputChange = (InputText) => {
        console.log(name(InputText));
        this.setState({ headexpanded: !InputText, Result: InputText ? name(InputText) : [] });
        // console.log(InputText);
        // alert('input is changing');
    };

    render() {
        return (
            <div>
                {/*importing Header section */}
                {/* <h4>{this.state.headerText}</h4> */}
                {/* <button onClick={() => {
                    this.setState({
                        headerText: 'woaahh! It changed.'
                    });
                }}>This is where magic Happens !!!
            </button> */}

                <Header
                    headTitle={this.state.headerText}
                    headexpanded={this.state.headexpanded}
                />
                <SearchBox OnInputChange={this.HandleInputChange} />

                <ResultContainer Result={this.state.Result} />
            </div>
        )
    }
}

export default App