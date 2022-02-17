/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import MultipleSelect from 'react-native-multiple-select-hac';

export default function App() {
  const [value, setValue] = React.useState([1, 2]);
  const items = [
    { label: 'Hasan Ali', value: 1 },
    { label: 'Ahmet Kağan', value: 2 },
    { label: 'Hakan Cansu', value: 3 },
    { label: 'Harun Cansu', value: 4 },
    { label: 'Teras Cat', value: 5 },
    { label: 'Rabia Bezen', value: 6 },
    { label: 'Tra Bilişim', value: 7 },
    { label: 'İsmail Hakkı', value: 8 },
  ];
  return (
    <View style={styles.container}>
      <MultipleSelect
        topText={'Multiple Select'}
        vertical
        searchable
        value={value}
        setValue={setValue}
        items={items}
      />
      <MultipleSelect
        containerStyle={{ marginTop: 30 }}
        topText={'Multiple Select'}
        searchable
        value={value}
        setValue={setValue}
        items={items}
        onSelectedItemsChange={(items) => console.log(items)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
