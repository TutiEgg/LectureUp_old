import fs from 'fs';
import {promises as fs_promises} from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import * as React from "react";
// npm i --save-dev @types/node@17.0.29


/**
   * Generates Static pathes
   * `/posts/1` and `/posts/2`
   *
   * @return {Object} paths - All pathes inside an Folder
*/
export async function getStaticPaths() {
  // console.log("getStaticPaths");
  var files = _getFilesListInFolderStructure("posts");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.split(".")[0],
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
/**
 * Next.js will pre-render this page at build time using the props returned by getStaticProps
 * @param {Object} params - paths
 * @returns {Object} props - Content of the Site
 */
export async function getStaticProps({ params: { slug } }) {
  // console.log("getStaticPropss");
  const files_all = _getAllFilesFromFolder("posts");
  

  for (var x=0; x<files_all.length; x++){
    const file_split_list = files_all[x].split(/[/.]/)
    const name = file_split_list[file_split_list.length-2]

    if (name == slug){
      var path = files_all[x]
      
    }
  }
  // Create a Dictionary-like Object out of an multidimensional List
  let data_dict = create_dict_outof_list(files_all)
  // Creates the Navigation-string for the User
  let msg = navigationTXT(data_dict, "posts", "");
  // Writes/saves the Navigation-string into a txt-file
  let navi_txt_path = 'pages/post/navigation.txt'
  fs.writeFile(navi_txt_path,msg,(err) => err && console.error(err));
  const fileName = fs.readFileSync(`${path}`, 'utf-8');

  let data = await navigationJson(navi_txt_path)
  console.log("Daten",data)
  fs.writeFile('pages/post/navi.json',JSON.stringify(data),(err) => err && console.error(err)); 
  
  
 
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };   
}

export default function PostPage({ frontmatter, content }) {

  return (
    <div className='mx-auto'>
      <h1>{frontmatter.title}</h1><div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      
    </div>
  );
}

/**
 * Gets a List of Files with Pathes out of a Folder-Structure
 * @param {List} dir - Path to Folder
 * @returns {List} - returns a list of files (pathes)
 */
var _getAllFilesFromFolder = function(dir) {
  // console.log("getAllFiles in slug");

  var filesystem = require("fs");
  var results = [];

  filesystem.readdirSync(dir).forEach(function(file) {

      file = dir+'/'+file;
      var stat = filesystem.statSync(file);

      if (stat && stat.isDirectory()) {
          results = results.concat(_getAllFilesFromFolder(file))
      } else results.push(file);

  });
  //console.log("AllFiles",results);
  

  return results;

};


/**
 * 
 * @param {*} path 
 * @returns {List} - returns a list of files
 */
var _getFilesListInFolderStructure = function(path) {
  // console.log("getAllFiles in slug");
  var all_files_path = _getAllFilesFromFolder(path);
  var all_files_list = []
  
  for (const file of all_files_path){
    all_files_list.push(file.split('/').pop());
  }

  return all_files_list;

};

function navigationTXT(data, key, number){
  let msg = ""
  let counter = 1
  for (let value in data[key]) {
    let number_str = number + counter
    if (data[key][value] == null) {
      
      let value_split = value.split(".")
      msg = msg + ` (${number_str}) [navname] ${value_split[0]} [filename] ${value} \n`
      counter += 1
      
    } else {
      msg = msg + ` (${number_str}) [navname] ${value} \n`
      msg = msg + navigationTXT(data[key], value, number + counter + ".") 
      counter += 1
    }

  }
  return msg
}

async function navigationJson(filename){
  let content_list = await asyncReadFile(filename);
  // Remove empty elements
  content_list = content_list.filter(n => n)

  let list_of_dict = [];
  for (var i=0; i<content_list.length; i++) {
    // Cut String into array
    let nav_list = content_list[i].split(/[[()\]]/);
    
    // Remove spaces
    let nav_list_no_spaces = nav_list.map(function (el) {
      return el.trim();
    });
    // Remove empty elements in list
    let filtered_nav_list = nav_list_no_spaces.filter(n => n)

    let list = ["navname", "filename"]
    console.log("lsit", filtered_nav_list)
    
    let temp_dict = {}
    // Check if list is defined and empty (no elements)
    if (filtered_nav_list.length != 0){
      // Check if first element is a number
      
        let new_dict = {}
        for (var j=1; j<filtered_nav_list.length; j=j+2){
          // Check if first value after the numbere is "navname" or "filename" and also check if j is a not a straight value
          if (list.includes(filtered_nav_list[j]) && j%2 == 1) {
            try {
              new_dict[filtered_nav_list[j]] = filtered_nav_list[j+1]
            } catch {
              console.log("ERROR: navigation.txt Something is missing ")
            }
          } else {
            console.log("ERROR: navigation.txt wrong use of 'navname' and/or 'filename' ")
          }
        }
        temp_dict[filtered_nav_list[0]] = new_dict
      

    }

    
    list_of_dict.push(Object.assign({}, temp_dict))
  }
  console.log("Hiiieer",list_of_dict)
  return list_of_dict
  
}

function create_dict_outof_list(paths) {
  
  
  const dictionary = {};
  
  const process = (path, dic) => {
    if (path.length === 0)
      return;
    const key = path.shift();
    if (path.length === 0)
      return dic[key] = null;
    dic[key] ??= {};
    return process(path, dic[key]);
  };
  
  paths.forEach(path => process(path.split("/"), dictionary));
  return dictionary
}

// ✅ read file ASYNCHRONOUSLY
async function asyncReadFile(filename) {
  const contents = await fs_promises.readFile(filename, 'utf-8');

  const arr = contents.split(/[\n]/);
  

  return arr;
}


function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {

  const {readFileSync, promises: fsPromises} = require('fs');
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/[\n]/);

  return arr;
}



