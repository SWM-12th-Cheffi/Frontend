import React, { useCallback, useState } from 'react';
import { Text } from 'react-native';
import styled, { css } from 'styled-components/native';
import { theme, TouchButton } from '../../assets/styles/theme';
import { CenterDivs, RowDivs } from './Divs';
import { CenterTouchOpacity } from '../layout/PageMoveLayout';
import {
  ActionButtonProps,
  ChipButtonProps,
  ImageButtonProps,
  ImageButtonStyleProps,
  LinkButtonsProps,
  SelectButtonProps,
  SelectButtonStyleProps,
} from './interface';
import Fonts from './Fonts';
import { Check } from './Images';
import { Colors } from 'styled-components';
import FastImage from 'react-native-fast-image';

export default function LinkButton({
  title,
  onPress,
  width = '100px',
  height = '45px',
  margin,
  ...rest
}: LinkButtonsProps) {
  return (
    <TouchButton
      width={width}
      height={height}
      onPress={onPress}
      margin={margin}
      {...rest}>
      <Text>{title}</Text>
    </TouchButton>
  );
}
export function ActionButton({
  onPress,
  width = '100%',
  height = '0%',
  // marginV = '0%',
  // marginH = '0%',
  children = null,
  ...rest
}: ActionButtonProps) {
  return (
    <CenterDivs
      // marginV={marginV}
      // marginH={marginH}
      width={width}
      height={height}
      {...rest}>
      <FullContainTouchOpacity onPress={onPress}>
        <CenterDivs>{children}</CenterDivs>
      </FullContainTouchOpacity>
    </CenterDivs>
    // <View />
  );
}

export function ChipButton({
  children = null,
  onPress = () => {},
  color = 'carrot',
  size = 'medium',
  width = 'auto',
  height = '45px',
  marginH = '5px',
  marginV = '5px',
  ...rest
}: ChipButtonProps) {
  return (
    <ChipButtonContainer
      color={color}
      width={width}
      height={height}
      marginH={marginH}
      marginV={marginV}
      {...rest}>
      <FullContainTouchOpacity onPress={onPress}>
        <Fonts size={size} padH="12px" color="tableBlack" center>
          {children}
        </Fonts>
      </FullContainTouchOpacity>
    </ChipButtonContainer>
  );
}

export function SelectButton({
  children = null,
  onPress = () => {},
  color = 'carrot',
  border = 'deepOrange',
  size = 'large',
  ...rest
}: SelectButtonProps) {
  const [select, setSelect] = useState(false);
  const handle = useCallback(
    ev => {
      onPress(ev);
      setSelect(!select);
    },
    [select, onPress],
  );
  return (
    <SelectButtonContainer
      color={color}
      border={border}
      select={select}
      {...rest}>
      <FullContainTouchOpacity onPress={handle}>
        <Fonts
          size={size}
          // bold={select}
          lineHeight="large"
          center
          color={select ? 'white' : 'tableGray'}>
          {children}
        </Fonts>
      </FullContainTouchOpacity>
    </SelectButtonContainer>
  );
}

export function SelectCircleButton({
  radius = 50,
  color,
  ...rest
}: SelectButtonProps) {
  const length = radius * 2 + 'px';
  return (
    <SelectButton
      width={length}
      height={length}
      radius={radius}
      color={color}
      border={color}
      {...rest}
    />
  );
}

export function CheckBoxButton({
  onPress = () => {},
  checkColor = 'white',
  color = 'carrot',
  children = null,
  size = 'large',
  height = '30px',
  ...rest
}: { checkColor?: Colors } & SelectButtonProps) {
  const [select, setSelect] = useState(false);
  const handle = useCallback(
    ev => {
      if (!select) onPress(ev);
      setSelect(!select);
    },
    [select, onPress],
  );
  return (
    <CenterDivs height={height} {...rest}>
      <FullContainTouchOpacity onPress={handle}>
        <RowDivs align>
          <CheckBoxContainer
            color={color}
            select={select}
            height={height}
            {...rest}
            width={height}>
            {select && <Check color={checkColor} />}
          </CheckBoxContainer>
          <Fonts size={size} lineHeight="large" color="black" padH="8px">
            {children}
          </Fonts>
        </RowDivs>
      </FullContainTouchOpacity>
    </CenterDivs>
  );
}

export function ImageButton({
  uri,
  width = '100%',
  onPress = () => {},
  height = '100%',
  marginV = '0%',
  marginH = '0%',
  radius = 16,
  children = null,
  ...rest
}: ImageButtonProps) {
  const source = {
    uri,
    priority: FastImage.priority.normal,
  };
  return (
    <CenterTouchOpacity onPress={onPress} goal="home">
      <ImageButtonContainer
        width={width}
        height={height}
        marginV={marginV}
        marginH={marginH}
        radius={radius}
        {...rest}>
        {uri ? (
          <FastImage
            source={
              uri === 'dummy'
                ? require('../../assets/images/Dummy.png')
                : source
            }
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ flex: 1, justifyContent: 'center' }}
            resizeMode={FastImage.resizeMode.cover}>
            {children}
          </FastImage>
        ) : (
          <CenterDivs>{children}</CenterDivs>
        )}
      </ImageButtonContainer>
    </CenterTouchOpacity>
  );
}

export function CircleButton({ radius = 50, ...rest }: ImageButtonProps) {
  const length = radius * 2 + 'px';
  return (
    <ImageButton width={length} height={length} radius={radius} {...rest} />
  );
}

const ImageButtonContainer = styled.View<ImageButtonStyleProps>`
  width: ${(props: any) => props.width};
  height: ${(props: any) => props.height};
  margin-top: ${(props: any) => props.marginV};
  margin-bottom: ${(props: any) => props.marginV};
  margin-left: ${(props: any) => props.marginH};
  margin-right: ${(props: any) => props.marginH};
  border-radius: ${({ radius }) => radius + 'px'};
  overflow: hidden;
  background-color: ${({ color }) => theme.color[color || 'bgColor']};
`;
const SelectButtonContainer = styled(CenterDivs)<SelectButtonStyleProps>`
  border-width: 1px;
  background-color: red;
  /* width: 50px; */
  /* height: 50px; */
  border-radius: ${({ radius }) => (radius || 10) + 'px'};
  ${({ select, color, border }) =>
    select
      ? css`
          background-color: ${theme.color[color || 'black']};
          border-color: ${theme.color[border || 'black']};
        `
      : css`
          background-color: ${theme.color[color || 'black'] + '22'};
          border-color: ${theme.color[color || 'black'] + '88'};
        `}
`;

const FullContainTouchOpacity = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  justify-content: center;
  /* background-color: red; */
`;

const CheckBoxContainer = styled(CenterDivs)<SelectButtonStyleProps>`
  border-width: 1px;
  border-radius: 5px;
  border-color: ${({ color }) => theme.color[color || 'black']};
  ${({ select, color }) =>
    select
      ? css`
          background-color: ${theme.color[color || 'black']};
        `
      : css`
          background-color: transparent;
        `}
`;

const ChipButtonContainer = styled(CenterDivs)<SelectButtonStyleProps>`
  border-width: 1px;
  border-radius: 10px;
  border-color: ${({ color }) => theme.color[color || 'black'] + '77'};
  background-color: ${({ color }) => theme.color[color || 'black'] + '20'};
`;
