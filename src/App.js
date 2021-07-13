import './App.css';
import Button from './Button.js';
const App=()=> {
  return (
    <div className="header">
      <h1>Hello World</h1>
      <div className = "btn-con">
      <Button btntext='linear'/>
      <Button btntext='radial'/>
      <Button btntext='diagonal'/>
      </div>
    </div>
  );
}

export default App;
