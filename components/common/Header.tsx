import React from 'react';
import Link from 'next/link';
import styles from '@/styles/header.module.scss';
import styled from 'styled-components';

interface Props {}

export default function HeaderComponent({}: Props) {
  return (
    <S.Header>
      <div className="header">
        <Link href="/">
          <img src="/logo.png" alt="헤더로고" />
        </Link>
      </div>
    </S.Header>
  );
}

const S = {
  Header: styled.header`
    background-color: gray;
  `,
};
