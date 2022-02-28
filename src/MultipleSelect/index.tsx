import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Theme from '../constants/Theme';
import { HorizontalContent } from './HorizontalContent';
import type { IMultipleSelect } from './Interface';
import { RenderFullscreenModal } from './RenderFullscreenModal';
import { Style } from './Style';
import { VerticalContent } from './VerticalContent';

export const MultipleSelect = ({
  onSelectedItemsChange,
  uniqueKey = 'value',
  displayedObject = 'label',
  topText,
  topTextStyle,
  searchable = false,
  placeholder = 'Select items',
  value,
  items,
  setValue,
  containerStyle,
  vertical = false,
  verticalMaxHeight = 200,
  max,
  placeholderStyle,
  contentStyle,
  badgeTextStyle,
  badgeIcon,
  crossStyle,
  modalContainer,
  headerIcon,
  headerStyle,
  leftStyle,
  clearText = 'Clear',
  clearStyle,
  modalContentStyle,
  confirmButtonText = 'Confirm',
  confirmButtonTextStyle,
  confirmButtonStyle,
  parent,
  categorySelectable = false,
  theme = 'light',
}: IMultipleSelect) => {
  const [_items, _setItems] = useState<{ [key: string]: any }[]>([]);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [handleValue, setHandleValue] = useState<any[]>([]);
  const colorScheme = Theme[theme];

  useEffect(() => {
    if (value !== undefined && value !== handleValue && open) {
      setHandleValue(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const pressItem = (data: { [key: string]: any }) => {
    if (value && setValue) {
      // Tıklanılan item'i siler
      const tmpValue = value;
      const index = tmpValue.indexOf(data[uniqueKey]);
      tmpValue?.splice(index, 1);
      setValue([...tmpValue]);
      if (onSelectedItemsChange) onSelectedItemsChange(tmpValue);
    }
  };

  const findItem = (itemKey: number | string) =>
    items?.find(
      (singleItem: { [key: string]: string | number }) =>
        singleItem[uniqueKey] === itemKey
    ) || {};

  // Search'e göre filtreleme
  useEffect(() => {
    let filter;
    if (search.trim() === '') {
      // search boş ise filterData'nın ataması yapılır
      filter = items !== undefined ? items : [];
    } else {
      // search'e götre filtreleme yapılarak filterData'nın ataması yapılır
      const newData = items?.filter((item: { [key: string]: string }) =>
        item[displayedObject]
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase())
      );
      filter = newData !== undefined ? newData : [];
    }

    if (parent !== undefined && items !== undefined) {
      _setItems(sortedParentItems(filter, parent, uniqueKey, items));
    } else {
      _setItems(filter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, items, displayedObject]);

  return (
    <View style={[Style.container, containerStyle]}>
      {topText && <Text style={[Style.topText, topTextStyle]}>{topText}</Text>}
      {vertical ? (
        <VerticalContent
          placeholder={placeholder}
          open={false}
          setOpen={setOpen}
          displayedObject={displayedObject}
          findItem={(itemKey) => findItem(itemKey)}
          pressItem={(badge) => pressItem(badge)}
          value={value}
          placeholderStyle={placeholderStyle}
          contentStyle={contentStyle}
          badgeTextStyle={badgeTextStyle}
          badgeIcon={badgeIcon}
          crossStyle={crossStyle}
          verticalMaxHeight={verticalMaxHeight}
          colorScheme={colorScheme}
        />
      ) : (
        <HorizontalContent
          placeholder={placeholder}
          open={false}
          setOpen={setOpen}
          displayedObject={displayedObject}
          findItem={(itemKey) => findItem(itemKey)}
          pressItem={(badge) => pressItem(badge)}
          value={value}
          placeholderStyle={placeholderStyle}
          contentStyle={contentStyle}
          badgeTextStyle={badgeTextStyle}
          badgeIcon={badgeIcon}
          colorScheme={colorScheme}
          crossStyle={crossStyle}
        />
      )}
      <RenderFullscreenModal
        value={value}
        max={max}
        setValue={setValue}
        handleValue={handleValue}
        setHandleValue={setHandleValue}
        topText={topText}
        searchable={searchable}
        open={open}
        setOpen={setOpen}
        search={search}
        setSearch={setSearch}
        uniqueKey={uniqueKey}
        filterData={_items}
        displayedObject={displayedObject}
        modalContainer={modalContainer}
        headerIcon={headerIcon}
        headerStyle={headerStyle}
        leftStyle={leftStyle}
        clearText={clearText}
        clearStyle={clearStyle}
        parent={parent}
        categorySelectable={categorySelectable}
        modalContentStyle={modalContentStyle}
        confirmButtonText={confirmButtonText}
        confirmButtonTextStyle={confirmButtonTextStyle}
        confirmButtonStyle={confirmButtonStyle}
        onSelectedItemsChange={onSelectedItemsChange}
        colorScheme={colorScheme}
      />
    </View>
  );
};

const sortedParentItems = (
  itemsSort: { [key: string]: any }[],
  parent: string,
  uniqueKey: string,
  items: { [key: string]: any }[]
) => {
  const sortedItems = items.filter((item) => item[parent] === undefined);

  const children = itemsSort.filter((item) => item[parent] !== undefined);

  children.forEach((child) => {
    const index = sortedItems.findIndex(
      (item) =>
        item[parent] === child[parent] || item[uniqueKey] === child[parent]
    );

    if (index > -1) {
      sortedItems.splice(index + 1, 0, child);
    }
  });

  return sortedItems;
};
