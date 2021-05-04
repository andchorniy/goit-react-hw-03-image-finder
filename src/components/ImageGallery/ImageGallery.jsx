import style from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem'
const ImageGallery = ({images,openModal}) => {
    return (
        <ul className={style.imageGallery}>
            {images.map(img=>  <li className={style.imageGalleryItem} key={img.id}>
                <ImageGalleryItem image={img} openModal={openModal}/>
            </li> )}
        </ul>   
    );
};

export default ImageGallery;