import { add, map, reject, take } from 'lodash-compat';

const result = map([], n => add(1, n));
take(reject(result), 1);
