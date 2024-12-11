import Header from '@/components/common/Header';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Feedback() {
  return (
    <Fragment>
      <Header
        rightElements={[
          <button
            onClick={() => {
              alert('복사기능');
            }}
            key="button"
          >
            복사
          </button>,
          <Link href="/feedback" key="link">
            링크
          </Link>,
        ]}
      />
    </Fragment>
  );
}
