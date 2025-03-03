export default function CategoryBox({ imageSrc, title }) {
    return (
        <div className="box">
            <div className="img-box">
                <img src={imageSrc} alt={title} />
            </div>
            <div className="detail-box">
                <h5>{title}</h5>
            </div>
        </div>
    );
}
