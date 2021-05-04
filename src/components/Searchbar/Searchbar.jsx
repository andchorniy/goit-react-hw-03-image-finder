
import React, { Component } from 'react';
import style from './Searchbar.module.css'


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
        <header className={style.searchbar}>
            <form className={style.searchForm} onSubmit={this.handlerSubmit}>
                <button type="submit" className={style.searchFormButton}>
                    <span className={style.searchFormButtonLabel}>Search</span>
                </button>

                <input
                    onChange={this.handleChange} value={this.state.value}
                    className={style.searchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
        )
    }
} 


export default Searchbar;