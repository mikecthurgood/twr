export type Up = {
  down?: never;
  isOpen?: never;
  left?: never;
  right?: never;
  up: true;
};

export type Down = {
  down: true;
  isOpen?: never;
  left?: never;
  right?: never;
  up?: never;
};

export type Right = {
  down?: never;
  isOpen?: never;
  left?: never;
  right: true;
  up?: never;
};

export type Left = {
  down?: never;
  isOpen?: never;
  left: true;
  right?: never;
  up?: never;
};

export type UpOrDown = {
  down?: never;
  isOpen: boolean;
  left?: never;
  right?: never;
  up?: never;
};
