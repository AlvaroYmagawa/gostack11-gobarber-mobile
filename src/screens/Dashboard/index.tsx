import React from 'react';
import { View, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';
import Button from '../../components/inputs/Button';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View>
      <Text>Dashboard</Text>
      <Button onPress={signOut}>Sigin Out</Button>
    </View>
  );
};

export default Dashboard;
