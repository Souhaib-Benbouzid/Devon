import React from 'react';
import firebase from '../index';

export default function Firebase({ children }) {
  const [firebaseInitialized, setFirebaseInitialized] = React.useState(false);

  React.useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  }, []);
  console.log(firebaseInitialized);
  return firebaseInitialized ? <>{children}</> : <div>loading ... </div>;
}
