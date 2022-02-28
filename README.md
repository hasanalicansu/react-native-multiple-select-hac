# react-native-multiple-select-hac

Content type (Vertical and horizontal)         |  Modal Light |  Modal Dark
:-------------------------:|:-------------------------:|:-------------------------:
![content !](https://user-images.githubusercontent.com/63130177/155967651-f9f24a60-0dd6-49b0-8b77-935b9f896c60.png)|![modal Light](https://user-images.githubusercontent.com/63130177/155967204-584ebdad-ade7-4bf4-bec5-26891a28a8b7.png)| ![modal dark](https://user-images.githubusercontent.com/63130177/155966892-fe117d11-aaf4-46b2-bdb1-816b5dad42e1.png)


# react-native-multiple-select-hac

react native multiple select

## Installation

```sh
npm install react-native-multiple-select-hac
```

## Usage

```js
import MultipleSelect from "react-native-multiple-select-hac";

// ...

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT



The component takes 3 compulsory props - `items`, `uniqueKey`, `value` and `setValue` . Other props are optional. The table below explains more.


## Props

| Prop        | Required   | Purpose  |
| ------------- |-------------| -----|
| uniqueKey      | No      | (String) Defaults to "value". Unique identifier that is part of each item's properties. Used internally as means of identifying each item|
| items | No |  State variable that holds the items. |
| value | No | (array) State variable that specifies the value of the selected item. It's an array of values for multiple item pickers. |
| setValue | No | ((callback: SetStateAction) => void)  State callback that is called when the value changes. |
| displayedObject | No | (String) Defaults to "label". This string will be used to select the key to display the objects in the items array |
| topText | No | (String) Top Text for multiple select |
| topTextStyle | No | (StyleProp<TextStyle>) Style for top text |
| theme | No | (light / dark) Theme for component |
| searchable | No | (boolean) Defaults to "false". Enables the search feature in the drop-down menu / modal. |
| placeholder | No | (String) Defaults to 'Select items'. Placeholder text displayed in multi-select filter input |
| onSelectedItemsChange | No | (void function) Callback that returns the selected item / items. |
| placeholderStyle | No | (StyleProp<TextStyle>) Styling for placeholder |
| max | No | (number) Specifies the maximum number of items. |
| categorySelectable | No | (boolean) Defaults to 'false'. Allows selection of categories |
| parent | No | (string) The children have the parent's value as their parent key. |
| clearText | No | (string) Defaults to 'Clear'. Text for remove all selected button. |
| clearStyle | No | (StyleProp<TextStyle>) Styling for clearText |
| confirmButtonText | No | (string) Defaults to 'Confirm'. Confirm button text. |
| confirmButtonTextStyle | No | (StyleProp<ViewStyle>) Styling for confirm button's text |
| confirmButtonStyle | No | (StyleProp<ViewStyle>) Styling for confirm button |
| vertical | No | (boolean) Defaults to 'false'. Display mode of selected items|
| verticalMaxHeight | No | (number) Defaults to '200'. Height of vertical mode|
| contentStyle | No | (StyleProp<ViewStyle>) Styling for content |
| modalContentStyle | No | (StyleProp<ViewStyle>) Styling for modal content |
| modalContainer | No | (StyleProp<ViewStyle>) Styling for modal container |
| containerStyle | No | (StyleProp<ViewStyle>) Styling for container |
| badgeIcon | No | (ReactNode) Icon for badge |
| badgeTextStyle | No | (StyleProp<TextStyle>) Styling for badge's text |
| crossStyle | No | (string) Color for badge's cross icon |
| headerIcon | No | (ReactNode) Icon for modal close button |
| leftStyle | No | (StyleProp<ImageStyle>) Icon styling for modal close button |
| headerStyle | No | (StyleProp<ViewStyle>) Styling for modal header |
  
