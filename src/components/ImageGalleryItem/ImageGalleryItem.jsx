import style from './ImageGalleryItem.module.css'
const ImageGalleryItem = ({image,openModal}) => {
    return (
            <>
                <img src={image.webformatURL} alt="фото" className={style.imageGalleryItemImage} data-src={image.largeImageURL} onClick={openModal}/>
            </> 
    );
};

export default ImageGalleryItem;