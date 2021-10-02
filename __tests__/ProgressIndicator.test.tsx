/**
 * @format
 */
import React from 'react';
import renderer from 'react-test-renderer';
import {ProgressIndicator} from '@/components';

describe('Testing the ProgressIndicator Component', () => {
  it('renders correctly, Snapshot test', () => {
    const tree = renderer
      .create(
        <ProgressIndicator
          title="Step 2: Other Details (fresh food)"
          selected={1}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
