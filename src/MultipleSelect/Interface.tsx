import type React from 'react';
import type { ViewStyle, StyleProp, TextStyle, ImageStyle } from 'react-native';

export interface IMultipleSelect {
  topText?: string;
  value?: any[];
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  touchableContainerStyle?: StyleProp<ViewStyle>;
  items?: { [key: string]: any }[];
  setValue?: React.Dispatch<React.SetStateAction<any[]>>;
  max?: number;
  searchable?: boolean;
  vertical?: boolean;
  categorySelectable?: boolean;
  displayedObject?: string;
  verticalMaxHeight?: number;
  topTextfontFamily?: string;
  parent?: string;
  uniqueKey?: string;
  onSelectedItemsChange?: (items: { [key: string]: any }) => void;
  badgeTextStyle?: StyleProp<TextStyle>;
  topTextStyle?: StyleProp<TextStyle>;
  badgeIconColor?: string;
  placeholderStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  badgeIcon?: React.ReactNode;
  crossStyle?: StyleProp<ImageStyle>;
  modalContainer?: StyleProp<ViewStyle>;
  leftStyle?: StyleProp<ImageStyle>;
  headerIcon?: React.ReactNode;
  headerStyle?: StyleProp<ViewStyle>;
  clearText?: string;
  clearStyle?: StyleProp<TextStyle>;
  modalContentStyle?: StyleProp<ViewStyle>;
  confirmButtonText?: string;
  confirmButtonTextStyle?: StyleProp<TextStyle>;
  confirmButtonStyle?: StyleProp<ViewStyle>;
}

export interface IHorizontal {
  value?: any[];
  placeholder: string;
  placeholderStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  displayedObject: string;
  findItem: (itemKey: number | string) => {};
  pressItem(data: { [key: string]: any }): void;
  badgeTextStyle?: StyleProp<TextStyle>;
  badgeIcon?: React.ReactNode;
  crossStyle?: StyleProp<ImageStyle>;
}

export interface IVertical {
  value?: any[];
  placeholder: string;
  placeholderStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  displayedObject: string;
  findItem: (itemKey: number | string) => {};
  pressItem(data: { [key: string]: any }): void;
  badgeTextStyle?: StyleProp<TextStyle>;
  badgeIcon?: React.ReactNode;
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
  badgeIcon?: React.ReactNode;
  crossStyle?: StyleProp<ImageStyle>;
}

export interface IRenderFullscreenModal {
  topText?: string;
  parent?: string;
  categorySelectable: boolean;
  value?: any[];
  setValue?: React.Dispatch<React.SetStateAction<any[]>>;
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
  headerIcon?: React.ReactNode;
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
  value?: any[];
  data: { [key: string]: any };
  displayedObject: string;
  uniqueKey: string;
  parent?: string;
  isItParent: boolean;
  categorySelectable: boolean;
}
