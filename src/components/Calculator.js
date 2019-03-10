import React, {Component, Fragment} from 'react';
import './Calculator.css';

export default class Converter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            results: {
                history: 0
            }
        };
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 offset-sm-4">
                            <fieldset>
                                <legend>Calculator</legend>
                                <table className="table table-bordered">
                                    <tbody>
                                    <tr>
                                        <td colSpan="4">
                                            <input type="text" className="form-control"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="btn btn-default btn-block">1</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-default btn-block">2</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-default btn-block">3</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-warning btn-block">+</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="btn btn-default btn-block">4</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-default btn-block">5</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-default btn-block">6</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-warning btn-block">-</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="btn btn-default btn-block">7</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-default btn-block">8</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-default btn-block">9</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-warning btn-block">*</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="btn btn-default btn-block">0</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-default btn-block">.</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger btn-block">=</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-warning btn-block">/</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
