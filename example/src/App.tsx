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

    { label: 'Africa', value: 'af' },
    { label: 'Ghana', value: 'ghana', parent: 'gh' },
    { label: 'Senegal', value: 'senegal', parent: 'se' },
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
