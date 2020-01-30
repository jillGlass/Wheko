import request from 'superagent'

export default function foundNumber (id) {
  return request.put(`/api/v1/${id}`)
    .then(res => res.text)
    .then(res => {
      console.log(res) //1
    })
    .catch((err) => err.message)
}

