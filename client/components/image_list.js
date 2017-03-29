//imports:
import React from 'react';
import ImageDetail from './ImageDetail';


//Create component:
const ImageList = (props) => {
    const validImages = props.images.filter((image)=> {
        return !image.is_album;
    })
    const renderedImages = validImages.map((image)=>{
        return (<ImageDetail key={image.title} image={image}/>);
    });

    return (
        <ul className="media-list list-group">
            {renderedImages}
        </ul>
    );
}

export default ImageList;