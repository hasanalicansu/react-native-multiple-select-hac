# react-native-multiple-select-hac

Content type (Vertical and horizontal         |  Modal
:-------------------------:|:-------------------------:
![content](https://user-images.githubusercontent.com/63130177/155514436-38640d7e-0f31-4306-bd24-bbaf80161d0d.png)   |  ![modal](https://user-images.githubusercontent.com/63130177/155514447-33ba24d9-0b0b-403a-9795-8a99e73d29e6.png)

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
  
