import React, { useState } from 'react';
import {Menu} from "lucide-react"
import {auth} from "../../firebase"


function DashTest() {
  
	const user = auth.currentUser;
	console.log(user)
	// if (user !== null) {
	//   user.providerData.forEach((profile) => {
	// 	console.log("Sign-in provider: " + profile.providerId);
	// 	console.log("  Provider-specific UID: " + profile.uid);
	// 	console.log("  Name: " + profile.displayName);
	// 	console.log("  Email: " + profile.email);
	// 	console.log("  Photo URL: " + profile.photoURL);
	//   });
	// }

  return (
    // DrawerPage
	<div  className="drawer drawer-mobile font-kd text-black">
	<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
	<div className="drawer-content flex flex-col items-center justify-start bg-base-100 md:px-4 md:py-1">
	{/* <!-- Page content here --> */}
		{/* Navbar */}
		<div className="navbar bg-primary text-primary-content rounded-b-2xl md:rounded-full ">
			<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mr-1"><Menu/></label>
			{/* <a className="btn btn-ghost normal-case text-xl">FirBuddy</a> */}
			<img  src="images/Logo.png" className="btn hover:bg-base-100"></img>
		</div>

		<div>{user.email}</div>
		<div>{user.displayName}</div>
		<div>{user.uid}</div>
	
	</div> 
	{/* Drawer */}
	<div className="drawer-side bg-base-100 ">
		<label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
		<ul className="menu p-4 w-80  text-base-content bg-primary rounded-r-2xl">
		{/* <!-- Sidebar content here --> */}
		<li className=""><a>Sidebar Item 1</a></li>
		<li><a>Sidebar Item 2</a></li>
		</ul>
  
	</div>
	</div>


    
  );
}

export default DashTest;
