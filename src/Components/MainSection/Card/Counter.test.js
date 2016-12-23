import React, { Component, PropTypes } from 'react'
import Counter from './Counter'
import { shallow, mount, render } from 'enzyme';
import {expect} from 'chai';
import ShowCard from './ShowCard'
import sinon from 'sinon';


function setup(value=12) {
  const actions = {
	onIncrement: sinon.spy(),
	onDecrement: sinon.spy(),
	onSendFetchData: sinon.spy()
  }
  const component = shallow(
    <Counter valuestate ={{value:value}} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    div : component.find('div'),
    buttons : component.find('button'),
    p: component.find('p'),
  }
}

describe('<Counter {...props} /> is ', () => {

	it('Counter have two division tag', () => {
		const { div } = setup();
		expect(div.find('div')).to.have.length(2);
	});

	it('Counter have two division tag', () => {
		const { div } = setup();
		expect(div.find('.cardWrap')).to.have.length(1);
	});

	it('Counter have ShowCard children Component', () => {
		const { div } = setup();
		const value = 12;
		expect(div.find(ShowCard)).to.have.length(1);
	});

	it('plus button should call onIncrement', () => {
		const { buttons, p, actions } = setup()
		buttons.at(0).simulate('click')
		expect(actions.onIncrement.calledOnce).to.be.true;
	})

	it('minus button should call onDecrement', () => {
		const { buttons, p, actions } = setup()
		buttons.at(1).simulate('click')
		expect(actions.onDecrement.calledOnce).to.be.true;
	})

})