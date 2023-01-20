import React from 'react';
import Button from '../../../components/frontStore/Button';
import './MainBanner.scss';

export default function MainBanner() {
  return (
    <div className="main-banner-home flex items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-2">
        <div></div>
        <div className='text-center md:text-left px-2 '>
          <h2 className="h1 ">한국 기업 <span className='text-white'>수출입데이터</span>및 매출액 예측 서비스</h2>
          <p>베타서비스 기간 <span className="font-bold">무료</span></p>
          <Button url="/category/company" title="view" variant="primary" />
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};