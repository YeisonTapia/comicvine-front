import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

const Home = ({comic}) => {
  return (
    <div className="Commic">
      <Link to={{ pathname: `/comic/${comic.id}`,state: { ...comic }}}>
        <LazyLoadImage
          alt={comic.name}      
          effect="blur"
          src={comic.image.small_url}
          width={'100%'} />
      </Link>
    </div>
  )
}

export default Home;