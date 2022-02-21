import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
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
  placeholder = 'Secim yapınız',
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
}: IMultipleSelect) => {
  const [filterData, setFilterData] = useState<{ [key: string]: any }[]>([]);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [handleValue, setHandleValue] = useState<any[]>([]);

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
    if (search.trim() === '') {
      // search boş ise filterData'nın ataması yapılır
      setFilterData(items !== undefined ? items : []);
    } else {
      // search'e götre filtreleme yapılarak filterData'nın ataması yapılır
      const newData = items?.filter((item: { [key: string]: string }) =>
        item[displayedObject]
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase())
      );
      setFilterData(newData !== undefined ? newData : []);
    }
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
        filterData={filterData}
        displayedObject={displayedObject}
        modalContainer={modalContainer}
        headerIcon={headerIcon}
        headerStyle={headerStyle}
        leftStyle={leftStyle}
        clearText={clearText}
        clearStyle={clearStyle}
        modalContentStyle={modalContentStyle}
        confirmButtonText={confirmButtonText}
        confirmButtonTextStyle={confirmButtonTextStyle}
        confirmButtonStyle={confirmButtonStyle}
        onSelectedItemsChange={onSelectedItemsChange}
      />
    </View>
  );
};
