import request from 'superagent'

export default function foundNumber (id) {
  console.log('foundNumber hit') //yes
  return request.put(`/api/v1/${id}`)
    .then(res => res.body)
    .catch((err) => err.message)
}

