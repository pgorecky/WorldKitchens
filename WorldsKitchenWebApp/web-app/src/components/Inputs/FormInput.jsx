import './Inputs.css'

export default function FormInput({Icon, ...props}) {
    return (
        <div id={'FormInput'}>
            <input {...props} className={'form-input'}/>
            {Icon && (
                <span className={'input-icon'}>
                    <Icon size={'1.5vh'}/>
                </span>
            )}
        </div>
    )

}