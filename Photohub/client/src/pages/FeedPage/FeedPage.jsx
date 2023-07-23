import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

function FeedPage() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <h1>Feed Page</h1>

      {/* Conditionally render the PhotoUpload component if the user is logged in */}
      {isLoggedIn}
      
      {/* Your Feed content goes here */}
    </div>
  );
}

export default FeedPage;