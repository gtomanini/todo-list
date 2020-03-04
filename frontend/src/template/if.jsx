import React from 'react'

export default props => {
    if(this.props.test) {
        return props.children
    } else {
        return false
    }
}