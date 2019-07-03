import React from 'react';
import TimeStamp from './Timestamp';
import User from './User';

const Post = ({ user, title, text, category, created, updated }) => (
  <span>
    <b>{title}</b>
    <i>
      {' ~ '}
      <User {...user} />
    </i>
    <br />
    (Created at: <TimeStamp data={created} />, Updated at: <TimeStamp data={updated} />)
  </span>
);

export default Post;
