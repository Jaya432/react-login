import React, { Component } from 'react'

class Button extends Component {
    render () {
        const { name,login } = this.props

        return (
            <button onClick={login}>{name}</button>
        )
    }
}

export default Button