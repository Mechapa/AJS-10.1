import GameSavingLoader from '../loader';

test('GameSaving', () => {
  const gameSaving = GameSavingLoader.load().then((result) => result, (error) => {
    throw new Error(error);
  });
  return expect(Promise.resolve(gameSaving)).resolves.toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});