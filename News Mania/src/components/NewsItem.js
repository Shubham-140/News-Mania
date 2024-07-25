import React from 'react';

export default function NewsItem(props) {
  const { title, description, imgUrl, readStatus, newsUrl, author, date, textClass, imgClass } = props;

  return (
    <>
      <div className="card">
        <img
          className="card-img-top"
          src={imgUrl ? imgUrl : 'https://images.unsplash.com/photo-1506765515384-028b60a970df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxwbGFjZWhvbGRlcnxlbnwwfHx8fDE2NTY1MTQ2Mzg&ixlib=rb-1.2.1&q=80&w=1080'}
          alt="Card img cap"
          style={{ width: '100%', height: '160px' }}
        />
        <div className="card-body">
          <h5 className={`card-title ${textClass}`} style={{ fontWeight: 'bold' }}>
            {title ? title.substr(0, 40) + "..." : "Title not available currently"}
          </h5>

          <p className={`card-text ${textClass}`} style={{ marginBottom: '1rem', color: description ? '#333' : '#999' }}>
            {description ? description.substr(0, 90) + "..." : "Detailed information about this article is currently unavailable. Please visit the link for more details."}
          </p>

          <p className={`card-text ${textClass}`}><small className='text-muted'>By {author?author.substr(0,15)+".." : "Unknown"} on {new Date(date).toGMTString().substr(0,16)}</small></p>
          <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm" rel="noreferrer">{readStatus}</a>
        </div>
      </div>
    </>
  );
}
