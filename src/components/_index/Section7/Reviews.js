import React from 'react';
import styled from '@emotion/styled';
import Swiper from 'react-id-swiper';
import '../../../../node_modules/swiper/css/swiper.css';
import { SectionTitle } from '../../reuseablestyles/SectionTitle';
import { Review } from './Review';

const Container = styled.div`
  max-width: 1500px;

  margin: 1rem auto;
  & .swiper-button-next,
  .swiper-button-prev {
    color: transparent;
    &::after {
      color: ${(props) => props.theme.colors.primary};
      font-size: 2rem;
    }
    @media (max-width: 400px) {
      display: none;
    }
  }
  & .swiper-button-next {
    &::after {
      content: '➤';
      margin-left: 1rem;
    }
  }
  & .swiper-button-prev {
    &::after {
      content: '➤';
      margin-right: 1rem;
      transform: rotate(180deg);
    }
  }
  & .swiper-pagination-bullet-active {
    background: ${(props) => props.theme.colors.primary};
  }
`;

const Block = styled.div`
  width: 100%;
  height: 3rem;
`;

const Block2 = styled.div`
  width: 100%;
  height: 2rem;
`;

export const Reviews = () => {
  const params = {
    lazy: true,

    spaceBetween: 30,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      100: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };

  return (
    <Container>
      <SectionTitle title="Testimonials" color="white" />
      <Block />
      <Swiper {...params}>
        <div>
          <Block2 />
          <Review
            name="Jeffrey Diaz"
            blurb="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut "
          />
        </div>
        <div>
          <Block2 />
          <Review
            name="Laura Apple"
            blurb="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut "
          />
        </div>
        <div>
          <Block2 />
          <Review
            name="Mark Holden"
            blurb="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut "
          />
        </div>
      </Swiper>
    </Container>
  );
};
