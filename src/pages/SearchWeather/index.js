import React from "react";
import { Form } from "@rocketseat/unform";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/pt-br";

import Header from "~/components/Header";
import Search from "~/components/Search";
import TodayCard from "~/components/TodayCard";
import { getWeatherRequest } from "~/store/modules/weather/actions";

import { Container, Content, Title, CardWeather, Text } from "./styles";

import sun from "~/assets/sun.png";
import fewClouds from "~/assets/few-clouds.png";
import clouds from "~/assets/clouds.png";
import rain from "~/assets/rain.png";
import thunderstorm from "~/assets/thunderstorm.png";

export default function SearchWeather() {
  const dispatch = useDispatch();
  const allWeather = useSelector(state => state.weather.conditions);
  const filteredWeather = allWeather
    ? allWeather.list.filter(reading => {
        return reading.dt_txt.includes("18:00:00");
      })
    : null;

  function weatherIcon(iconName) {
    const weatherIcons = [
      { name: "01", img: sun },
      { name: "02", img: fewClouds },
      { name: "03", img: clouds },
      { name: "04", img: clouds },
      { name: "09", img: rain },
      { name: "10", img: rain },
      { name: "11", img: thunderstorm }
    ];

    const filterWeatherIcons = weatherIcons.filter(
      item => iconName.indexOf(item.name) !== -1
    );

    return filterWeatherIcons[0].img;
  }

  function dayInweek(time) {
    let newDate = new Date();
    const weekday = time * 1000;
    newDate.setTime(weekday);

    return moment(newDate).format("ddd");
  }

  function handleSubmit({ search }) {
    dispatch(getWeatherRequest(search));
  }

  return (
    <>
      <Container>
        <Header />
        <Content bigMargin className="searchBox">
          <Title>Seja bem vindo</Title>
          <Title bold className="subTitle">
            Selecione uma Cidade
          </Title>
          <Form onSubmit={handleSubmit}>
            <Search placeholder="Pesquisar por cidade" altButton="Buscar" />
          </Form>
        </Content>
        <Content className="contentWeatherWeek">
          <Title
            size="18px"
            family="Roboto, sans-serif"
            className="weekForecast"
          >
            Previsão para a semana:
          </Title>
          <ul className="weatherWeek">
            {filteredWeather
              ? filteredWeather.slice(1).map(item => (
                  <CardWeather key={item.dt}>
                    <div className="top">
                      <img
                        src={weatherIcon(item.weather[0].icon)}
                        alt={item.weather[0].main}
                      />
                      <Text color="#a996b6" size="12px" weight="500">
                        {dayInweek(item.dt)}
                      </Text>
                    </div>
                    <div className="bottom">
                      <Text size="20px" weight="600">{`${item.main.temp.toFixed(
                        1
                      )}°C`}</Text>
                      <Text
                        color="#a996b6"
                        size="13px"
                        weight="500"
                      >{`${item.wind.speed}m/s`}</Text>
                      <Text
                        color="#a996b6"
                        size="13px"
                        weight="500"
                      >{`clouds: ${item.clouds.all}%`}</Text>
                    </div>
                    <div className="line"></div>
                  </CardWeather>
                ))
              : ""}
          </ul>
        </Content>
        {filteredWeather ? (
          <TodayCard
            weather={filteredWeather[0]}
            weatherIcon={weatherIcon(filteredWeather[0].weather[0].icon)}
            city={allWeather.city}
          />
        ) : (
          ""
        )}
      </Container>
    </>
  );
}
