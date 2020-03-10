import React from "react";
import moment from "moment";

import cloudBackground from "~/assets/cloud-background.png";

import {
  Content,
  Title,
  Today,
  IconToday,
  Text,
  BackgroundImage,
  TodayInfo
} from "./styles";

export default function TodayCard(props) {
  const { weather, weatherIcon, city } = props;
  console.log(weather);
  function getDirection(angle) {
    var directions = [
      "North",
      "North-West",
      "West",
      "South-West",
      "South",
      "South-East",
      "East",
      "North-East"
    ];
    return directions[
      Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8
    ];
  }

  return (
    <Content today>
      <Today>
        <div>
          <Title black>Today</Title>
          <Title bold black>
            {city.name}
          </Title>
        </div>
        <IconToday>
          <img src={weatherIcon} alt={weather.weather[0].main} />
        </IconToday>
      </Today>
      <BackgroundImage image={cloudBackground}>
        <Title bold black align="center" display="block" size="100px">
          {Math.floor(weather.main.temp)}
          <small>°C</small>
        </Title>
        <Text color="#5d3a76" align="center" weight="500">
          {weather.weather[0].description}
        </Text>
        <Text color="#5d3a76" align="center" weight="500">
          {moment().format("H:mm  MMM DD")}
        </Text>
      </BackgroundImage>
      <Content>
        <div className="itemToday">
          <TodayInfo title="true">Wind</TodayInfo>
          <TodayInfo>
            {`${weather.wind.speed}m/s, ${getDirection(weather.wind.deg)} (${
              weather.wind.deg
            })`}
          </TodayInfo>
        </div>
        <div className="itemToday">
          <TodayInfo title="true">Cloudiness</TodayInfo>
          <TodayInfo>{weather.weather[0].description}</TodayInfo>
        </div>
        <div className="itemToday">
          <TodayInfo title="true">Pressure</TodayInfo>
          <TodayInfo>{`${weather.main.pressure} hpa`}</TodayInfo>
        </div>
        <div className="itemToday">
          <TodayInfo title="true">Humidity</TodayInfo>
          <TodayInfo>{`${weather.main.humidity}%`}</TodayInfo>
        </div>
        <div className="itemToday">
          <TodayInfo title="true">Sunrise</TodayInfo>
          <TodayInfo>{moment.unix(city.sunrise).format("H:mm")}</TodayInfo>
        </div>
        <div className="itemToday">
          <TodayInfo title="true">Sunset</TodayInfo>
          <TodayInfo>{moment.unix(city.sunset).format("H:mm")}</TodayInfo>
        </div>
        <div className="itemToday">
          <TodayInfo title="true">Geo coords</TodayInfo>
          <TodayInfo>{`[${city.coord.lon}, ${city.coord.lat}]`}</TodayInfo>
        </div>
      </Content>
    </Content>
  );
}
