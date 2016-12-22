React Super Package
============
ReactCreateApp을 기반으로 구성.
Redux + Router + UnitTest + Sample code

<br><br>

## 어떻게 만들어 졌나요? 

#### 요구사항
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

#### ReactCreateApp기반인 이유
React 기반의 프로젝트는 많은 [boilerplate](http://andrewhfarmer.com/starter-project/) 가 있으나 공식적으로 잘 관리되는 건 별로 없음.

ReactCreateApp은 facebook이 공식적으로 만들어가는 것으로, 사실상 표준 boilerplate라고 봐도 된다.
Redux 개발자가 직접 개발을 시작했으며, github에서는 2만개 가까운 star를 받고 있다

<br>

#### ReactCreateApp의 주요 기능
[ReactCreateApp](https://github.com/facebookincubator/create-react-app) 
일반적인 특징을 포함해서 나열하면 다음과 같다.
- Babel을 포함하고 있어서 ES6 Syntax를 기반으로 작성할 수 있다. 
- JSX를 사용할 수 있다.
- dev-server를 구동해서 auto-reloading을 하면서 개발할 수 있다.
- webpack 기반이다.
- Jest를 포함하고 있다.
- react-router나 redux 와 같은 추가적인 module을 기본으로 담고 있지 않다. 필요하면 추가해서 사용하면 된다.

LESS, SASS를 컴파일은 지원하지 않는데, 필요하면 webpack에 별도로 추가해서 빌드할 수 있다.

#### 패키지 구성
SuperPackage는 ReactCreateApp의 eject명령을 실행한 결과다.
<br>eject를 한 이유는 숨겨진 설정을 모두 가져와서 커스트마이징이 필요하면 해야 할 것으로 예상했기 때문이다.
<br>그리고 필요한 모듈을 npm install --save-dev로 설치한 상태다.(react-router 등)

#### 최종 디렉토리
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
	|-- Reduces
		|-- reduce.js
		|-- reduce.test.js
	|-- Actions
	|-- Components
		|-- Count.js
		|-- Count.test.js
		|-- Home.js
	|-- App.js
	|-- App.css
	|-- index.js
	|-- index.css
	|-- img
```

<br><br>

--- 

<br><br>

## 사용법

#### 설치
```sh
gitr clone https://github.com/DanbiEduCorp/codesquad.git
npm install
```

#### 개발환경으로 시작하기
개발중에는 이렇게 시작합니다. webpack에서 제공하는 서버가 활성화 된다. 소스 수정시에 브라우저 새로고침없이 변경내용을 확인할 수 있다.
```sh
npm run start
```

#### 개발중 테스트 코드의 실행
test code 가 동작합니다. 프로젝트 하위 디렉토리에 *.test.js 와 같이 이름으로 해두면 자동으로 찾아서 실행된다.
<br>
현재는 src 밑에 있는 소스파일과 같은 경로에 test 코드를 위치시켜두었음.
[여기를 참고하세요](https://github.com/facebookincubator/create-react-app/blobmaster/packages/react-scripts/template/README.md#running-tests)
```sh
npm run test
```

#### production을 위한 실행
결과파일은 /build 에서 확인할 수 있다. pushstate-server 모듈을 설치하면 쉽게 결과를 미리 볼 수 있다.(아래 실행하면 안내가 나옴)
```sh
npm run build
```
참고로 NODE_ENV 설정이 build.js 에서 다음과 같이 선언되어 있다. 
process.env.NODE_ENV = 'production';

#### webpack 활용
빌드도구는 webpack 만 사용하는 것이 좋다. webpack 에 수정이 필요한 경우 /config/webpack.config.dev(prod).js 를 수정한다.

<br><br>

--- 

<br><br>

## 기능의 이해

#### webpack.config.dev.js로 웹팩 이해하기
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
#### webpack.config.production.js
production 빌드에는 개발모드와 달리 hotmodule 과정이나 테스트코드 실행을 위한 설정등이 필요가 없다.
대신 소스코드를 압축(UglifyJsPlugin)하는 것과 같은 최적화 기능이 필요하다.

<br>
#### SuperPackage의 JavaScript 모듈
- [Redux](https://github.com/reactjs/redux) : Framework
- [react-router](https://github.com/ReactTraining/react-router) : Routing
- [react-redux](https://github.com/reactjs/react-redux) : Provider와 connect 를 활용해 redux를 높은 추상화를 한 모듈
- [enzyme](https://github.com/airbnb/enzyme) : shallow dom 조작을 통해서 컴포넌트 테스트를 쉽게 하기 위함
- [chai](http://chaijs.com/) : assertion framework
- [sinon](https://github.com/sinonjs/sinon) : Mocks 테스트를 위해
- [Fetch API](https://github.com/github/fetch) : Ajax + Promise



<br><br>

--- 

<br><br>

## 코드구현

#### React 서비스 코드 구현
index.js 를 entry로 해서 개발한다. 하나의 application은 하나의 entry를 두는 것이 이상적이다. <br>
react-router, react-redux를 사용해서 초기 화면 구성을 다음과 같이 할 수 있다.<br>
Provider가 전체를 감싸야하고, router노드를 하위 노드로 위치시킨다.<br>
applyMiddelware() 를 사용해야 action에서 비동기(fetch와 같은)처리가 가능하다.

```javascript
const store = createStore(reducer, applyMiddleware(thunk))
const render = () => ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/> 
				<Route path="/card" component={Card}/>
		        <Route path="/about" component={About}/>
			</Route>
	  	</Router>
	</Provider>,
  document.getElementById('root')
);

```

#### Redux 설계의 시작.
redux를 구현하기 위해서는 이런 순서로 설계를 하는 것이 좋다.
- 해당 컴포넌트에서 사용할 state를 정의한다.
- 거기에 필요한 인터랙션을 action으로 정의한다. (이렇게 정의된 것을 나중에 store.dispatch하면 된다)
- action의 요청에 따라서 분기처리를 통해 state 데이터를 변경한다. 이 과정은 reducer를 구현하는 것이다.
   (이 과정이 마지막에 변경된 state값을 받아서 렌더링이 다시 일어나게 된다)
- UI 컴포넌트를 만들고 작은 단위로 컴포넌트를 분리하는 리팩토링이 필요하다.

#### Reducer 
state의 종류에 따라서 다르게 분리하고 combineReducer를 활용해서 합친다. 
CombineReducer 는 각각의 Reducer가 반환하는 state정보를 담은 object를 합쳐서 반환하는 것이다.
또한 switch문이 복잡해지면 함수를 분리하면서 리팩토링을 하는 것도 좋다.
<br>
데이터 조작시에 Immutable(복사하지 말고 새로온 객체를 생성)하게 배열과 Ojbect를 조작해야 한다. 이렇게 새롭게 객체가 생성되야 빠르게 변경유무를 파악해서 Redering을 결정한다.
배열과 객체를 새로 만들때는 다음과 같이 spread operator를 사용하면 편리하다.
```javascript
let a = {"name" : "jisu"};

//a 객체를 그대로 쓰되 age 만 바꿔서 새로운 객체를 만든다.
let b = { ...a,
     "age" : 12
});
```


### fetch API를 활용한 비동기처리

### component 개발

### React test code 구현 

## 기타 
#### 코딩 컨벤션
- ES6 Syntax를 원칙으로 한다.<br>
- [airbnb react/jsx style guide를 참고한다](https://github.com/airbnb/javascript/tree/master/react)


