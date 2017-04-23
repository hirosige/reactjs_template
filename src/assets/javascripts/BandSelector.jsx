import React from 'react';
import ReactDom from 'react-dom';

export default class BandSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: 0 }
    }

    render() {
        var optionNodes = this.props.bandOptions.map((option) => {
            if (this.props.omitOptions.indexOf(option.value) === -1) {
                return <option key={option.value} value={option.value}>{option.label}</option>
            }
        });

        return (
            <div className="bandOption">
                <label>Band {this.props.band} </label>
                <select ref="menu" value={this.state.selected} onChange={this.handleChange.bind(this)}>
                    {optionNodes}
                </select>
            </div>
        )
    }

    handleChange(e) {
        var newValue = ReactDom.findDOMNode(this.refs.menu).value;

        this.setState({ selected: newValue })
        this.props.changeHandler(this.props.band - 1, newValue)
    }
}