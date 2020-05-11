import React, { Component } from 'react'
import { Button } from 'antd-mobile'

class NotFound extends Component {

    render() {
        return (
            <div>
                <h2>woops, can't find your page</h2>
                <Button
                    onClick={() => this.props.history.replace('/')}
                    type="primary">返&nbsp;&nbsp;回</Button>
            </div>
        )
    }
}

export default NotFound