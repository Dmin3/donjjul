'use client';

import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from 'styled-components';

type SlickTypes = {
  children: React.ReactNode;
  dots?: boolean;
  arrows?: boolean;
  infinite?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  speed?: number;
  autoplaySpeed?: number;
  pauseOnHover?: boolean;
  autoplay?: boolean;
  beforeChange?: (currentSlide: number, nextSlide: number) => void;
};

const Slick = ({
  children,
  dots = false,
  arrows = false,
  infinite = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  speed = 1000,
  autoplaySpeed = 1000,
  pauseOnHover = true,
  autoplay = false,
  beforeChange,
}: SlickTypes) => {
  const slickSetting = {
    dots,
    arrows,
    infinite,
    slidesToShow,
    slidesToScroll,
    speed,
    autoplaySpeed,
    pauseOnHover,
    autoplay,
    cssEase: 'linear',
    beforeChange,
  };

  return <Slider {...slickSetting}>{children}</Slider>;
};

export default Slick;

const Div = styled.div`
  display: block;
`;
