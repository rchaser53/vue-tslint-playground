test('for failed', () => {
  const hoge = () => {
    throw new Error('err');
  };
  expect(() => {
    hoge();
  }).toThrow();
});
