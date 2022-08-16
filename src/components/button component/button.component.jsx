import'./button.style.scss';

const BUTTON_TYPE_CLASSES={
    google:'google-sign-in',
    inverted:'inverted'
}
const Button=({children, type,...otherProps})=>{
    return(
        <button className={`button-container ${BUTTON_TYPE_CLASSES[type]}`} {...otherProps}>
            {children}

        </button>
    )
}

export default Button;

