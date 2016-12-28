React Super Package
============
ReactCreateApp을 기반으로 구성.
Redux + Router + UnitTest + Sample code

<br><br>

## 어떻게 만들어 졌나요? 

#### 1.요구사항
단비 프로젝트를 위해서 아래 기능이 동작해야 합니다.
- React
- Redux
- React기반 Routing
- JSX 사용
- ES6 Syntax 사용가능
- Babel 을 통한 transpiling
- Webpack 을 통한 쉬운 빌드. (dev, production mode 분리)
- Ajax 처리와 같은 다양한 JavaScript Module추가

<br>

#### 2.ReactCreateApp기반인 이유
React 기반의 프로젝트는 많은 [boilerplate](http://andrewhfarmer.com/starter-project/) 가 있으나 공식적으로 잘 관리되는 건 별로 없음.

ReactCreateApp은 facebook이 공식적으로 만들어가는 것으로, 사실상 표준 boilerplate라고 봐도 된다.
Redux 개발자가 직접 개발을 시작했으며, github에서는 2만개 가까운 star를 받고 있다

<br>

#### 3.ReactCreateApp의 주요 기능
[ReactCreateApp](https://github.com/facebookincubator/create-react-app) 
일반적인 특징을 포함해서 나열하면 다음과 같다.
- Babel을 포함하고 있어서 ES6 Syntax를 기반으로 작성할 수 있다. 
- JSX를 사용할 수 있다.
- dev-server를 구동해서 auto-reloading을 하면서 개발할 수 있다.
- webpack 기반이다.
- Jest를 포함하고 있다.
- react-router나 redux 와 같은 추가적인 module을 기본으로 담고 있지 않다. 필요하면 추가해서 사용하면 된다.

LESS, SASS를 컴파일은 지원하지 않는데, 필요하면 webpack에 별도로 추가해서 빌드할 수 있다.

#### 4.패키지 구성
SuperPackage는 ReactCreateApp의 eject명령을 실행한 결과다.
<br>eject를 한 이유는 숨겨진 설정을 모두 가져와서 커스트마이징이 필요하면 해야 할 것으로 예상했기 때문이다.
<br>그리고 필요한 모듈을 npm install --save-dev로 설치한 상태다.(react-router 등)

#### 5.최종 디렉토리
```
|-- build					// 빌드 코드
|-- config					// 웹팩 및 빌드를 위한 설정
|-- node_modules			// 모듈들
|-- public					// 웹에서 바로 접근 가능한 홈디렉토리
	|-- index.html
	|-- favicon.ico
|-- scripts					// npm run 으로 동작하는 script
	|-- build.js
	|-- start.js
	|-- test.js
|-- source					// 서비스코드
	|-- Reducers
		|-- reduce.js
		|-- reduce.test.js
	|-- Actions
		|-- Action.js
		|-- Action.test.js
	|-- Container
		|-- MainSection
			|-- CardContainer.js
	|-- Components 			// UI 코드 
		|-- Header
			|-- Header.jsx
		|-- MainNavi
			|-- MainNavi.jsx
			|-- NaviLink.jsx
		|-- MainSection
			|-- App.jsx
			|-- App.css
			|-- App.test.js
	|-- index.js
	|-- index.css
	|-- img
```

<br><br>

--- 

<br><br>

## 빠른 사용법

#### 1.설치
```sh
git clone https://github.com/DanbiEduCorp/codesquad.git
cd codesquad
npm install
```

#### 2.개발환경으로 시작하기
개발중에는 이렇게 시작합니다. webpack에서 제공하는 서버가 활성화 된다. 소스 수정시에 브라우저 새로고침없이 변경내용을 확인할 수 있다.
```sh
npm run start
```
위 스크립트 실행 후 안내에 따라 브라우저에서 http://localhost:3000/ 디렉토리에서 간단한 sample 서비스를 테스트 해 볼 수 있다.


#### 3.개발중 테스트 코드의 실행
test code 가 동작합니다. 프로젝트 하위 디렉토리에 *.test.js 와 같이 이름으로 해두면 자동으로 찾아서 실행된다.
<br>
현재는 src 밑에 있는 소스파일과 같은 경로에 test 코드를 위치시켜두었음.
[여기를 참고하세요](https://github.com/facebookincubator/create-react-app/blobmaster/packages/react-scripts/template/README.md#running-tests)
```sh
npm run test
```

#### 4.production을 위한 실행
결과파일은 /build 에서 확인할 수 있다. pushstate-server 모듈을 설치하면 쉽게 결과를 미리 볼 수 있다.(아래 실행하면 안내가 나옴)
```sh
npm run build
```
참고로 NODE_ENV 설정이 build.js 에서 다음과 같이 선언되어 있다. 
process.env.NODE_ENV = 'production';

#### 5.webpack 활용
빌드도구는 webpack 만 사용하는 것이 좋다. webpack 에 수정이 필요한 경우 /config/webpack.config.dev(prod).js 를 수정한다.

<br><br>

--- 

<br><br>

## 개발가이드

#### 1.새로운 프로젝트 시작
SuperPackage 를 clone 한 상태라면 source 관련 디렉토리만 이렇게 정리해서 사용할 수 있다.
- public/index.html 을 첫페이지 html로 수정한다.
- src/ 디렉토리를 지우고 새롭게 디렉토리 구성을 해서 개발한다.
- src/index.js 가 프로젝트 소스의 진입점(entry)로 설정 되어 있으니 이를 참고해서 사용하면 된다.

다른 설정 디렉토리는 특별히 수정하거나 추가할 일이 없다. 
/condfig 디렉토리는 webpack에 추가설정이 필요할 때 사용하면 된다. (loader나 plugin추가시)
그외에 config디렉토리 아래 다른 코드를 수정할 일은 별로 없다.

/scripts 디렉토리에서는 npm run script가 동작하는 부분임으로 필요한 부분이 생기면 수정하면 된다. 개발을 하면서 딱히 건딜 이유는 없다.

/build 디렉토리는 bundle 이 생성되면 위치하는 디렉토리다. 역시 코딩과정에서 건딜 이유가 없다.


<br>
#### 2.Redux 설계
redux를 구현하기 위해서는 아래와 같은 순서로 설계를 하는 것이 좋다. 이는 Redux가 가진 단방향 데이터 흐름에 따라서 설계를 하는 것이라 원래의 철학과도 맞다.
- 해당 컴포넌트에서 사용할 state를 정의한다.
- 거기에 필요한 인터랙션을 action으로 정의한다. (이렇게 정의된 것을 나중에 store.dispatch() 를 통해서 전달하게 된다)
- action의 요청에 따라서 분기처리를 통해 state 데이터를 변경한다. 이 과정이 reducer를 구현하는 것이다.
   (redux에서는 이 과정 이후에 마지막에 변경된 state값을 받아서 렌더링이 다시 일어나게 된다)
- UI 컴포넌트를 만들고 작은 단위로 컴포넌트를 분리하는 리팩토링이 필요하다.

action 이 여러개로 늘어날 텐데, 이것을 잘 관리해두는 게 좋다. 별도의 설계문서를 만들어서 action 을 잘 정리하고, 어떻게 reducer랑 연관되어 있는지를 
표현해두면 관리측면에서 좋을 것 같다. 

<br>
#### 3.Redux - Reducer 
Reducer에서는 결국 state 정보를 변경하는 역할을 하도록 한다. ajax와 같이 argument에 따라 다른 반환값이 나올 소지가 있는 것은 reducer에서 처리하지 않아야 한다.
<br> 
하지만 관리해야 할 state 정보가 많아지면 이를 분리하는 게 좋다. 성격이 다른 녀석들(서로 연관관계가 적은)별로 Reducer를 따로 만들어서 유지보수를 쉽게 한다.
redux에서 제공하는 combineReducer를 활용해서 하나의 object에 합칠 수 있다. 아래는 CardList 와 SaveMyCard라는 두 개의 Reducer를 합치는 코드다
<br>
(code : /Reducers/index.js)

```javascript
import { combineReducers } from 'redux'
import CardList from './CardList'
import SaveMyCard from './SaveMyCard'

export default combineReducers({
  CardList,
  SaveMyCard
})
```
이렇게 작성한 정보는 하위 컴포넌트에서 this.props.CardList, this.props.SaveMyCard로 접근해서 사용할 수 있다.

그리고 reducer안에서 switch문이 복잡해지면 역시 함수를 분리하면서 리팩토링을 하는 것이 좋다.

<br>
reducer에서는 새로운 데이터 state를 반환하게 되는데, Immutable(복사하지 말고 새로온 객체를 생성)하게 array와 ojbect를 새로이 만들어서 반환해야 한다. 
이렇게 새롭게 객체가 생성되야 빠르게 변경유무를 파악해서 Redering을 결정한다.
배열과 객체를 새로 만들때는 다음과 같이 spread operator를 사용하면 편리하다.

```javascript
let a = {"name" : "jisu"};

//a 객체를 그대로 쓰되 age 만 바꿔서 새로운 객체를 만들때,
let b = { ...a,
     "age" : 12
});
```

<br>
#### 4.Redux- router
SuperPackage에서는 routing작업의 사실상 표준인 redux-router를 사용한다.

/src/index.js 에서 정의 한 것처럼 Provider가 바깥을 감싸고 그 안에 Router 로 url과 그에 따라 렌더링이 필요한 컴포넌트를 계층적으로 표현한다.
컴포넌트와 웹화면 설계가 계층적으로 잘 되어 있다면 이부분을 커버할 수 있다.

```javascript
const store = createStore(reducer, applyMiddleware(thunk))
const render = () => ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/> 
				<Route path="/card" component={CardContainer}/>
		        <Route path="/about" component={About}/>
			</Route>
	  	</Router>
	</Provider>,
  document.getElementById('root')
);
render();
```

위 코드에서 App 컴포넌트가 실행될 때 자식관계로 존재하는 컴포넌트들이 있다 (CardContainer, About)
이컴포넌트들은  App.js 에서 children 속성을 전달받아서 사용할 수 있다. 

```javascript
const App = ({children}) => {
    return (
      <div>
        <Header />
        <MainNavi />
        {children}
      </div>
    )
}
export default App;
```

##### history 속성사용
history정보를 browserHistory를 사용할때는 backend url요청을 다시 index로 돌려줘야 하는데 이렇게 처리 해야 한다. 

[참고](https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory)


##### Link
그외에 anchor 태그 대신 Link정보를 주어서 페이지 이동을 하면서 history 관리를 할 수 있다.
/Compoonents/MainNavi/MainNavi.jsx 소스를 참고하자.

##### writeRouter 사용
router를 하위의 컴포넌트 계층까지 전달해서 사용하고 싶을 경우가 있다. 이때는 writeRouter(react-router 모듈을 import해서 사용)를 사용해서 전달할 수가 있다.
예를들어, CardBoard에서는 접근이 가능한 router 정보를 그 하위 컴포넌트인 SaveCard.jsx 에서 사용하고 싶을때는 SaveCard.jsx를 writeRouter로 아래처럼 감싸서 사용할 수가 있다. 

```javascript
import { withRouter } from 'react-router'
const SaveCard = withRouter((props) => {

	const goHome = () => {
      router.push('/');
    }

	...

}
```

##### react-router v4 마이그레이션
superpackge 의 react-router 는 제작당시의 최신버전인 v3.10.10이다.
v4에서는 위 Router예제처럼 route 태그를 사용해서 url과 컴포넌트를 매칭시키는 방법을, 한군데로 몰았다(예를들어 위 예제에서는 index에서 선언된 route 설정을 app.js에 모을 수가 있다)
v4사용을 위해서는 현재 코드를 마이그레이션 할 수가 있다. 반대로 그 버전을 fix해서 사용할 수도 있다. 
장기적으로는 마이그레이션을 하는 것을 고려해야 하지만, 정식 릴리즈 되고 나서 좀더 있다가 이를 작업하는 게 좋을 것이다. 그 시점에서는 다양한 마이그레이션 팁이 나올 것이기 때문이다.
참고로 마이그레이션 작업분량이 어려운 일이 아니라 큰 작업은 아니다. 
[마이그레이션 예시 참고](http://rants.broonix.ca/upgrading-to-react-router-v4/)

##### 그외 react-router 참고자료 
괜찮은 Sample -> https://github.com/ReactTraining/react-router/tree/master/examples


<br>
#### 5.UI(Presentation) Component 개발
Components/ 하위에 존재하는 컴포넌트들(Header.jsx, NavLink.jsx) 은 jsx 확장자로 작성한다.
이렇게 작성해도 다른 컴포넌트에서 jsx 확장자를 인식한다(/scripts/webpack 설정에 되어 있다).

state를 관리하는 등의 작업없이 jsx문법위주로 화면을 표현하는 역할만 하도록 컴포넌트를 잘게 나누는 것이 좋다. 
이렇게 나눠서 Presentation만을 담당하게 되는 컴포넌트의 형태는 아래와 같은 문법으로 개발한다. 

```javascript
import React from 'react'
import '../../Components/App.css'
import logo from '../../imgs/logo.svg';

const Header = () => (
	<div className="App">
		<div className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h2>REACT Project SuperSet</h2>
		</div>
		<p className="App-intro"> hi React, Redux, CRA ;-[] </p>
	</div>	
)
export default Header;
```

위와 같이 별도의 Class형태로 만들지 않고 순수한 함수 하나를 만들고, jsx 정보를 반환하도록 한다.

컴포넌트에 필수인 인자를 체크하는 것을 넣는 것이 좋다. 컴포넌트에 어떤 속성들이 필요한지 파악할 때 유리하다.
```javascript
//Class 형태라면 이렇게 (Components/Card/CardBoard.jsx)

class CardBoard extends Component {

	static propTypes = {
		CardList: PropTypes.object.isRequired,
		SaveMyCard: PropTypes.object.isRequired,
		onIncrement: PropTypes.func.isRequired,
		onDecrement: PropTypes.func.isRequired,
		onRemoveCardInStorage : PropTypes.func.isRequired,
		onSaveMyCard: PropTypes.func.isRequired,
		onSendFetchData: PropTypes.func.isRequired
	}
	...


//간단한 Component 경우라면 이렇게,
const ShowCard = withRouter((props) => {
	...
})

ShowCard.propTypes = {
  cardList : PropTypes.array.isRequired
}

```

컴포넌트들의 디렉토리에도 신경을 써야 한다. 
디렉토리를 계층적으로 UI의 구조에 맞게 디렉토리를 만들어서 관리하는 게 좋다.


<br>
#### 6.fetch API를 활용한 비동기처리
superPackge 에서는 처음 로딩시에 Ajax 요청을 해서 간단한 데이터를 (카드의 갯수다)받아오도록 했다.
이 작업을 꼭 어디서 하는게 지정된 건 아니지만, 보통 컴포넌트 렌더링 작업이 끝나는 시점에 한다. 

```javascript
class CardBoard extends Component {
	componentDidMount() {
		this.props.onSendFetchData();
	}
```
onSendFetchData는 아래처럼 container 역할을 하는 Container/MainSection/Card/CardContainer.js에 정의 되어 있다.
```javascript
const mapDispatchToProps = (dispatch) => {
  return {
  	....
    onSendFetchData() {
      dispatch(actions.sendFetchData(dispatch));
    }
  }
};
```

참고로 mapDispatchToProps는 connect메서드를 통해서 하위 컴포넌트에 쉽게 props와 dispatch 메서드를 전달하는 역할을 한다.

다시 sendFetchData는 action에 정의되어 있다. 
요청도 action 방식으로 보내고 있는데 이때 dispatch 파라미터를 넘기는 이유는, Ajax 데이터를 받았을때, 그 역시 받았다는 또 다른 action을 보내기 위해서다.
꼭 이렇게 구현할 필요가 없지만, action을 최대한 활용해서 데이터 전달이 이뤄지도록 하는 것이 깔끔하다.
아래는 ajax 처리를 하는 action코드다.

```javascript
export const getFetchData = (data) => ({
	type : 'GETDATA',
	value : data
})

function fetchData() {
  return fetch('https://api.github.com/users/facebook')
}

function _dispatchForgetFetchData(dispatch, value) {
	dispatch(getFetchData(value))
}

export const sendFetchData = (dispatch) => {

	return (dispatch) => {
			    return fetchData()
			    .then((response) => {
			    	return response.json();
				})
			    .then((json) => { 
			    	_dispatchForgetFetchData(dispatch, json.public_gists);
			    })
				.catch((ex) => dispatch(apologize(ex)))
			}
}
```

위코드를 보면 알겠지만 데이터를 받은 후에 getFetchData 액션을 실행시켜서 GETDATA 라는 action type이 실행되도록 했다.
reducer에서는 이를 받아서 state 에 필요한 정보를 가공해서 만들어서 객체를 반환한다.

```javascript
let CardList = (state=initialState, action) => {
	switch (action.type) {

		case 'GETDATA' : 
			let _temp= action.value;
			let _arr = _getCardNumberList(_temp);
			return {...initialState, "cardList":_arr};

		....

```


<br>
#### 7.React test code 구현
React test 를 위해서 다음과 같은 테스트 라이브러리가 필요로 하다. superpackage에서는 그것을 포함하고 있다.
- [enzyme](https://github.com/airbnb/enzyme) : shallow dom 조작을 통해서 컴포넌트 테스트를 쉽게 하기 위함
- [chai](http://chaijs.com/) : assertion framework
- [sinon](https://github.com/sinonjs/sinon) : Mocks 테스트를 위해

다른 javascript 단위테스트 코드를 작성하듯이 비슷하게 작성하면 된다.(Actions/Action.test.js)
비동기 테스트는 좀 까다로운 편인데 맨 아래를 참고해서 구현한다. store 객체가 필요해서 reducer를 불러와서 사용했다.

```javascript
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

```

이렇게 테스트 코드를 구현해두고, npm run test를 실행해서 콘솔을 열어두고 개발을 하면 자동으로 테스트 수행이 진행된다.


<br>
#### 8.디버깅
간단히 cosnole.log 로 확인하는 것 말고도, 개발자도구에 React 크롬 확장도구를 활용하면 계층별로 컴포넌트를 볼 수 있고, props나 state를 살펴볼 수가 있다.

SuperPackage 는 'Create React App' 이 기본 제공하는 eslint 를 그대로 사용하고 있어서, 코드 수정시 rebuild 타이밍에 정적코드 검사결과를 바로 알려준다.

```ssh
Compiled with warnings.

Warning in ./src/Container/MainSection/Card/CardContainer.js

/Users/yo/src/react_test/CRA/src/Container/MainSection/Card/CardContainer.js
  6:7  warning  'a' is assigned a value but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)


```


<br>
#### 9.Webpack 이해

##### webpack.config.dev.js로 웹팩 이해하기
빌드단계에서 특별한 일을 하지 않는 이상 이 파일을 수정할 일이 많지는 않다. SuperPackage를 구성하는 동안에도 테스트코드 작성에서 필요한 모듈이 없어 react-addon 설정을 추가한 것이 전부다.(externals : {..})
<br>
먼저 필요한 디렉토리 설정값은 env.js 와 paths.js 안에 설정할 수 있다. 
따라서 디렉토리 구성을 바꾸게 되면 여기를 수정해야 한다.

##### entry
webpack이 빌드를 위해 맨 처음 찾는 index.js 디렉토리를 설정.
<br>
Webpack은 entry point 로부터 의존성을 해석해서 의존성트리를 그린다.

##### output
runtime에 만들어지는 bundle 결과 파일의 위치를 지정

##### resolve
의존하는 모듈들을 어디서 찾을지 지정한다.특별히 수정할 일이 없음.

##### loader
로더는 하나의 동작을 하는 하나의 함수와 같다. <br>
로더에 선어된 모듈들이 순서대로 실행되고, 이 과정이 끝나면 javsacript파일에 추가가된다.
JavaScript 모듈들을 추가하는 건 loader가 필요없고, 다른 것들이 필요하다.(css 나 image 등)

##### plugin
bundle 이 만들어진 상태에서 실행되는 기능들이다. 
<br>
주요 플러그인의 기능을 확인 하면 다음과 같다. 
- HtmlWebpackPlugin : bundle 파일을 html에 자동 삽입해준다.
- HotModuleReplacementPlugin : css 변경시 자동으로 화면이 업데이트 된다.

<br>
##### webpack.config.production.js
production 빌드에는 개발모드와 달리 hotmodule 과정이나 테스트코드 실행을 위한 설정등이 필요가 없다.
대신 소스코드를 압축(UglifyJsPlugin)하는 것과 같은 최적화 기능이 필요하다.

<br>
##### SuperPackage의 JavaScript 모듈
- [Redux](https://github.com/reactjs/redux) : Framework
- [react-router](https://github.com/ReactTraining/react-router) : Routing
- [react-redux](https://github.com/reactjs/react-redux) : Provider와 connect 를 활용해 redux를 높은 추상화를 한 모듈
- [enzyme](https://github.com/airbnb/enzyme) : shallow dom 조작을 통해서 컴포넌트 테스트를 쉽게 하기 위함
- [chai](http://chaijs.com/) : assertion framework
- [sinon](https://github.com/sinonjs/sinon) : Mocks 테스트를 위해
- [Fetch API](https://github.com/github/fetch) : Ajax + Promise

<br>

#### 10.코딩 컨벤션
- ES6 Syntax를 원칙으로 한다.<br>
- [airbnb react/jsx style guide를 참고한다](https://github.com/airbnb/javascript/tree/master/react)

<br>

#### 11. sample 코드에 대해
sample코드는 간단히 router를 활용한 네이게이션 UI로 구성되어 있다.<br>
Card 영역을 보면 로딩후에 의미없는 API를 하나 가져와서 그곳에 숫자값을 이용해서 카드의 갯수로 사용한다.<br>
그리고 카드를 늘릴 수 있는데 그때마다 action->reducer를 거치면서 dom이 다시 갱신된다. <br>
Drag n drop API를 사용해서 특정 카드를 아래 영역(saveMyCard영역)으로 이동시킬 수도 있다.<br> 
이때에 기존 카드영역과 새로운영역의 데이터를 변경해야 하는데 역시 action->reducer의 흐름을 통해 동작한다.<br>
DOM 구조를 자세히 알고 예제를 이해하는 것이 좋으니 React 개발자 도구를 통해서 살펴보면서 미리 예제의 컴포넌트 구조를 이해하는 것이 좋다.


<br><br>

--- 

<br><br>

## 기타 학습자료.
Webpack 정리된 내용

https://perfectacle.github.io/2016/11/18/Module-bundling-with-Webpck/

<br>
Redux 가이드

http://redux.js.org/docs/introduction/

<br>
Redux Example

https://github.com/reactjs/redux/tree/master/examples

(Todos, counter 등 간단한 예제들의 코드 참고)

<br>
온라인 강좌

해외영상이 물론 좋은 것이 많은데요, 한글로 만든 아래 동영상 자료가 꽤 괜찮아보이네요. https://www.youtube.com/watch?v=GEoNiUcVwjE&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC

<br>
온라인 강좌 - egghead

https://egghead.io/technologies/react. https://egghead.io/courses/getting-started-with-redux (redux 개발자가 직접강의)






