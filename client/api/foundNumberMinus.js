import request from 'superagent'

export default function foundNumberMinus (id, callback) {
  request.put(`/api/v1/minus/${id}`)
    .then(res => callback(res.body))
    .catch((err) => err.message)
}