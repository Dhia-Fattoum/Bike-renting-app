import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
            Rental Bike App
        </div>
        )
        
    }
}

ReactDOM.render(<App />, document.getElementById('app'))