import {Dimensions} from 'react-native';

export const COLORS = {
  gray: '#adb5bd',
  gray1: '#343a40',
  gray2: '#495057',
  black: '#000',
  blue: '#1c7ed6',
};
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;

export function extractContentBetweenParagraphTags(htmlString) {
  const regex = /<p>([\s\S]*?)<\/p>/g;
  let matches = [];
  let match;
  while ((match = regex.exec(htmlString)) !== null) {
    matches.push(match[1].trim());
  }

  return matches;
}
