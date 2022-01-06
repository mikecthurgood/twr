import { memo } from 'react';
import { withMediaQueries } from '../../react-utils';

import { HomePageTemplate } from './HomePageTemplate';

export * from './HomePageTemplate';
export * from './store';

export default memo(withMediaQueries(HomePageTemplate));
