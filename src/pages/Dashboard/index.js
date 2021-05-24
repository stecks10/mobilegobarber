import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '../../components/Background';

// import { Container } from './styles';

export default function Dashboard() {
    return <Background />;
}

Dashboard.navigationOption = {
    tabBarLabel: 'Agendamentos',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="event" size={20} color={tintColor} />
    ),
};