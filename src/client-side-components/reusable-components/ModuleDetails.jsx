import React from 'react';


export default function ModuleDetails({ media, notes,}) {
  return (
    <div className="module-details">
      {/* Check if the media is a video */}
      {media.endsWith('.mp4') ? (
        <div className="media">
          <video controls>
            <source src={media} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        /* If not a video, assume it's an image */
        <div className="media">
          <img src={media} alt="Module Media" />
        </div>
      )}
      <div className="notes">
        <p>{notes}</p>
      </div>
    </div>
  );
}
