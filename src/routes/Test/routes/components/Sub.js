import React, { Component } from 'react'
import {
    Button
} from 'semantic-ui-react'

class Sub extends Component {
    render () {
        console.log('Sub ', this.props)
        return (
        <div>
            <Button onClick={() => this.props.router.goBack() }>back</Button>
        </div>
        )
    }
}
export default Sub
