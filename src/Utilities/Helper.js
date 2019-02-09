const REMOVE_DUPLICATE_DATA = data => {
	return [...new Set(data.map(JSON.stringify))].map(JSON.parse)
}
const DELETE_USER = (data, id) => {
	let index = data.findIndex((obj) => {
		return obj.id === id
	})
	data.splice(index, 1)
	return data
}

export { REMOVE_DUPLICATE_DATA, DELETE_USER }
