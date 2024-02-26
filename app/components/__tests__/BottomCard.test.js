import React from 'react';
import {render} from '@testing-library/react-native';
import BottomCard from '../BottomCard';
describe('BottomCard component', () => {
  const cardData = {
    logo: 'https://example.com/logo.png',
    title: 'Test Card',
    subTitle: 'Test Subtitle',
  };

  it('renders correctly', () => {
    const {getByText, getByTestId} = render(<BottomCard cardData={cardData} />);
    const titleElement = getByText('Test Card');
    const subTitleElement = getByText('Test Subtitle');
    const refreshButton = getByText('Refresh');
    expect(titleElement).toBeTruthy();
    expect(subTitleElement).toBeTruthy();
    expect(refreshButton).toBeTruthy();
  });
});
