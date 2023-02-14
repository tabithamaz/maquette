import logo from './logo.svg';
import './App.css';
import Header from "./molecules/Header"
import "./molecules/Header.css"
import Title from "./atomes/Title";
import Text from './atomes/Text';
import Text3 from './atomes/Text3';
import About from './molecules/About';
import Button from './atomes/Button';




function App() {
  const buttonText= "check"
  const data ={
    paragraph1:'thrgntyhtyhtyhtyhty',
    paragraph2:"gghj"

  }

  return (
    <>
      <Header /> 
      <Title title={"hi, my name is"} />
      <Text title1={"Brittany chiang."} />
      <Text3 paragraph={"I'am a sofware engineer specializing in building(and occasionally)"}/>
   
     <About data={ data}/>
    <Button text={buttonText} />

    </>
  );
}

export default App;
