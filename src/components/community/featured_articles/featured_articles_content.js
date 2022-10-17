import React, { useState } from 'react'

const ReadMore = ({ children }) => {
   const text = children;
   const [ isReadMore, setisReadMore] = useState(true);
   const toggleReadMore = () => {
      setisReadMore(!isReadMore);
   };
   return (
      <p className="text">
         { isReadMore ? text.slice(0,150) : text }
         <span onClick={toggleReadMore} className="read-or-hide">
            { isReadMore ? "...read more" : "show less" }
         </span>
      </p>
      );
   };

function FeaturedArticlesContent() {
  return (
    <div className='article_preview'>
      <ReadMore>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab 
         porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero
         commodi officia aliquam! Maxime.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab 
         porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero
         commodi officia aliquam! Maxime.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab 
         porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero
         commodi officia aliquam! Maxime.
      </ReadMore>
    </div>
  )
}

export default FeaturedArticlesContent
