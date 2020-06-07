import React from 'react';
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ComicInfo = ({comic}) => {
  const date = moment(comic.date_added, "YYYYMMDD").fromNow();
  return (
    <>
      <div className="ComicInfo-container">
        <div className="ComicInfo-content">
          <div className="ComicInfo-avatar">
            <LazyLoadImage
              alt={comic.name}      
              effect="blur"
              src={comic.image.small_url}
              width={'100%'} />
          </div>
          <div className="ComicInfo-profile">
            <h2>{comic.name}</h2>
            <div dangerouslySetInnerHTML={{__html: comic.description}} />
            <p>{date}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComicInfo;