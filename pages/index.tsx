import Header from '@/components/common/Header';
import Link from 'next/link';
import { Fragment } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { IoMailOpenOutline } from 'react-icons/io5';
import styled from 'styled-components';

export default function Home() {
  return (
    <Fragment>
      <Header
        rightElements={[
          <S.CopyButton
            onClick={() => {
              alert('copy...');
            }}
            key="button"
          >
            <AiOutlineShareAlt size={20} />
          </S.CopyButton>,
          <S.FeedbackLink href="/feedback" key="link">
            <IoMailOpenOutline size={20} />
          </S.FeedbackLink>,
        ]}
      />
      <S.Main>apdlf</S.Main>
    </Fragment>
  );
}

const S = {
  CopyButton: styled.button`
    background-color: #fff;
    padding: 3px;
    margin-right: 10px;
    border: none;
    pointer-events: auto;
    box-shadow: #00000033 -2px 1px 8px 1px;
  `,
  FeedbackLink: styled(Link)`
    background-color: #fff;
    padding: 3px 3px 1px;
    display: inline-block;
    pointer-events: auto;
    box-shadow: #00000033 -2px 1px 8px 1px;
  `,
  Main: styled.main`
    width: 100%;
    height: 100%;
    background-color: #ddd;
  `,
};
