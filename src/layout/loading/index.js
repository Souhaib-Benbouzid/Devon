import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Loading(props) {
  const loading = false;
  const styles = {
    position: 'fixed',
    top: '0',
    right: '0',
    width: '100%',
    zIndex: '10000',
    display: loading ? 'initial' : 'none',
  };

  return <LinearProgress style={styles} {...props} />;
}
