/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';
import './index.css';
import App from './App';
import { render } from '@testing-library/react';
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
let age=10;
if(age<=10){
  age =15;
}

const name=<p>{age}</p>;
const name2=React.createElement('p',{},'hii am sushmitha' );

const str="sush";
const name3=<h4>react is very easy to {str}</h4>;

const nav=(<nav>

  <img src='https://cdn.iconscout.com/icon/free/png-256/react-2752089-2284906.png?f=webp&w=256' />
  <h1>Reasons I'm exited to learn React</h1>
  <ol>
    <li>It's a popular library, so i'll be able to fit in with the cool kids!</li>
    <li>I'm more likely to get a job as a developer if I know React</li>
  </ol>

<footer>&copy; 2021 Ziroll development. All rights reserved.</footer>

</nav>);
*/

class MyFunc extends React.Component{
  render(){
  return(
    <div className='App'>
      <p>this is react</p>

    </div>
  )
}
}
/*function ample(props){
  return(
    <li>{props.listI}</li>
  );
}

function Sampl(){
  const listy=[
   {id:1,it:'A'} 
   {id:1,it:'B'} 
   {id:1,it:'C'} 
   {id:1,it:'D'} 
  ];
  return
}

*/

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Sample />);


  //<React.StrictMode>
    //<App />
 // </React.StrictMode>

 //class NameForm extends React.Component(){
 // render(){
   // return(
     // <select name='tech'>
       // <option value={react}>react</option>
        //<option value={html}>html</option>
        //<option value={css}>css</option>
      //</select>
   // )
  //}
 //}

/*
function Sample(){
  const [currState,setcurrState]=useState(0);
  return(
  <>
  <h1>
  count is {currState}
  </h1>
  <button type="button" onClick={() => setcurrState(currState+1)} >Click this</button>
  </>
  )
  }
  root.render(<Sample />);
  

  function Sample(){
    return(
    <div className='App'>

    <form></form>
  <label>Name</label>
  <input type="text"></input><br />
   <label></label>
  <input type="text"></input><br />
   <label>Name</label>
  <input type="text"></input><br />
   <label>Name</label>
  <input type="text"></input><br />
   <label>Name</label>
  <input type="text"></input><br />

  </form>
   
    </>
    )
    }
    


    import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState,useEffect,createContext,useContext,useReducer} from 'react';
import './index.css';


const intialCount=0;
const reducer=(state,action) =>{
  switch(action){
    case "Inc":
      return state+1;
    case "Dec":
      return state-1;
    case "Reset":
      return 0;
    default:
      throw new Error("unexpected error");
  }
};

const App =() =>{
  const [count,dispatch]=useReducer(reducer,intialCount);

  return(
    <>
    <h1>
      The cout is : {count}</h1>
      <button onClick={() => dispatch("Inc")}>Increment</button>
      <button onClick={() => dispatch("Dec")}>Decrement</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
      
      
      </>
  )
}
const currStateContext =createContext();
//useState

function Counter(){
  const [count,setCount]=useState(0);
  const [multiplyCount,setMultiplyCount]=useState(0);

  useEffect(() => {
    console.log(`the count is click ${count}`);
  },[count]);

  return(
    <div>
      the Current count is {count}
<br />
      
      the Multiply count is {multiplyCount}

      <div>
        <button onClick={() => setCount(count+1)} >Increment</button>
        <button onClick={() => setMultiplyCount(multiplyCount+1)}>Decrement</button>
      </div>
    </div>
  )
}

class Counter1 extends React.Component{
constructor(props)
{
  super(props);
  this.state={
    count:0
  };
}

componentDidUpdate(){
  console.log(`the count is click ${this.state.count}`);
}


render(){
  return(
    <div>
      the Current count is {this.state.count}

      <div>
        <button onClick={() => this.setState({count:this.state.count + 1})} >Increment</button>
      
      </div>
    </div>

  )
}
}



//useEffect
//2 arguments

//function
//array that contsains the list of values from the compine t scope-props,context,state vsriables- dependency array


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <SampleForm />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


//16.8
//functions alone they cannot handle state,logic,lot of other features of react
//inbuilt react fucntion,
//useState
//useEffect
//useRef
//useContext
//useReducer
//useMemo


function Component1(){
  const [currState,setCurrState]=useState("Swati Yadav");

  return(
    <currStateContext.Provider value={currState}>
    
<h1>
      {`Welcome  ${currState}`}
    </h1>
    <Component2 />
    </currStateContext.Provider>
  )
}


function Component2(){
const currState = useContext(currStateContext);

return(
  <>
  <h1>
    COmponent 2</h1>
    <br/>
    <h3>

    {`Welcome  ${currState}`}
      </h3></>
)
}

//react data it is unidirectional

//useReducer - 2 arguments
//reducer,initialstate
//allows for custome state logic
//useReducer(reducer,initialState)

//returns 2 things  - state, dispatch method


// const [state,dispatch] = useReducer(reducer,intialState)

const intialFormState = { name:'Swati',age:30};

function reducer1(state,action){
  switch(action.type){
    case 'inc_age':
      return {
        name:state.name,
        age:state.age+1
      }
      case 'name_change':
        return {
          name:action.newValue,
          age:state.age
        }
  }
}

function SampleForm(){
  const [state,dispatch] = useReducer(reducer1,intialFormState);


  function handleChange(e){
    dispatch({
      type:'name_change',
      newValue : e.target.value
    });
  }

  function handleClick(){
    dispatch({
      type:'inc_age'
    });
  }

  return(
    <>
    <input type="text" value={state.name} onChange={handleChange} />
    <br />
    <button onClick={handleClick}>Increase Age</button>

    <br/>
    <p>
      Hello, {state.name}.
      You are {state.age}.
    </p>
    </>
  )
}



function App1(){
  //ctreate a ref
  const htRef = useRef();

  

useEffect(() => {
  console.log("the height is ",htRef.current.offsetHeight);
},[])



  return(
    <div ref={htRef}>
      <h1>
        Learning UseRef
      </h1>
      <p>
        i am finding it fun.
      </p>
    </div>
  )
}

*/
