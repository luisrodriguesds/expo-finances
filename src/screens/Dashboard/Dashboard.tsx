import React from 'react';
import { 
  Container, 
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserContainer,
  Icon,
  HighlightCards
} from './styles';
import { Feather } from "@expo/vector-icons";
import HighlightCard from '../../components/HighlightCard';
import { Text } from 'react-native';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/42545036?v=4'}} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Luis Rodrigues</UserName>
            </User>
          </UserInfo>

          <Icon name='power' />
        </UserContainer>
      </Header>
      <HighlightCards>
        <HighlightCard title={'Entradas'} amount={'R$ 17.400,00'} lastTransaction={'última entrada dia 13 de abril'} type='up' />
        <HighlightCard title={'Entradas'} amount={'R$ 17.400,00'} lastTransaction={'última entrada dia 13 de abril'} type='down'  />
        <HighlightCard title={'Entradas'} amount={'R$ 17.400,00'} lastTransaction={'última entrada dia 13 de abril'} type='total'  />
      </HighlightCards>
      <Text>TEST</Text>
    </Container>
  );
}


export default Dashboard;