import React from 'react';
import Button from '../../../../cms/components/frontStore/Button';

export default function FeaturedCategories() {
  return (
    <div className="mt-15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
        <div>
          <div className="text-center">
            <img src="/assets/homepage/banner/men-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">마켓 지도</h3>
          <div className="mb-1">
            <p>
              대한민국 전체수출입데이터(수출, 수입, 무역수지),
              코스피 PBR밴드, 수출증감률,
              섹터 시그널, 신용잔고 추이 등
              다양한 매크로를 의미있게 시각화하여 투자에 도움이 되는 분석데이터 제공. 
            </p>
          </div>
          <Button url="/category/sdfsdf" title="view" variant="primary" />
        </div>
        <div>
          <div>
            <img src="/assets/homepage/banner/women-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">기업 분석</h3>
          <div className="mb-1">
            <p>
              HSCODE와 기업의 주력 수출입상품 분석을 통한
              수출데이터 및 매출액 예측, 상관계수 제공.
              기업실적 속보 및 재무데이터 제공.
              시장 및 기업에 대한 정보를 통찰력 있는 보고서로 제공.
            </p>
          </div>
          <Button url="/category/company" title="view" variant="primary" />
        </div>
        <div>
          <div>
            <img src="/assets/homepage/banner/kid-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">산업 분석</h3>
          <div className="mb-1">
            <p>
              관세청 및 통계청, 기타 데이터를 활용하여 
              국내 40여개 산업군에 대한 경기 동향 및 유망성 분석.
              해당 섹터의 수출입데이터 총합을 활용하여 국내 산업의
              미래 흐름에 대하여 의미있는 신호 제공.
            </p>
          </div>
          <Button url="/category/men" title="view" variant="primary" />
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
}
