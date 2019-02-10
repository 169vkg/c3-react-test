import React, { Component } from 'react';
import { configure, shallow } from 'enzyme';
import './PearsonUsersList.css';
import PearsonUsersList from './PearsonUsersList';
import User from './../../Components/User';
import MockUsers from './../../mockdata/MockUsers'
import MockDuplicateUsers from './../../mockdata/MockUsers'

describe('PearsonUsersList Component', () => {
  let component

  beforeEach(() => component = shallow(<PearsonUsersList />))

  afterEach(() => component = null)

  it('renders a paragraph with heading', () => {
    let pTag = component.find('p')
    expect(pTag.text()).toEqual('Pearson User Management')
  })

  it('renders the component on basis of user comp and its state', () => {
    let userTag = component.find(User)
    let userLength = component.state().users.length
   expect(userTag).toHaveLength(userLength)
  })
})
