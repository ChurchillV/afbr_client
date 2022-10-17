//import './css_files/vince_main.css'
import FeaturedArticlesContent from './featured_articles_content'

function FeaturedArticlesMain()
{
  return (
    <>
      <div className="article_1">
        <img src="../images/Article-profile1.jpg" alt="bulldog picture"
      className='vince_image1' />
        <section className='article_preview'>
          <h1 className='Title'>Raising Bulldogs </h1>
          <FeaturedArticlesContent />
        </section>
      </div>

      <div className="article_1">
        <img src="../images/Articleprofile2.jpg" alt="bulldog picture" 
        className='vince_image1' />
        <section className='article_preview'>
          <h1 className='Title'>Raising Bulldogs </h1>
          <FeaturedArticlesContent />
        </section>
      </div>

      <div className="article_1">
        <img src="../images/Article_profile3.jpg" alt="bulldog picture" 
        className='vince_image1' />
        <section className='article_preview'>
          <h1 className='Title'>Raising Bulldogs </h1>
          <FeaturedArticlesContent />
        </section>
      </div>


    </>
  )
}

export default FeaturedArticlesMain
