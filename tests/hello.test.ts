import { sayHello } from '../src';

describe('sayHello', () => {
  it("must return <'hello'>", async () => {
    expect(sayHello()).toBe('Hello');
  });
});
