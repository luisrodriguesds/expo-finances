import styled from 'styled-components/native';
import { Feather } from "@expo/vector-icons";
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'positive' | 'negative'
}

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 5px;
  padding: 20px;

  margin-bottom: 16px;
`;


export const Header = styled.View``

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 14px;
  color: ${({theme}) => theme.colors.title};
`
export const Amount = styled.Text<TypeProps>`
  color: ${({theme, type }) => type === 'positive' ? theme.colors.success : theme.colors.attention};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  margin-top: 4px;
`

export const Footer = styled.View`
  margin-top: 18px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const WrapIcon = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(20)}px;

  margin-right: 12px;
`
export const TextIcon = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: 14px;
`
export const Date = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: 14px;
`