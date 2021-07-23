import apiUrl from '../../apiConfig'
import axios from 'axios'

export const newsFeed = (rss) => {
  return axios({
    method: 'get',
    url: `${apiUrl}/news`,
    data: rss
  })
}
