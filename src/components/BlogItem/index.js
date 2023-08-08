// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItemDetails

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="blog-item-container">
          <img src={imageUrl} alt={`item${id}`} className="blog-item-image" />
          <div className="blog-info">
            <p className="blog-item-topic">{topic}</p>
            <h1 className="blog-item-title">{title}</h1>
            <div className="author-info">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p className="avatar-title">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
