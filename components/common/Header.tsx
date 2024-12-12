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
      <div className="header">
        <Link href="/">
          <div className="header__logo">
            <Image className="header__logo--image" src={logo} fill sizes="100" alt="헤더로고" priority={true} />
          </div>
        </Link>
        {rightElements && <div className="header__icons">{rightElements}</div>}
      </div>
    </S.Header>
  );
}

const S = {
  Header: styled.header`
    box-shadow: #00000011 -2px 3px 9px 2px;
    padding: 5px 30px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
      pointer-events: none;
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
