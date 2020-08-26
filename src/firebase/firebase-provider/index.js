import React from 'react';

export default function Firebase({ children }) {
  const [firebaseInitialized, setFirebaseInitialized] = React.useState(true);

  return firebaseInitialized ? <>{children}</> : <div>loading ... </div>;
}
