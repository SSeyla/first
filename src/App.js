import './App.css';
import Navbar from "./Navbar";
import Contact from "./Contact";
import data from './data';

function App() {
  const contact = data.map(item =>{
    return(
      <Contact
        img = {item.img}
        title = {item.title}
        location = {item.location}
        map = {item.map}
        date = {item.date}
        description = {item.description}
      />
    )
  })
  return (
      <div className='Contact'>
        <Navbar />
        {contact}
      </div>
  );
}
export default App;
