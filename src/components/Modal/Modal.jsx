import { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component  {
  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown)
  }
  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyDown)
  }
  handleKeyDown=(e)=>{
    if(e.code === 'Escape'){
      this.props.onClose()
    }
  }
  handlBackdropClick=(e)=>{
    if(e.target === e.currentTarget){

      this.props.onClose()
    }
  }
  render(){

    return  createPortal(
      
        <div className={style.overlay} onClick={this.handlBackdropClick}>
          <div className={style.modal}>
            <img src={this.props.img} alt="" />
          </div>
        </div>
      
    , modalRoot);
  };
  }

export default Modal;