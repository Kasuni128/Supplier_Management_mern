import React, { Component } from 'react'
import './index.css';


class Filters extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const value = e.target.value
        const name = e.target.name
        

        this.props.onFilter({
            [name]: value
        })
    }

    render () {
        return (
            <form className='form-inline2'>
                <input
                    type="text"
                    className="form-control" 
                    placeholder="Search..."
                    name="filterText"
                    onChange={this.handleChange}></input>
            </form>
        )
    }
}

export default Filters
