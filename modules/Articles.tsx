import Image from 'next/image';
import articles from 'api/article';
import imgSrc from 'static/images/placeholder-image.png';

const ArticleList = () => {
  return (
    <div className="row">
      {articles.map((article) => {
        return (
          <div
            className="col-md-6 col-sm-12 col-lg-4 py-3 pe-auto"
            key={article.id}
            onClick={() => window.open(article.url, '_blank')}
          >
            <div className="card mr-1">
              <div className="card-header" style={{ height: '200px', overflow: 'hidden' }}>
                <Image
                  objectFit='contain'
                  src={article.thumbnail || imgSrc}
                  alt={`image-${article.id}`}
                />
              </div>
              <div className="card-body">
                <h3 className="">{article.title}</h3>
                <p className="card-text">{article.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Article = () => {
  return (
    <section
      className="resume py-5 d-lg-flex justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-4">Articles</h2>
            <ArticleList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
