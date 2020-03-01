import request from 'superagent'

export default function foundNumber (id, callback) {
  request.put(`/api/v1/plus/${id}`)
    .then(res => callback(res.body))
    .catch((err) => err.message)
}