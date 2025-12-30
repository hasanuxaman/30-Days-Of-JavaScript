import logo from './logo.svg';
import './App.css';
import Hello, { HelloClass } from './component/FunctionComponent';
import Counter from './component/StateDynamicdata';
import EventHandling from './component/EventHandling';
import FormHandling from './component/FormHandling';

function App() {
    return (
        <>
          <HelloClass element={<h1>HelloClass Component Roni here</h1>} />
          <Hello element={<h1>Hello Function Component Roni here</h1>} />
          <Counter />
          <EventHandling/>
          <FormHandling/>
        </>
      );
}

export default App;
