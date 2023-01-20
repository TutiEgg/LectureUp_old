import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import md from 'markdown-it';



// TODO startseite überarbeiten
//TODO Burgermenu

// Get all posts
export async function getStaticProps() {
  console.log("get Static props in index");

  // Filesystem = alle markdown-posts

  const fileName = fs.readFileSync(`posts/index.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  }; 
}

// Home-page {posts} um alle Variablen von jedem Post zubekommen 
/**
 * Generates a Default-Site (Home)
 * @param {*} param0 
 * @returns 
 */
export default function Home({ frontmatter, content}) {
  console.log("home in index");
  const [toggleViewMode, setToggleViewMode] = useState(false);
  //console.log("ViewMode ", toggleViewMode)
  return (
    <>  
      
        <div
          key={"index"}
          className={frontmatter.style}
        >
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    
        </div>
      
    
    </>
  );
}

export function PostPage({ frontmatter, content }) {
  return (
    <div className='prose mx-auto'>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}