import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingRight: 16,
    paddingLeft: 16,
  },

  wallet: {
    position: 'relative',
    height: windowHeight - 145,
    backgroundColor: '#1B1B1D',
  },
  banks: {
    marginBottom: 23,
    paddingTop: 16
  },
  banks__title: {
    fontFamily: 'Space Grotesk Bold',
    fontSize: 18,
    color: '#FBFBFD',
    marginBottom: 4,
    fontWeight: '700',
  },
  banks__wrap: {
    flexDirection: 'row',
    gap: 8,
  },
  banks__card: {
    width: 129,
    height: 107,
    borderRadius: 8,
    padding: 16,
  },
  banks__card__icons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  banks__card__logo: {
    marginBottom: 4,
  },
  banks__card__title: {
    fontSize: 16,
    fontFamily: 'Space Grotesk Regular',
    fontWeight: '400',
    marginBottom: 4,
    color: '#FBFBFD'
  },
  banks__card__numb: {
    fontSize: 12,
    fontFamily: 'Space Grotesk Regular',
    fontWeight: '400',
    color: '#FBFBFD'
  },
  banks__new_card: {
    width: 129,
    height: 107,
    borderRadius: 8,
    padding: 16,
    borderColor: '#D7D2FC',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#212529'
  },
  banks__card__plus: {
    marginBottom: 14,
  },
  banks__new_card__title: {
    fontSize: 16,
    marginBottom: 4,
    color: '#FBFBFD',
    fontFamily: 'Space Grotesk Regular',
    fontWeight: '400',
  },

  currency: {
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    gap: 46,
    marginBottom: 23,
    backgroundColor: '#212529'
  },
  currency__wrap: {
    flexDirection: 'row',
    gap: 8
  },
  currency__title: {
    color: '#868E96',

  },
  currency__text: {
    color: '#fff',
  },

  accounts__title: {
    fontFamily: 'Space Grotesk Bold',
    fontWeight: '700',
    fontSize: 18,
    color: '#FBFBFD',
    marginBottom: 16,
  },
  accounts__wrap: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#212529',
    gap: 24,
  },
  accounts__card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  accounts__card__wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  accounts__card__name: {
    fontFamily: 'Space Grotesk Regular',
    fontWeight: '400',
    fontSize: 16,
    color: '#FBFBFD',
  },
  accounts__card__sum: {
    fontFamily: 'Space Grotesk Regular',
    fontWeight: '400',
    fontSize: 16,
    color: '#FBFBFD',
  },
  plus: {
    position: 'absolute',
    width: 48,
    height: 48,
    backgroundColor: '#8379E3',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 140,
    right: 16,
  }
});

export default styles;