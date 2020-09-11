import React from 'react';

import Skeleton from '@material-ui/lab/Skeleton';

import { types } from '../../src/utils/card';

const CardBusinessSkeleton = () => {
  const { size } = types.cardBusiness;
  // console.log('CardBusinessSkeleton -> size', size);
  // return <Skeleton variant="rect" width={size.width} height={size.height} />;
  return <Skeleton variant="rect" width={size.width} height={size.height} />;
};
export default CardBusinessSkeleton;
