import React from 'react';
import {useEffect} from "react";

// können zahlen nicht in reihenfolge liegen 
//txt zu json 
/**
 * Creates a Layout for every slug-pages
 * @param {*} param0 
 * @returns {HTML} - returns HTML-Content
 */
export default function Layout({ children }) {  
  
  useEffect(() => {

    // var dropdown = true;
    
    var file_structure = require('../pages/post/navi.json');
    var nav = document.getElementById("nav");
    var uld = document.createElement("ul");
    let parent_div = uld;
    uld.setAttribute("id", "main");
    uld.classList.add("navbar-nav", "mr-auto");
    
    var ul_array=new Array;
    for (var i=0; i<file_structure.length; i++) {
      console.log(file_structure[i]);
      var key = (Object.keys(file_structure[i]));
      const key_split = key.toString().split(".");
      var navi_name = file_structure[i][key]['navname'];
      var filename = file_structure[i][key]['filename'];
      
      if(!filename){
        var folder = document.createElement("li"); 
        
        if(key_split.length==1){
          parent_div.appendChild(folder);
          ul_array=[];
        }
        else{
          folder.classList.add("sub-menu");
          var parent = ul_array[key_split.length-2];
          console.log(ul_array);
  
          if(ul_array[key_split.length-1]!= undefined ){
            console.log("arraylegnth:",ul_array.length,"keysplitleght",key_split.length, "both",ul_array.length-key_split.length)
            ul_array.splice(key_split.length-1,key_split.length);
            
          }
          if(parent.tagName=="LI"){
            folder = document.createElement("li");
          }
          parent.appendChild(folder);
          console.log("parent",parent);
        }
        folder.setAttribute("id", navi_name);
        var sub_folder= document.createElement("ul");
        var sub_folder_name = document.createElement("a");
        sub_folder_name.innerHTML= navi_name;
        sub_folder.classList.add("sub-menu");
        folder.appendChild(sub_folder_name);
        folder.appendChild(sub_folder);
        ul_array.push(folder);


        // DROPDOWN OPTION (IN TESTING)

        // if(dropdown == true){
        //   sub_folder.classList.add("dropdown-container");
        //   var dropdown_button = document.createElement("button");
        //   dropdown_button.innerHTML= "►";
        //   dropdown_button.classList.add("dropdown-btn");
        //   sub_folder_name.appendChild(dropdown_button);

        //   var dropdowns = document.getElementsByClassName("dropdown-btn");
        //   var i;

        //   for (i = 0; i < dropdowns.length; i++) {
        //     dropdowns[i].addEventListener("click", function() {
        //       this.classList.toggle("active");
        //       var dropdownContent = this.parentElement.nextElementSibling;
        //       if (dropdownContent.style.display === "block") {
        //         dropdownContent.style.display = "none";
        //       } else {
        //         dropdownContent.style.display = "block";
        //       }
        //     });
        //   }
        // }
        
      }
      else{
        var a_href=  filename.toString().split(".")[0];
        var element = document.createElement("li");        

        if(key_split.length==1){
          parent_div.appendChild(element);
        } 
        else{
          if(folder.tagName=="LI"){
            element = document.createElement("li");
          }
          sub_folder.appendChild(element); 
        }
        var a_tag =document.createElement("a");
        a_tag.href= '/post/'+ a_href;
        a_tag.setAttribute("id", filename);
        a_tag.innerHTML = navi_name;
        element.appendChild(a_tag);
      }  
    }
    nav.appendChild(uld);     
  }, [])
  
  return (
    <div className='wrap-all'>
      <header>
        <nav className="navbar navbar-expand-lg">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-bs-controls="nav" aria-bs-expanded="false" aria-bs-label="Toggle navigation">
            <span className="navbar-toggler-icon" id="toggler-icon"></span>
          </button>

          <div id="nav" className='collapse navbar-collapse'>

          </div>
    
        </nav>
      </header>

      <div className='page-content'>
        <main className='container mx-auto flex-1'>{children}</main>
        <footer>
          <div>
            Prototype Version 4
          </div>
        </footer>
      </div>
    </div>
  );
}