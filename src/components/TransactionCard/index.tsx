import React from 'react';
import { View } from 'react-native';

import { 
  Container,
  Header,
  Title,
  Amount,
  Footer,
  WrapIcon,
  Icon,
  TextIcon,
  Date
 } from './styles';

 export interface TransactionsDataProps {
  type: 'positive' | 'negative'
  title: string
  amount: string
  category: {
    name: string
    icon: string
  }
  date: string
 }

interface Props {
  data: TransactionsDataProps
}

const TransactionCard: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Header>
        <Title>{data.title}</Title>
        <Amount type={data.type}>
          {data.type === 'negative' && '- '}
          {data.amount}
        </Amount>
      </Header>
      <Footer>
        <WrapIcon>
          <Icon name={data.category.icon} />
          <TextIcon>{data.category.name}</TextIcon>
        </WrapIcon>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}

export default TransactionCard;