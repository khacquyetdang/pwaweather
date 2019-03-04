  /*
   * Fake weather data that is presented when the user first uses the app,
   * or when the user has not saved any cities. See startup code for more
   * discussion.
   */
  export const initialWeatherForecast = {
    key: 'New York, US',
    label: 'New York, NY',
    created: '2016-07-22T01:00:00Z',
    forecasts: [{
      code: 44,
      high: 86,
      low: 70
    }, {
      code: 44,
      high: 94,
      low: 73
    }, {
      code: 4,
      high: 95,
      low: 78
    }, {
      code: 24,
      high: 75,
      low: 89
    }, {
      code: 24,
      high: 89,
      low: 77
    }, {
      code: 44,
      high: 92,
      low: 79
    }, {
      code: 44,
      high: 89,
      low: 77
    }],

    current_observation: {
      astronomy: {
        sunrise: "5:43 am",
        sunset: "8:21 pm"
      },
      condition: {
        text: "Windy",
        date: "Thu, 21 Jul 2016 09:00 PM EDT",
        temperature: 56,
        code: 24
      },
      atmosphere: {
        humidity: 81,
        pressure: 29.38,
        rising: 0,
        visibility: 10
      },
      wind: {
        speed: 25,
        direction: 195
      }
    }
  };