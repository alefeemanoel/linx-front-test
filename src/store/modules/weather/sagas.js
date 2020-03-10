import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "~/services/api";

import { getWeatherSuccess, getWeatherFailure } from "./actions";

export function* getWeather({ payload }) {
  try {
    const city = payload.data;
    const appid = "a630b6bc03da0254d41dd9fb2a97bdb5";
    const units = "metric";

    const response = yield call(api.get, "forecast", {
      params: { q: city, appid, units }
    });

    yield put(getWeatherSuccess(response.data));
  } catch (err) {
    toast.error("Erro ao atualizar perfil, confira seus dados!");
    yield put(getWeatherFailure());
  }
}

export default all([takeLatest("@weather/GET_REQUEST", getWeather)]);
