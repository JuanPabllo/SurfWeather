import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';

jest.mock('axios');

describe('StormGlass clients', () => {
  it('should return the normalized forecast from the StormGlass services', async () => {
    const lat = -33.797876;
    const lng = 152.345674;

    axios.get = jest.fn().mockResolvedValue({});

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual({});
  });
});
