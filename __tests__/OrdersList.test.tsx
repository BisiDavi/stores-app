import React from 'react';
import renderer from 'react-test-renderer';
import OrdersListItem from '@/components/Tabs/OrdersListItem';

describe('Testing the OrdersListItem component', () => {
  const item = {
    id: 1,
    name: 'Spaghetti and Turkey',
    image: 'spaghetti',
    code: '19YU34',
    time: '10 mins ago',
    status: 'New',
    orders: [
      {name: 'Spaghetti and Turkey (2)', amount: '200'},
      {name: 'Beans (1)', amount: '100'},
      {name: 'Plantain (1)', amount: '100'},
      {name: 'Chicken lap', amount: '800'},
      {name: 'Disposable pack', amount: '100'},
    ],
  };
  it('Snapshot testing', () => {
    const ordersListTree = renderer
      .create(<OrdersListItem item={item} />)
      .toJSON();
    expect(ordersListTree).toMatchSnapshot();
  });
});
