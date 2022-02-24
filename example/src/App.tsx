/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import MultipleSelect from 'react-native-multiple-select-hac';

export default function App() {
  const [value, setValue] = React.useState(['ja', 'chi']);
  const [items, setItems] = React.useState([
    { label: 'Asia', value: 'as' },
    { label: 'China', value: 'chi', parent: 'as' },
    { label: 'Japan', value: 'ja', parent: 'as' },
    { label: 'India', value: 'in', parent: 'as' },
    { label: 'Hong Kong', value: 'hk', parent: 'as' },
    { label: 'Nepal', value: 'ne', parent: 'as' },
    { label: 'Macao', value: 'mac', parent: 'as' },

    { label: 'Africa', value: 'af' },
    { label: 'Ghana', value: 'gh', parent: 'af' },
    { label: 'Senegal', value: 'se', parent: 'af' },
    { label: 'Tanzania', value: 'ta', parent: 'af' },
    { label: 'Mali', value: 'ma', parent: 'af' },
    { label: 'Uganda', value: 'ug', parent: 'af' },
    { label: 'Zambia', value: 'za', parent: 'af' },
  ]);

  return (
    <View style={styles.container}>
      <MultipleSelect
        topText={'Multiple Select'}
        vertical
        searchable
        categorySelectable
        value={value}
        setValue={setValue}
        items={items}
        parent="parent"
        max={6}
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
