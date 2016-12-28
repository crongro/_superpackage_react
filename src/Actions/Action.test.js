import React from 'react';
import ReactDOM from 'react-dom';
import * as actions from './Action';
import reducer from '../Reducers/index' 
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

describe('todo actions', () => {

	const store = createStore(reducer, applyMiddleware(thunk));

	it('addCount should create INCREMENT action', () => {
		expect(actions.addCount()).toEqual({
			type: "INCREMENT"
		})
	})

	it('minusCount should create DECREMENT action', () => {
		expect(actions.minusCount()).toEqual({
			type: "DECREMENT"
		})
	})

	it('sendFetchData should create DECREMENT action', () => {
		expect(typeof actions.sendFetchData()).toEqual("function")
	})

	//Promise test
	it('fetchdata should create fetch ajax request', () => {
		return store.dispatch(actions.sendFetchData(store.dispatch))
		.then( (res) => {
			expect(store.getState().CardList.cardList.length).toBe(12);
		});
	})

})
