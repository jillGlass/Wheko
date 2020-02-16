import request from 'superagent'

export default function foundNumberMinus (id) {
  return request.put(`/api/v1/${id}`)
    .then(res => res.body)
    .catch((err) => err.message)
}