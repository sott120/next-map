import Header from '@/components/common/Header';
import Link from 'next/link';
import { Fragment } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { IoMailOpenOutline } from 'react-icons/io5';
import { VscFeedback } from 'react-icons/vsc';
import styled from 'styled-components';

export default function Feedback() {
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
          <Link href="/feedback" key="link">
            <IoMailOpenOutline size={21} />
          </Link>,
        ]}
      />
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
  `,
};
