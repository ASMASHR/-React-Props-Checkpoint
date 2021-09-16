import 'bootstrap';
import './App.css';
import Profile  from './profile/profile.js';
import FullName from  './profile/FullName.js';
import NavBar from  './profile/navbar.js';
import Profession from  './profile/profession.js';
import Bio from  './profile/bio.js';
import ProfilePhoto from  './profile/ProfilePhoto.js';
import imgChild from './imgchild.jpg';

function App(props) {
  var y=5; //y is used to control the prop types  
  return (
<div className="App" >
      <NavBar/>
      <div className="Profile">
        <ProfilePhoto/>
        <div className="Info">
          <FullName/>
          <Profession/>
        </div>
      </div>
      <Bio/>
      
      <Profile name="Asma Sahraoui"  profession="Full Stack JS developer" bio="I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand. 
      The list of projects I follow on GitHub will give you a good idea of the types of tools I’d prefer to be using." >{imgChild} 
      </Profile>

</div>
  );
}
    //  default  props for profile.js
App.defaultProps = {
         name: "Asma",
         profession:" Developer",
         bio:"nothing thanks"
      }

export default App;
