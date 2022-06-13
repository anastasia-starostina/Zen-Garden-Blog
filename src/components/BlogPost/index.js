import React from 'react';
import './BlogPost.css'

//Example of a blog post
const blog = {
  title:"Zen and the Art of the Japanese Rock Garden",
  author: "Emi Noguchi",
  datePosted: "October 29, 2021",
  content: "Unlike its Western counterparts, the Japanese garden is a child of philosophy as well as aesthetics. This deep regard for the conceptual has no greater expression than it does in the karesansui, or dry garden, sometimes translated as “Japanese rock garden” or “Japanese Zen garden.” By any name, this is the garden through which mountains, oceans, and even plants are expressed through gravel, deliberately placed rocks, and—thanks to rain and spores on the wind—the occasional patch of moss. From all this, plus some extremely meticulous raking, a scene comes alive for those willing to sit and look on patiently.",
  imageSrc: "https://cdn.mos.cms.futurecdn.net/cPBL69jjb92ZUWBM9bGZzW-1024-80.jpg.webp",
  imageAlt: "Some text",
}

//Exporting the function and passing object keys in JSX
export default function BlogPost() {
  return (
    <div className = 'blogpost'>
     <header className='header'>
      <h1 className='title'><i>{blog.title}</i></h1>
      <h2 className ='article-author'>By {blog.author}</h2>
      <p className='date-posted'>{blog.datePosted}</p>
      </header>
      <article className ='article'>
      <p>{blog.content}</p>
      <img className='picture' src={blog.imageSrc} width ='600px'
      alt={'Photo of' + blog.title} />
      </article>
    </div>
  )
};
