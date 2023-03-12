import React, {useReducer} from 'react';
import './App.css';
// import ComponentA from './components/ComponentA';
// import ComponentB from './components/ComponentB';
// import ComponentC from './components/ComponentC';
import DataFetchingOne from './components/DataFetchingOne';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import ClassCounterTwo from './components/ClassCounterTwo';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterFour from './components/HookCounterFour';
// import ClassCounterOne from './components/ClassCounterOne';
// import HookCounterOne from './components/HookCounterOne';
// import ClassMouse from './components/ClassMouse';
// import HookMouse from './components/HookMouse'
// import MouseContainer from './components/MouseContainer';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import DataFetching from './components/DataFetching';
// import ComponenetC from './components/ComponenetC';
import CounterOne from './components/CounterOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import ParentComponent from './components/ParentComponent';
import CounterUseMemo from './components/CounterUseMemo';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import One from './components/One';
import Two from './components/Two';
import UserForm from './components/UserForm';
// import CounterThree from './components/CounterThree';
// import CounterTwo from './components/CounterTwo';



// export const userContext = React.createContext();
// export const ChannelContext = React.createContext();


const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

export const CountContext = React.createContext()
function App() {

  const [count, dispatch] = useReducer(reducer,initialState)
  return (
    
      <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
        <div className="App">
          {/* Count - {count}
          <ComponentA />
          <ComponentB />
          <ComponentC /> */}
          {/* <DataFetchingOne /> */}
          {/* <DataFetchingTwo /> */}
          {/* <ParentComponent /> */}
          {/* <CounterUseMemo /> */}

          {/* <FocusInput /> */}
          {/* <ClassTimer />
          <HookTimer /> */}

          {/* <DocTitleOne />
          <DocTitleTwo /> */}

          {/* <One />
          <Two /> */}

          <UserForm />
          
        </div>
      </CountContext.Provider>
      
  );

  // <div className="App">
  //   hello
  //   <CounterOne />
  //   <DataFetchingOne />
  // </div>
}

export default App;
