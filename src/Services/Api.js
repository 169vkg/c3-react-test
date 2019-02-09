import {BASE_URL} from './../Utilities/Constants'

const USERS_ENDPOINT =(page, perPage) =>  `api/users?page=${page}&per_page=${perPage}`

const FETCH_USERS = (page, perPage) => (
	fetch(BASE_URL + USERS_ENDPOINT(page, perPage))
  .then(response => {
		if(response.status===200)
	    return response.json()
  })
  .then(jsonResp => {
    return jsonResp
  })
)
export default FETCH_USERS
