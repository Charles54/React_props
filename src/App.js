
import './App.css';
import Card from './components/card/Card';

function App() {
  
let image1 = "https://images.pexels.com/photos/15802327/pexels-photo-15802327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
let image2 = "https://images.pexels.com/photos/16272745/pexels-photo-16272745.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
let image3 = "https://images.pexels.com/photos/7090350/pexels-photo-7090350.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
let image4 = "https://images.pexels.com/photos/14080409/pexels-photo-14080409.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
let image5 = "https://images.pexels.com/photos/15819503/pexels-photo-15819503.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";


  return (
    <div className='cards'>
      
      <Card pix={image1} title='Image 1'/>
      <Card pix={image2} title='Image 2'/>
      <Card pix={image3} title='Image 3'/>
      <Card pix={image4} title='Image 4'/>
      <Card pix={image5} title='Image 5'/>


    </div>
  );
}

export default App;
