import { createGlobalStyle } from "styled-components";

import AvantGardeBoldEot from "./AvantGarde-Bold/AvantGarde-Bold.eot";
import AvantGardeBoldTtf from "./AvantGarde-Bold/AvantGarde-Bold.ttf";
import AvantGardeBoldWoff from "./AvantGarde-Bold/AvantGarde-Bold.woff";
import AvantGardeBoldWoff2 from "./AvantGarde-Bold/AvantGarde-Bold.woff2";

import AvantGardeMediumEot from "./AvantGarde-Medium/avant-garde-medium.eot";
import AvantGardeMediumTtf from "./AvantGarde-Medium/AvantGardeITCbyBT-Medium.ttf";
import AvantGardeMediumWoff from "./AvantGarde-Medium/AvantGardeITCbyBT-Medium.woff";
import AvantGardeMediumWoff2 from "./AvantGarde-Medium/avant-garde-medium.woff2";

import AvantGardeNormalEot from "./AvantGarde-Normal/avant-garde-normal.eot";
import AvantGardeNormalTtf from "./AvantGarde-Normal/AvantGardeITCbyBT-Book.ttf";
import AvantGardeNormalWoff from "./AvantGarde-Normal/AvantGardeITCbyBT-Book.woff";
import AvantGardeNormalWoff2 from "./AvantGarde-Normal/avant-garde-normal.woff2";

import AvantGardeDemEot from "./AvantGarde-Dem/avant-garde-demi-bt.eot";
import AvantGardeDemTtf from "./AvantGarde-Dem/AvantGardeITCbyBT-Demi.ttf";
import AvantGardeDemWoff from "./AvantGarde-Dem/AvantGardeITCbyBT-Demi.woff";
import AvantGardeDemWoff2 from "./AvantGarde-Dem/avant-garde-demi-bt.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: 'AvantGarde';
  src: url(${AvantGardeBoldEot});
  src: url(${AvantGardeBoldTtf}) format('truetype'),
      url(${AvantGardeBoldWoff}) format('woff'),
      url(${AvantGardeBoldWoff2}) format('woff2');
  font-weight: 700;
  }
  @font-face {
    font-family: 'AvantGarde';
  src: url(${AvantGardeDemEot});
  src: url(${AvantGardeDemTtf}) format('truetype'),
      url(${AvantGardeDemWoff}) format('woff'),
      url(${AvantGardeDemWoff2}) format('woff2');
  font-weight: 600;
  }
  @font-face {
    font-family: 'AvantGarde';
  src: url(${AvantGardeMediumEot});
  src: url(${AvantGardeMediumTtf}) format('truetype'),
      url(${AvantGardeMediumWoff}) format('woff'),
      url(${AvantGardeMediumWoff2}) format('woff2');
  font-weight: 500;
  }
  @font-face {
    font-family: 'AvantGarde';
  src: url(${AvantGardeNormalEot});
  src: url(${AvantGardeNormalTtf}) format('truetype'),
      url(${AvantGardeNormalWoff}) format('woff'),
      url(${AvantGardeNormalWoff2}) format('woff2');
  font-weight: 400;
  }
`;
