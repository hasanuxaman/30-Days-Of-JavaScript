import logo from './logo.svg';
import './App.css';
import Hello, { HelloClass } from './component/FunctionComponent';
import Counter from './component/StateDynamicdata';

function App() {
    return (
        <>
          <HelloClass element={<h1>HelloClass Component Roni here</h1>} />
          <Hello element={<h1>Hello Function Component Roni here</h1>} />
          <Counter />
        </>
      );
}

export default App;
