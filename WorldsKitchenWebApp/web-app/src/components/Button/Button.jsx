import './Button.css'

export default function Button({children, type, disabled = false, onClick, ...props}) {
    const classNames = type ? `${type}-button` : 'default-button'

    const disabledClasses = disabled ? 'disabled' : classNames;

    return (
        <button {...props} onClick={disabled ? undefined : onClick} className={disabledClasses + ' button'}>
            {children}
        </button>
    )
}