

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component{
    state = {
        value:'',
    }
    handleChange = (e) =>{
        this.setState({value: e.target.value })
    }
    handlerSubmit=(e)=>{
        const {value} = this.state
        e.preventDefault();

        this.props.onSubmit(value.trim())
        this.setState({value: ''})
    }
    render() {
        return (
            <header>
                <form action="" onSubmit={this.handlerSubmit} >
                    <input type="text" onChange={this.handleChange} value={this.state.value}/>
                </form>
            </header>
        )
    }
} 

Searchbar.propTypes = {
    
};

export default Searchbar;