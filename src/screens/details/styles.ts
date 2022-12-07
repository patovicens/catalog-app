import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 10001,
    backgroundColor: '#222831',
    padding: 12,
  },
  contentContainer: {
    paddingVertical: 20,
  },
  image: {
    height: 500,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    paddingVertical: 8,
    color: '#00ADB5',
  },
  subtitle: {
    fontSize: 18,
    paddingVertical: 8,
    color: '#00ADB5',
  },
  description: {
    fontSize: 16,
    color: '#EEEEEE',
  },
  favoriteIcon: {
    zIndex: 1,
    position: 'absolute',
    right: 0,
    paddingRight: 20,
    paddingTop: 20,
  },
  isFavorite: {
    backgroundColor: 'red',
  },
});

export default styles;
