/* eslint-disable no-console */
import { fromScript } from 'hypernova';

const DATA_KEY = 'hypernova-key';
const DATA_ID = 'hypernova-id';

// Loads the data from the data <script> tag of a server-rendered
// component and returns it. If there are more than one of the
// component then the data is combined
export function loadState<S extends Record<string, any>>(
  ...componentsNames: string[]
): S {
  return componentsNames.reduce((aggr, name) => {
    const key = name.replace(/\W/g, '');
    const scriptNodes = document.querySelectorAll(
      `script[data-${DATA_KEY}="${key}"]`,
    );

    const payloads = Array.prototype.map.call(scriptNodes, node => {
      const id = node.getAttribute(`data-${DATA_ID}`);
      const data = fromScript({
        [DATA_KEY]: key,
        [DATA_ID]: id,
      });
      return data;
    });

    if (payloads.length === 0) {
      return aggr;
    }

    const [data] = payloads;
    return {
      ...aggr,
      ...(data as Record<string, any>),
    };
  }, {} as S);
}
