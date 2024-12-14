import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

interface IHeaderComponent {
  rightElements?: React.ReactNode[];
}
const logo = '/logo.png';

export default function HeaderComponent({ rightElements }: IHeaderComponent) {
  return (
    <S.Header>
      <Link href="/">
        <div className="header__logo">
          <Image className="header__logo--image" src={logo} fill sizes="100" alt="헤더로고" priority={true} />
        </div>
      </Link>
      {rightElements && <div className="header__icons">{rightElements}</div>}
    </S.Header>
  );
}

const S = {
  Header: styled.header`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px 10px;
    box-sizing: border-box;
    z-index: 100;
    pointer-events: none;
    /* box-shadow: #00000011 -2px 3px 9px 2px; */
    .header {
      &__logo {
        display: block;
        position: relative;
        width: 80px;
        height: 40px;
        pointer-events: auto;
        &--image {
          position: relative;
          object-fit: cover;
        }
      }
    }
  `,
};
