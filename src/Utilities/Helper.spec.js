import {REMOVE_DUPLICATE_DATA}  from './../Utilities/Helper'
import {DELETE_USER}  from './../Utilities/Helper'
import MockUsers from './../mockdata/MockUsers'
import MockDuplicateUsers from './../mockdata/MockDuplicateUsers'
import MockNewUsers from './../mockdata/MockNewUsers'

describe('Test REMOVE_DUPLICATE_DATA helper function',()=>{
	it('removes duplicate data in an array and returns unique data in array', ()=>{
		let filteredData =  REMOVE_DUPLICATE_DATA(MockDuplicateUsers)
		expect(MockUsers).toEqual(filteredData)
	})
})

describe('Test DELETE_USER helper function',()=>{
	it('deletes user from array and return the new array', ()=>{
		let filteredData =  DELETE_USER(MockUsers, 5)
		expect(MockNewUsers).toEqual(filteredData)
	})
})
