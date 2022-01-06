import { EntityState } from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';

import { NormalizedResult } from './interfaces';

export function normalizeSimpleEntity<T>(
  schemaName: string,
  items: T[],
  options?: schema.EntityOptions<T>,
): EntityState<T> {
  const entitySchema = options
    ? new schema.Entity(schemaName, {}, { ...options })
    : new schema.Entity(schemaName, {});

  const normalized: NormalizedResult<T> = normalize(items, [entitySchema]);

  const entities = normalized.entities[schemaName];
  const ids = normalized.result;
  return { entities, ids };
}
