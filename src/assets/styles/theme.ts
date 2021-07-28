import {Dimensions} from 'react-native';
import {
  ButtonsProps,
  DefaultTheme,
  FontProps,
  SectionProps,
} from 'styled-components';
import styled from 'styled-components/native';

//자주 쓰는 스타일들 정의
export const theme: DefaultTheme = {
  color: {
    black: '#231b16',
    tableBlack: '#695f57',
    tableGray: '#b1a396',
    light: '#f5f3e8',
    bgColor: '#fff8f2',
    carrot: '#ff9140',
    vegetable: '#11f0a3',
    citrus: '#ffe839',
    white: '#ffffff',
    deepOrange: '#e78034',
    deepGreen: '#83ba9e',
    deepYellow: 'fae01e',
  },
  padding: {
    main: '5% 7% 0% 7%',
  },
  text: {
    xlarge: '28px',
    large: '22px',
    medium: '18px',
    small: '14px',
  },
};
export const AppWrap = styled.View`
  padding: ${theme.padding.main};
  width: 100%;
  height: 100%;
`;
export const vw = Dimensions.get('window').width / 100;
export const vh = Dimensions.get('window').height / 100;
export const Section = styled.View`
  flex: ${(props: SectionProps) => props.flexNumber};
  background-color: ${(props: SectionProps) => props.background};
  flex-direction: ${(props: SectionProps) => (props.row ? 'row' : 'column')};
  /* flex-wrap: wrap; */
  padding: ${(props: SectionProps) => props.paddings};
  margin: ${(props: SectionProps) => props.margins};
  justify-content: ${(props: SectionProps) => props.justify};
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const BackgroundSection = styled.View`
  flex: 1;
  background-color: ${theme.color.bgColor};
`;

export const Font = styled.Text`
  font-size: ${(props: FontProps) => theme.text[props.size]};
`;

export const TouchButton = styled.TouchableOpacity`
  width: ${(props: ButtonsProps) => props.width};
  height: ${(props: ButtonsProps) => props.height};
  background-color: red;
  justify-content: center;
  align-items: center;
  margin: ${(props: ButtonsProps) => (props.margin ? props.margin : 0)};
`;

/* Default props */
Section.defaultProps = {
  background: 'transparent',
  row: false,
  paddings: '0',
  margins: '0',
  justify: 'center',
};
