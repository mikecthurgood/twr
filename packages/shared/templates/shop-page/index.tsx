import { memo } from 'react';
import { withMediaQueries } from '../../react-utils';

import { ShopPageTemplate, ShopPageTemplateProps } from './ShopPageTemplate';

export * from './ShopPageTemplate';
export * from './store';

export default memo(withMediaQueries<ShopPageTemplateProps>(ShopPageTemplate));
