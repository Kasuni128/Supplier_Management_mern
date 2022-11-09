
import React, { Component } from 'react'
import './index.css';

const RESET_VALUES = {id: '', category: '', price: '', name: ''}

class ProductForm extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.state = {
            product: Object.assign({}, RESET_VALUES),
            errors: {}
        }
    }

    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState((prevState) => {
            if (name === "instock") {
              prevState.product[name] = target.checked
            } else {
              prevState.product[name] = value
            }
            return { product: prevState.product }
        })
    }

    handleSave(e) {
        this.props.onSave(this.state.product);
        // reset the form values to blank after submitting
        this.refs.instockcheckbox.checked = false
        this.setState({
            product: Object.assign({}, RESET_VALUES),
            errors: {}
        })
        // prevent the form submit event from triggering an HTTP Post
        e.preventDefault()
    }

    render () {
        return (
          
            <form className='form-inline1'>
                <h4> Manage Supplier Details </h4>
                <p>
                    <label>SUPPLIER ID <br />
                    <input type="text" className="form-control" name="id" onChange={this.handleChange} value={this.state.product.id} placeholder="[Optional] For Update" /></label>
                </p>
                <p>
                    <label> SUPPLIER NAME <br />
                    <input type="text" className="form-control" name="name" onChange={this.handleChange} value={this.state.product.name} placeholder="Ex: Nimal" /></label>
                </p>
                <p>
                    <label> PRODUCT NAME <br />
                    <input type="text" className="form-control" name="category" onChange={this.handleChange} value={this.state.product.category} placeholder="Ex: Clothes" /></label>
                </p>
                <p>
                    <label> PRICE <br />
                    <input type="text" className="form-control" name="price" onChange={this.handleChange} value={this.state.product.price} placeholder="Ex: Rs. 1000"/></label>
                </p>
                <p>
                    <label>In Stock <br />
                    <input type="checkbox" className="form-control" name="instock" ref="instockcheckbox" onChange={this.handleChange} value={this.state.product.instock} /></label>
                </p>
                <input type="submit" className="btn btn-info" value="Save" onClick={this.handleSave}></input>
            </form>
           
         
        )
        
        
    }
}

export default ProductForm
