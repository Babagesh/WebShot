const Gallery = ({images}) => 
    (
    <div>
        <h2> Your Screenshot Gallery! </h2>
        <div className = "image-container">
            {images && images.map((image, index) => (
                <img
                src = {image}
                alt = "Undefined screenshot from query"
                width = "500"
                className = "gallery-screenshot"
                />
            ))}
        </div>
    </div>
    )
export default Gallery;