import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import { Container, Title } from './styles';

export default function Profile() {
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
