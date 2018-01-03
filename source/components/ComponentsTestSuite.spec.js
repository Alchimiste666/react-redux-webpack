import 'babel-polyfill';

import React from 'react';
import { renderIntoDocument, findRenderedDOMComponentWithTag } from 'react-dom/lib/ReactTestUtils';

import Product from './Product';

it('Should render a product component', () => {

    const productId = 123456789;
    const productName = 'Product name';
    const productImageUrl = 'images/space-wallpaper(1).jpg';

    let product = renderIntoDocument(<Product id={productId} label={productName} imageUrl={productImageUrl} />);

    let header = findRenderedDOMComponentWithTag(product, 'h6');
    expect(header.innerText).toEqual(productName);

    let image = findRenderedDOMComponentWithTag(product, 'img');
    expect(image.className).toEqual('img-responsive img-rounded');
    expect(image.src).toContain(productImageUrl);

    let div = findRenderedDOMComponentWithTag(product, 'div');

    console.debug(div);

});
