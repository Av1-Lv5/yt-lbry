import "../assets/styles/videoCardSkelton.css";

// --------------- Component --------------

function VideoCardSkelton() {
    return (
        <div className="card skelton">
            <div className="skelton--img shimmer-effect"></div>
            <p className="skelton--text subtext-1 shimmer-effect"></p>
            <p className="skelton--text subtext-2 shimmer-effect"></p>
        </div>
    );
}

export default VideoCardSkelton;
