// https://stackoverflow.com/questions/42398660/how-to-display-emoji-in-react-app
// I did not finish this feature, but I was trying to show the emoji

import React from 'react';

const Emoji = React.memo(({ label, symbol }) => (
  <span role="img" aria-label={label}>
    {String.fromCodePoint(symbol)}
  </span>
));

export default Emoji;
