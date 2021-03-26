import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({video}) => {
    if(!video) {
        return  <div className="start">
            <img src="data:image/png;base64,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"
            alt="YOUTUBE" />
        </div>
    }
    const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe title ="video player " src={videoSrc} />

            </div>
            <div className="ui segemnt">
                 <h4 className="ui header">{video.snippet.title}</h4>
                 <p>{video.snippet.description}</p>

            </div>
        </div>
    );
}
export default VideoDetail;