import { Form1 } from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";


function App() {
  return (
    <div className="row" >

      <div className="col-md-4 ">
        <Form1 className=""/>
      </div>
      <div className="col-md-4 ">
        <Form2 className=""/>
      </div>
      <div className="col-md-4 ">
        <Form3/>
      </div>

      
     
    
    </div>
  );
}

export default App;
