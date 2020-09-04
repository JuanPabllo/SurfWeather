import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeather3hoursFixture from '@test/fixtures/stormglass_weather_3_hours.json';
import stormGlassNormalized3hoursFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios');

describe('StormGlass clients', () => {
  it('should return the normalized forecast from the StormGlass services', async () => {
    const lat = -33.797876;
    const lng = 152.345674;

    axios.get = jest
      .fn()
      .mockResolvedValue({ data: stormGlassWeather3hoursFixture });

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormGlassNormalized3hoursFixture);
  });
});
