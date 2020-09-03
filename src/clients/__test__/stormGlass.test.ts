import { StormGlass } from '@src/clients/stormGlass';

describe('StormGlass clients', () => {
  it('should return the normalized forecast from the StormGlass services', async () => {
    const lat = -33.797876;
    const lng = 152.345674;

    const stormGlass = new StormGlass();
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual({});
  });
});
