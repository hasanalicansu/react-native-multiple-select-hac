import type React from 'react';
import type { ViewStyle, StyleProp, TextStyle, ImageStyle } from 'react-native';

export interface IMultipleSelect {
  topText?: string;
  value?: any[];
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  touchableContainerStyle?: StyleProp<ViewStyle>;
  items?: { [key: string]: any }[];
  setValue?:
    | React.Dispatch<React.SetStateAction<number[]>>
    | React.Dispatch<React.SetStateAction<string[]>>;
  max?: number;
  searchable?: boolean;
  vertical?: boolean;
  displayedObject?: string;
  verticalMaxHeight?: number;
  topTextfontFamily?: string;
  uniqueKey?: string;
  onSelectedItemsChange?: (items: { [key: string]: any }) => void;
  badgeTextStyle?: StyleProp<TextStyle>;
  topTextStyle?: StyleProp<TextStyle>;
  badgeIconColor?: string;
  placeholderStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  badgeIcon?: any;
  crossStyle?: StyleProp<ImageStyle>;
  modalContainer?: StyleProp<ViewStyle>;
  leftStyle?: StyleProp<ImageStyle>;
  headerIcon?: any;
  headerStyle?: StyleProp<ViewStyle>;
  clearText?: string;
  clearStyle?: StyleProp<TextStyle>;
  modalContentStyle?: StyleProp<ViewStyle>;
  confirmButtonText?: string;
  confirmButtonTextStyle?: StyleProp<TextStyle>;
  confirmButtonStyle?: StyleProp<ViewStyle>;
}

export interface IHorizontal {
  value?: (number | string)[];
  placeholder: string;
  placeholderStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  displayedObject: string;
  findItem: (itemKey: number | string) => {};
  pressItem(data: { [key: string]: any }): void;
  badgeTextStyle?: StyleProp<TextStyle>;
  badgeIcon?: any;
  crossStyle?: StyleProp<ImageStyle>;
}

export interface IVertical {
  value?: (number | string)[];
  placeholder: string;
  placeholderStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  displayedObject: string;
  findItem: (itemKey: number | string) => {};
  pressItem(data: { [key: string]: any }): void;
  badgeTextStyle?: StyleProp<TextStyle>;
  badgeIcon?: any;
  crossStyle?: StyleProp<ImageStyle>;
  verticalMaxHeight?: number;
}

export interface IBadgeItem {
  pressItem(data: { [key: string]: any }): void;
  displayedObject: string;
  badgeStyle?: StyleProp<ViewStyle>;
  itemKey: string | number;
  findItem: (itemKey: number | string) => {};
  badgeTextStyle?: StyleProp<TextStyle>;
  badgeIcon?: any;
  crossStyle?: StyleProp<ImageStyle>;
}

export interface IRenderFullscreenModal {
  topText?: string;
  value?: any[];
  setValue?:
    | React.Dispatch<React.SetStateAction<number[]>>
    | React.Dispatch<React.SetStateAction<string[]>>;
  max?: number;
  searchable?: boolean;
  displayedObject: string;
  uniqueKey: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleValue: any[];
  setHandleValue: React.Dispatch<React.SetStateAction<any[]>>;
  filterData: { [key: string]: any }[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  modalContainer?: StyleProp<ViewStyle>;
  leftStyle?: StyleProp<ImageStyle>;
  headerIcon?: any;
  headerStyle?: StyleProp<ViewStyle>;
  clearText?: string;
  clearStyle?: StyleProp<TextStyle>;
  modalContentStyle?: StyleProp<ViewStyle>;
  confirmButtonText?: string;
  confirmButtonTextStyle?: StyleProp<TextStyle>;
  confirmButtonStyle?: StyleProp<ViewStyle>;
  onSelectedItemsChange?: (items: { [key: string]: any }) => void;
}

export interface IListItem {
  pressItem(data: { [key: string]: any }): void;
  value?: number[] | string[];
  data: { [key: string]: any };
  displayedObject: string;
  uniqueKey: string;
}
