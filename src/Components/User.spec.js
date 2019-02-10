
import React  from 'react'
import renderer  from 'react-test-renderer'
import User  from './../Components/User'
import MockUsers from './../mockdata/MockUsers'

describe('User Component',()=>{
	it('renders the User component by taking single object', ()=>{
		let tree =  renderer.create(
			<User {...MockUsers[0]}  />
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
