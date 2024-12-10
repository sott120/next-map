import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {}
const logo = '/logo.png';

export default function HeaderComponent({}: Props) {
  return (
    <S.Header>
      <div className="header">
        <Link href="/">
          <div className="header__logo">
            <Image className="header__logo--image" src={logo} fill sizes="100" alt="헤더로고" priority={true} />
          </div>
        </Link>
        <div className="header__icons">아이콘 영역</div>
      </div>
    </S.Header>
  );
}

const S = {
  Header: styled.header`
    background-color: #d7d7d7;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
      pointer-events: none;
      &__logo {
        display: block;
        position: relative;
        width: 100px;
        height: 50px;
        pointer-events: auto;
        &--image {
          position: relative;
          object-fit: cover;
        }
      }
    }
  `,
};
