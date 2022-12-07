import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomColor: '#393E46',
    borderBottomWidth: 2,
    flexDirection: 'row',
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    paddingBottom: 4,
    color: '#00ADB5',
  },
  description: {
    fontSize: 14,
    color: '#EEEEEE',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  placeholder: {
    width: 100,
    height: 100,
    tintColor: '#EEEEEE',
  },
});

export default styles;
