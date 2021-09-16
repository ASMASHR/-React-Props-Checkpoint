import React from "react";
import ProfileImg from "./profileImg.jpg" //this picture is imported from the src folder

const ProfilePhoto = () => {
 return (
   <>
   <img src={ProfileImg} alt="Profile Photo" style={{ borderRadius:'200px', height:"200px", width:"200px" }}  />
  
   </>
 );
};
export default ProfilePhoto;