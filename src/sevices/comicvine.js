import axios from 'axios'
import moment from 'moment'

const apiRoute = 'https://rocky-reef-15479.herokuapp.com/api'

export default {
  getLastComics({offset, limit = 20}){
    const to = moment().format('YYYY-MM-DD');
    const from =  moment().subtract(7,'d').format('YYYY-MM-DD');
    return new Promise((resolve, reject) => {
      let params = {
        filter: `date_added:${from}|${to}`,
        limit,
        offset
      }
      axios(`${apiRoute}/volumes`, {params})
      .then(({ data }) => {
        resolve(data)
      })
      .catch(error => {
        reject(error)
      })
    })
  }
}