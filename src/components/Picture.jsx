import ProfilePicture from "../images/picture.png"

const Picture = () => {
    return (
        <div className="profile">
                <img className="profile-picture" src={ProfilePicture} alt="Rahma Mahmoud's picture" />
            <h2 className="name">Rahma Mahmoud</h2>
            <h4 className="title1">Artist</h4>
            <h4 className="title2">Graphic Designer</h4>
        </div> 
    )
}

export default Picture