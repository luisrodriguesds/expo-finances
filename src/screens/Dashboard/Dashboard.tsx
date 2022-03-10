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
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles';
import { Feather } from "@expo/vector-icons";
import HighlightCard from '../../components/HighlightCard';
import { Text } from 'react-native';
import TransactionCard, { TransactionsDataProps } from '../../components/TransactionCard';

const Dashboard: React.FC = () => {
  const data = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site', 
      amount: 'R$ 12.000,00', 
      category: {
      name: 'Vendas',
      icon: 'dollar-sign'
      },
      date: '13/04/2022'
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria Pizzy', 
      amount: 'R$ 59,00', 
      category: {
      name: 'Alimentação',
      icon: 'coffee'
      },
      date: '13/04/2022'
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel do apartamento', 
      amount: 'R$ 1.000,00', 
      category: {
      name: 'Casa',
      icon: 'home'
      },
      date: '10/04/2022'
    },
    {
      id: '4',
      type: 'positive',
      title: 'Kamila linda', 
      amount: 'R$ 100.000.000,00', 
      category: {
      name: 'Casa',
      icon: 'home'
      },
      date: '10/04/2022'
    }
  ]
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

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList 
          data={data}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <TransactionCard data={item as TransactionsDataProps} />}
          showsVerticalScrollIndicator={false}
        />
        
      </Transactions>
    </Container>
  );
}


export default Dashboard;