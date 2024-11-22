import {View, Button} from 'react-native';
import React from 'react';

type Props = {
  navigation: any;
};
export default function HomeScreen({navigation}: Props) {
  return (
    <View>
      <Button title="Detail 열기" />
    </View>
  );
}
