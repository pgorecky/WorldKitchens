import './Cards.css'

export default function ImageCard({image, title, description}) {
    return (
        <div className={'image-card'}>
            <div className={'image-box'}>
                <img src={image} alt={'card'}/>
            </div>
            <div className={'image-content'}>
                <h1>{title}</h1>
                <div className={'image-description'}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}