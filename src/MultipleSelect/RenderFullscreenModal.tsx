import {
  View,
  Text,
  Modal,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import type { IRenderFullscreenModal } from './Interface';
import { FullScreenModalSyle } from './Style';
import { ListItem } from './ListItem';

export const RenderFullscreenModal = ({
  handleValue,
  setHandleValue,
  setOpen,
  open,
  value,
  setValue,
  displayedObject,
  filterData,
  uniqueKey,
  search,
  setSearch,
  searchable,
  leftStyle,
  topText,
  parent,
  categorySelectable,
  max,
  modalContainer,
  headerIcon,
  headerStyle,
  clearText,
  clearStyle,
  modalContentStyle,
  confirmButtonText,
  confirmButtonTextStyle,
  confirmButtonStyle,
  colorScheme,
  onSelectedItemsChange,
}: IRenderFullscreenModal) => {
  const handlePressItem = (data: { [key: string]: any }) => {
    if (handleValue?.includes(data[uniqueKey])) {
      const tmpValue = handleValue;
      const index = tmpValue.indexOf(data[uniqueKey]);
      tmpValue.splice(index, 1); // Secileni siler
      setHandleValue([...tmpValue]);
    } else if (max && handleValue.length >= max) {
      // Max secim sayısına ulaşırsa
    } else {
      // Secileni ekler
      setHandleValue([...handleValue, data[uniqueKey]]);
    }
  };

  const handlePressButton = () => {
    if (setValue) setValue(handleValue);
    if (onSelectedItemsChange && value !== undefined && value !== handleValue)
      onSelectedItemsChange(handleValue);
    setSearch('');
    setOpen(false);
  };

  return (
    <Modal animationType="slide" transparent visible={open}>
      <SafeAreaView style={[FullScreenModalSyle.container, modalContainer]}>
        <View
          style={[
            FullScreenModalSyle.header,
            { backgroundColor: colorScheme.bg2 },
            headerStyle,
          ]}
        >
          <View style={FullScreenModalSyle.headerLeft}>
            {headerIcon ? (
              headerIcon
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setOpen(!open);
                  setSearch('');
                }}
              >
                <Image
                  source={require('../assets/left.png')}
                  style={[
                    FullScreenModalSyle.leftImage,
                    { tintColor: colorScheme.text },
                    leftStyle,
                  ]}
                />
              </TouchableOpacity>
            )}
            {topText !== undefined && (
              <Text
                style={[
                  FullScreenModalSyle.topText,
                  { color: colorScheme.text },
                ]}
              >
                {topText}
              </Text>
            )}
          </View>
          {handleValue.length > 0 && (
            <Text
              onPress={() => setHandleValue([])}
              style={[
                FullScreenModalSyle.clear,
                { color: colorScheme.primary },
                clearStyle,
              ]}
            >
              {clearText}
            </Text>
          )}
        </View>
        <View
          style={[
            FullScreenModalSyle.modalContent,
            { backgroundColor: colorScheme.bg3 },
            modalContentStyle,
          ]}
        >
          <View style={FullScreenModalSyle.contentTop}>
            {searchable && (
              <View
                style={[
                  FullScreenModalSyle.contentSearch,
                  { backgroundColor: colorScheme.input },
                ]}
              >
                <Image
                  source={require('../assets/search.png')}
                  style={[
                    FullScreenModalSyle.searchImage,
                    { tintColor: colorScheme.tertiary },
                  ]}
                />
                <TextInput
                  placeholder="Search"
                  value={search}
                  onChangeText={(text) => setSearch(text)}
                  placeholderTextColor={colorScheme.text}
                  style={[
                    FullScreenModalSyle.input,
                    {
                      color: colorScheme.text,
                    },
                  ]}
                />
                <TouchableOpacity
                  onPress={() => setSearch('')}
                  style={FullScreenModalSyle.delete}
                >
                  <Image
                    source={require('../assets/clear.png')}
                    style={[
                      FullScreenModalSyle.deleteImage,
                      { tintColor: colorScheme.tertiary },
                    ]}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={filterData}
              renderItem={({ item }) => (
                <ListItem
                  uniqueKey={uniqueKey}
                  displayedObject={displayedObject}
                  data={item}
                  parent={parent}
                  categorySelectable={categorySelectable}
                  isItParent={item.parent ? false : true}
                  colorScheme={colorScheme}
                  value={handleValue}
                  pressItem={(badge) => handlePressItem(badge)}
                />
              )}
              keyExtractor={(item) => item[uniqueKey].toString()}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              handlePressButton();
            }}
            style={[
              FullScreenModalSyle.confirmButton,
              { backgroundColor: colorScheme.primary },
              confirmButtonStyle,
            ]}
          >
            <Text
              style={[
                FullScreenModalSyle.confirmButtonText,
                { color: colorScheme.text },
                confirmButtonTextStyle,
              ]}
            >
              {confirmButtonText}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
