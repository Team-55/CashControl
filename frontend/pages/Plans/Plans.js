import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Dimensions, View, Text, Image } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Ionicons } from '@expo/vector-icons';
import { Switch } from 'react-native-switch';

const windowHeight = Dimensions.get('window').height;

const months = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];

export default function Plans() {
  const [selectMounth, setSelectMounth] = useState('Квітень')
  const [isActive, setIsActive] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = () => setSwitchValue(previousState => !previousState);

  const renderButtonText = (text = 'text') => {
    setSelectMounth(text);

    return (
      <Text style={styles.defaultText}>{text}</Text>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.plans}>
        <View style={styles.modalWrap}>
          <ModalDropdown
            defaultValue={'Місяць'}
            options={months}
            textStyle={styles.text}
            dropdownStyle={styles.dropdownText}
            renderButtonText={renderButtonText}
            onDropdownWillShow={() => setIsActive(true)}
            onDropdownWillHide={() => setIsActive(false)}
          />
          <Image
            style={isActive ? { transform: [{ rotate: '180deg' }] } : { transform: [{ rotate: '0deg' }] }}
            source={require('../../icons/Down.png')}
            width={10}
            height={5}
          />
        </View>


        <Text style={styles.title}> Плани на {selectMounth} </Text>

        <View style={styles.progres}>
          <View style={styles.progresBar}>
            <View style={styles.progresBarComplete} />
          </View>

          <Text style={styles.progresText}> 33% </Text>
        </View>

        <View style={styles.planItem}>
          <View style={{flexDirection: 'row', gap: 8}}>
            <View style={styles.planItemLogo}>
              <Ionicons name="school-outline" size={23} color="white" />
            </View>
            <View style={styles.planItemWrap}>
              <View style={styles.planTextWrap}>
                <Text style={styles.planItemTitle}>Курси</Text>
                <Ionicons name="create-outline" size={18} color="#868E96" />
              </View>
              <View style={styles.planTextWrap}>
                <Text style={styles.planItemComment}>5000грн</Text>
                <Ionicons name="chatbubble-outline" size={15} color="white" />
              </View>
              <View style={styles.planTextWrap}>
                <Ionicons name="calendar-outline" size={15} color="white" />
                <Text style={styles.planItemComment}>12 квітня до 13 квітня</Text>
              </View>
            </View>
          </View>


          <Switch
            value={switchValue}
            circleSize={14}
            barHeight={17}
            onValueChange={toggleSwitch}
            backgroundActive={'#8E87BC'}
            backgroundInactive={'#868E96'}
            circleActiveColor={'#FFF'}
            circleInActiveColor={'#FFF'}
            innerCircleStyle={{ alignItems: "center", justifyContent: "center" }}
            renderActiveText={false}
            renderInActiveText={false}
            switchLeftPx={2}
            switchRightPx={2}
            switchWidthMultiplier={2}
            switchBorderRadius={30}
          />
        </View>

        <View style={styles.plus}>
          <Image source={require('../../icons/whitePlus.png')} />
        </View>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#1B1B1D',
  },
  plans: {
    paddingTop: 16,
    height: windowHeight - 100,
  },
  modalWrap: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    marginBottom: 24,
  },
  defaultText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'SpaceGrotesk-Bold',
    fontWeight: '700',
    textAlign: 'center',
  },
  text: {
    fontSize: 24,
    color: '#FFF',
    textAlign: 'center',
  },
  dropdownText: {
    fontSize: 16,
    color: '#FFF',
    backgroundColor: '#1B1B1D',
    borderColor: '#8379E3',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 100,
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'SpaceGrotesk-Bold',
    fontWeight: '700',
    marginBottom: 8,
  },
  progres: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  progresBar: {
    width: '80%',
    height: 9,
    marginRight: 17,
    backgroundColor: '#868E96',
    borderRadius: 24,
  },
  progresBarComplete: {
    width: '33%',
    height: 9,
    marginRight: 17,
    backgroundColor: '#46DE5F',
    borderRadius: 24,
  },
  progresText: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'SpaceGrotesk-Regular',
    fontWeight: '400',
  },
  planItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  planItemLogo: {
    height: 48,
    width: 48,
    backgroundColor: '#F6F170',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planItemWrap: {
    gap: 2
  },
  planTextWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  planItemTitle: {
    fontSize: 16,
    color: '#868E96',
    fontFamily: 'SpaceGrotesk-Regular',
    fontWeight: '400',
    paddingRight: 9,
  },
  planItemComment: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'SpaceGrotesk-Regular',
    fontWeight: '400',
  },
  plus: {
    position: 'absolute',
    width: 48,
    height: 48,
    backgroundColor: '#8379E3',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 40,
    right: 16,
  }
});
