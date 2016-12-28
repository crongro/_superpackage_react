import React, { Component, PropTypes } from 'react'
import CardBoard from './CardBoard'
import ShowCard from './ShowCard'
import { shallow, mount, render } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';


function setup() {
  const actions = {
	onIncrement: sinon.spy(),
	onDecrement: sinon.spy(),
	onRemoveCardInStorage : sinon.spy(),
	onSaveMyCard: sinon.spy(),
	onSendFetchData: sinon.spy()
  }

  const CardList = {'cardList' : [1,2,3,4,5,6]};
  const SaveMyCard = {'saveCardList' : [7]};

  const component = shallow(
    <CardBoard CardList={CardList} SaveMyCard={SaveMyCard} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    div : component.find('div'),
    buttons : component.find('button'),
    p: component.find('p'),
  }
}

describe('<CardBoard {...props} /> is ', () => {

	it('CardBoard have two division tag', () => {
		const { div } = setup();
		expect(div.find('div')).to.have.length(2);
	});

	it('CardBoard have two division tag', () => {
		const { div } = setup();
		expect(div.find('.cardWrap')).to.have.length(1);
	});

	it('CardBoard have ShowCard children Component', () => {
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