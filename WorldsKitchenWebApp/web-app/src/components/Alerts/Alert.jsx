import './Alert.css'
import {FaCircleCheck} from "react-icons/fa6";
import {IoMdClose, IoMdCloseCircle, IoMdWarning} from "react-icons/io";
import {useState} from "react";

export default function Alert({type, title, message, onClose}) {
    let [classNames, setClassNames] = useState(' visible');

    const addClass = () => {
        setClassNames(' non-visible')
    }

    const handleClose = () => {
        addClass();
        onClose();
    }

    const getIcon = () => {
        if (type === 'success') {
            return <FaCircleCheck size={'3vh'}/>
        } else if (type === 'warning') {
            return <IoMdWarning size={'3vh'}/>
        } else if (type === 'danger') {
            return <IoMdCloseCircle size={'3vh'}/>
        } else return null;
    }

    return (
        <div id={'Alert'} className={`${type}` + classNames}>
            <div className={'alert-content'}>
                <div className={'alert-title'}>
                    {getIcon()}
                    <h1>{title}</h1>
                </div>
                <h3>{message}</h3>
            </div>
            <IoMdClose size={'3vh'} className={'close-button'} onClick={handleClose}/>
        </div>
    )
}