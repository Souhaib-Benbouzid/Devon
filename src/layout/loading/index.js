import React, { useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Loading(props) {
  const [loading, setloading] = useState(false);
  const styles = {
    position: 'fixed',
    top: '0',
    right: '0',
    width: '100%',
    zIndex: '999',
    display: loading ? 'initial' : 'none',
  };

  return <LinearProgress style={styles} {...props} />;
}
