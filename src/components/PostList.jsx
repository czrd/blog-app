import React from 'react';

const PostList = ({ posts }) => (
  <ul>
    {posts.map((post, i) => (
      <li key={i.toString()}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

export default PostList;
