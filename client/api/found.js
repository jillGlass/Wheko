import request from 'superagent'

export default function found (id) {
  return request.get(`/api/v1/${id}`)
    .then(res => res.body)
    .catch((err) => err.message)
}