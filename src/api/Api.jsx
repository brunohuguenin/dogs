import React from 'react';
import UserPost from './endPoint/UserPost';
import TokenPost from './endPoint/TokenPost';
import PhotoPost from './endPoint/PhotoPost';
import PhotoGet from './endPoint/PhotoGet';

const Api = () => {
  return (
    <div>
      <h2>USER POST</h2>
      <UserPost />
      <h2>TOKEN POST</h2>
      <TokenPost />
      <h2>PHOTO POST</h2>
      <PhotoPost />
      <h2>PHOTO GET</h2>
      <PhotoGet />
    </div>
  );
};

export default Api;
