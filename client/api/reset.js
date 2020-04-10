import request from 'superagent'

export default function reset () {
  return request.put(`/api/v1/reset`)
    .then(res => res.body)
    
}