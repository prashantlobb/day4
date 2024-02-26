import React from 'react';
import {render} from '@testing-library/react-native';
import TitleCard from '../TitleCard';
describe('TitleCard component', () => {
  const cardData = {
    logo: 'https://example.com/logo.png',
    title: 'Test Title',
    subTitle: 'Test Subtitle',
  };

  it('renders correctly', () => {
    const {getByText} = render(<TitleCard cardData={cardData} />);
    const titleElement = getByText('Test Title');
    const subTitleElement = getByText('Test Subtitle');
    const refreshButton = getByText('Refresh');
    const inAppPurchaseText = getByText('In-App Purchase');
    expect(titleElement).toBeTruthy();
    expect(subTitleElement).toBeTruthy();
    expect(refreshButton).toBeTruthy();
    expect(inAppPurchaseText).toBeTruthy();
  });
});
