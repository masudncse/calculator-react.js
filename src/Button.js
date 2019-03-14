import React, {Component} from 'react';

class Button extends Component {
    render() {
        return <div
            className="Button"
            onClick={this.props.onClick}
            onKeyUp={this.props.handleKeyUp}
            data-size={this.props.size}
            data-value={this.props.value}
        >
            {this.props.label}
        </div>
    }
}

export default Button;
