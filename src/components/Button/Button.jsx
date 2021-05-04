import style from './Button.module.css'
const Button = ({loadMore}) => {
    return (
        <button className={style.button} type="buttom" onClick={loadMore}> Load more</button>
    );
};

export default Button;