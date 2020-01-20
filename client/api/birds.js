import request from 'superagent'

//below is to work around an error that lead dev couldn't fix apart from this workaround
const apiURL = process.env.NODE_ENV === 'test' ? 'http://localhost:3000' : ''

export default function fetch () {
  return request.get(`${apiURL}/api/v1/birds`)
    .then(res => res.body)
}
