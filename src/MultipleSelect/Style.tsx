import { StyleSheet } from 'react-native';

export const Style = StyleSheet.create({
  container: {},
  topText: { fontSize: 13, marginBottom: 3, marginLeft: 2 },
});

export const HorizontalStyle = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCD2E3',
    justifyContent: 'center',
    paddingHorizontal: 7,
    backgroundColor: '#FFFFFF',
  },

  placeholder: {
    fontSize: 13,
    color: '#A8B0C5',
  },
});

export const VerticalStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#CCD2E3',
    backgroundColor: '#FFFFFF',
    padding: 7,
  },

  placeholder: {
    fontSize: 13,
    color: '#A8B0C5',
  },

  line: {
    width: '100%',
    height: 1,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#CCD2E3',
  },

  scrollContent: { flexDirection: 'row', flexWrap: 'wrap' },
  badgeStyleVertical: { marginVertical: 5 },
});

export const BadgeStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: '#CCD2E3',
    alignSelf: 'center',
    marginHorizontal: 3,
    borderRadius: 5,
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
  },
  cross: {
    height: 15,
    width: 15,
    marginLeft: 3,
    tintColor: '#E63B96',
  },
});

export const FullScreenModalSyle = StyleSheet.create({
  container: { flex: 1 },
  header: {
    backgroundColor: '#A8B0C5',
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topText: { fontSize: 15, fontWeight: '500' },
  leftImage: { height: 20, width: 25, marginRight: 10, marginLeft: 7 },
  clear: { marginRight: 20, color: '#E63B96', fontSize: 15, fontWeight: '500' },
  modalContent: { flex: 1, backgroundColor: '#CCD2E3' },
  contentSearch: {
    flex: 1,
    borderRadius: 5,
    marginLeft: 15,
    backgroundColor: '#F8F8F8',
    height: 32,
    justifyContent: 'center',
    marginRight: 7,
    flexDirection: 'row',
  },
  input: {
    paddingHorizontal: 7,
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#F8F8F8',
    height: 32,
  },
  contentTop: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  delete: {
    paddingLeft: 5,
    paddingRight: 10,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteImage: { width: 20, height: 20, alignSelf: 'center' },
  searchImage: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginLeft: 7,
  },
  confirmButton: {
    backgroundColor: '#E63B96',
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  confirmButtonText: { fontSize: 20, fontWeight: '500', color: '#FFFFFF' },
});

export const ListItemStyle = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 2,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: { color: '#181C32', fontSize: 14, fontWeight: '500' },
  checkImage: { width: 15, height: 15 },
});
