import { Callout, ThreeLink } from '../../primitives';
import { shape, string } from 'prop-types';

import React from 'react';
import { withContent } from '../../../common/utils';

const Blurb = ({
  content: {
    home: { title, text },
    callout: { large },
  },
}) => (
  <div className="Blurb">
    <h2>{title}</h2>
    <p>
      {text}
      <ThreeLink text={'three.js'} />
    </p>
    <Callout text={large} />
  </div>
);

Blurb.propTypes = {
  content: shape({
    home: shape({
      title: string,
      text: string,
    }),
    callout: shape({
      large: string,
    }),
  }),
};

export default withContent(Blurb);