/* eslint-disable react/no-danger */
import React from 'react';


export default function Description({ product }) {
  return (
    <div className="mt-2 md:mt-3">
      <div className="product-description" dangerouslySetInnerHTML={{ __html: product.description }} />
    </div>
  );
}

export const layout = {
  areaId: "productPageBottom",
  sortOrder: 1
}

export const query = `
  query Query {
    product (id: getContextValue('productId')) {
      name
      description
    }
  }`;