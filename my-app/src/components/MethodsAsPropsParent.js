import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    handleAccess = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn,
        }));
    };

    render() {
        return (
            <div>
                <MethodsAsPropsChild
                    isLoggedIn={this.state.isLoggedIn}
                    handleAccess={this.handleAccess}
                />
            </div>
        )
    }

}

export default MethodsAsPropsParent