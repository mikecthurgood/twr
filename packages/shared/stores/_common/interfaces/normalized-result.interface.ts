export interface NormalizedResult<T> {
  entities: {
    [name: string]: { [key: string]: T };
  };
  result: string[];
}
