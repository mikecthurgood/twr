import { toScript } from 'hypernova';

import { DATA_KEY } from './constants';

export function serializeState(
  name: string,
  data: Record<string, any> = {},
): string {
  const key = name.replace(/\W/g, '');
  let script = '';
  if (Object.keys(data).length) {
    script = toScript(
      {
        [DATA_KEY]: key,
      },
      data,
    );
  }

  return script;
}
