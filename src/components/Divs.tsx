import React from 'react';
import styled from 'styled-components/native';

interface DivsProps {
  padV?: string;
  padH?: string;
  marginV?: string;
  marginH?: string;
  children: React.ReactNode;
}

export default function Divs({
  padV = '0',
  marginV = '0',
  marginH = '0',
  padH = '0',
  children,
}: DivsProps) {
  return (
    <DivsContainer padV={padV} marginV={marginV} padH={padH} marginH={marginH}>
      {children}
    </DivsContainer>
  );
}
const DivsContainer = styled.View`
  /* flex: 1; */
  padding-top: ${(props: any) => props.padV};
  padding-bottom: ${(props: any) => props.padV};
  padding-left: ${(props: any) => props.padH};
  padding-right: ${(props: any) => props.padH};
  margin-top: ${(props: any) => props.marginV};
  margin-bottom: ${(props: any) => props.marginV};
  margin-left: ${(props: any) => props.marginH};
  margin-right: ${(props: any) => props.marginH};
`;
