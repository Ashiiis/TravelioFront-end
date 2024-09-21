import './First.css';
function First({image, title, text }){
    return(
            
            <div className="card">
            <img src={image} alt="Card" className="card-image" />
            <div className="card-content">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}
export default First;