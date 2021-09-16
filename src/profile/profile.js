
import 'bootstrap';
import PropTypes from "prop-types";//import the proptypes
const  Profile=(props )=> {
  
 function afficheBio(){
      var x = document.getElementById("hideButton");{/* the variable x is for  hiding the button after the click */}
      x.style.display="none";
      return   document.getElementById("bio").innerHTML=props.bio
   }
   function handleName(){
      return alert (`Hey there, I'm ${props.name} and I'm a ${props.profession}. This message is alerted using props`)
   }
   return(  
  <div className="profile">
     {/* read more biography using prop */}
      <p id="bio" style={{fontStyle:"italic", color:"blueviolet"}}></p>
      <button type="submit"id="hideButton" style={{marginTop:"1px", display: "block", border:"0px",backgroundColor:"turquoise",padding:"5px", width:"100px"}} onClick={afficheBio}>Read More</button>
      <br/>
      <button type="submit" onClick={handleName} style={{marginTop:"10px" }}>Alert Name</button>
      <br/>

      {/* this image is a prop child */}
      <h5 style={{textAlign:"center", color:"yellowgreen"}}>this image is a prop child:  <img src={props.children} style={{  height:"200px", width:"200px" ,marginTop:"10px"}}></img></h5>
   </div>
)};
// define the prop types
Profile.propTypes = {
 name: PropTypes.string,
 profession:PropTypes.string,
 bio:PropTypes.string,
};
export default Profile;  