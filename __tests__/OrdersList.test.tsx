import React from 'react';
import {render} from 'react-test-renderer';
import OrdersListItem from '@/components/OrdersListItem';

describe('Test the Input component', () => {
  it('Input component snapshot testing', () => {
    expect(render(<OrdersListItem />)).toMatchSnapshot();
  });
});
