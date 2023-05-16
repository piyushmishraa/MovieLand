
import './App.css';

const Kuchbhi = (props) => {
  return(
    <>
     <p>name:{props.name}</p>
     <p>sem:{props.sem}</p>
    </>
  )

}

 const App=()=> {
 
  return (
    <div className="App">
     
     
     <Kuchbhi name={"piyush"} sem={6}/>
     <Kuchbhi  name={"lvda"} sem={9}/>
     
      
      
    </div>
  );
}

export default App;
