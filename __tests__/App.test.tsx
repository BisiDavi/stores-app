/**
 * @format
 */
import React from 'react';
import renderer from 'react-test-renderer';
import App from '@/App';

describe('Testing the App Component', () => {
  it('renders correctly, Snapshot test', () => {
    const appTree = renderer.create(<App />).toJSON();
    expect(appTree).toMatchSnapshot();
  });
});
