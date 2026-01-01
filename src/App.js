import logo from './logo.svg';
import './App.css';
import Hello, { HelloClass } from './component/FunctionComponent';
import Counter from './component/StateDynamicdata';
import EventHandling from './component/EventHandling';
import FormHandling from './component/FormHandling';
import SubmitForm from './component/SubmitForm';

import AdvancedForm from './component/BasicControlledForm';
import HookForm from './component/ReactHookForm';
import FileUploadForm from './component/FileUpload';
import MultiStepForm from './component/Multi-StepForm';

function App() {
    return (
        <>
          <HelloClass element={<h1>HelloClass Component Roni here</h1>} />
          <Hello element={<h1>Hello Function Component Roni here</h1>} />
          <Counter />
          <EventHandling/>
          <FormHandling/>
          < SubmitForm/>
          <AdvancedForm/>
          <HookForm/>
          <FileUploadForm/>
          < MultiStepForm/>
        </>
      );
}

export default App;
