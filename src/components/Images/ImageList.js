import "./ImageList.css";
import Image from "./Image";

function ImageList({ images }) {
    const preparedImageList = images.map(image => {
        return (
            <Image image={image} key={image.id} />
        )
    });
    return (
        <div className="image-list-container">
            {preparedImageList}
        </div>
    );
}

export default ImageList;