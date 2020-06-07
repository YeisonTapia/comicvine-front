import React from 'react';
import ComicInfo from '../components/comic/ComicInfo'

const Show = (props) => {
  const comic = props.location.state;
  return (
    <div className="ComicInfo">
      <ComicInfo comic={comic} />
    </div>
  )
};

export default Show;