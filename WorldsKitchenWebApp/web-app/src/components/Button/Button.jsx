import './Button.css'

export default function Button({children, type, ...props}) {

    const classNames = type ? `${type}-button` : 'default-button'

    return (
        <button {...props} className={classNames + ' button'}>
            {children}
        </button>
    )
}