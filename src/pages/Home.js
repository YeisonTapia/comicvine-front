import React, {useState, useEffect} from 'react'
import ComicCard from '../components/comic/ComicCard'
import Masonry from 'react-masonry-css'
import { BoxLoading } from 'react-loadingg'
import comicvine from '../sevices/comicvine'

const Home = () => {
  const [comics, setComics] = useState([])
  const [loading, setLoading] = useState(false)
  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    getComics(0)
  },[])  

  useEffect(() => {
    let offset = 0
    window.addEventListener('scroll', () => {
      if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight ){
        offset += 20
        getComics(offset)
      }
    });
  }, [total]);

  function getComics (offset) {
    if(offset > total) return
    setLoading(true)
    comicvine.getLastComics({offset})
      .then(( data ) => {
        setComics(prevState => ([...prevState, ...data.results]))
        setTotal(data.number_of_total_results)
        setLoading(false)
      })
      .catch(error => {
        console.error(error.message)
        setLoading(false)
      })
  }

  return (
    <div className="Home">
      <Masonry
        breakpointCols={{ default: 5, 1100: 3,700: 2,500: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {comics.map((comic, index) =>
          <ComicCard comic={comic} key={`comic-${index}`}/>
        )}
      </Masonry>
      { loading ? <BoxLoading color={'#8c93bd'} size={'small'}/> : '' }
    </div>
  )
  
}

export default Home;