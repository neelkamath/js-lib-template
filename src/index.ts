/**
 * @example `console.log(sayHello());`
 *
 * @packageDocumentation
 */

import fetchToken from './fetch-token';
import fetch from 'cross-fetch';
import { Container } from 'typedi';

Container.set(fetchToken, fetch);

export { default as sayHello } from './hello';
