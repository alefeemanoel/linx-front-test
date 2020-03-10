export function getWeatherRequest(data) {
  return {
    type: "@weather/GET_REQUEST",
    payload: { data }
  };
}

export function getWeatherSuccess(data) {
  return {
    type: "@weather/GET_SUCCESS",
    payload: { data }
  };
}

export function getWeatherFailure() {
  return {
    type: "@weather/GET_FAILURE"
  };
}
