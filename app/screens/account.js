import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Switch,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from "react-native-vector-icons/Feather";
//import Icon from "react-native-vector-icons/FontAwesome5";
import COLORS from '../constants/Colors';
import {
    responsiveHeight,
    responsiveWidth,
  } from "react-native-responsive-dimensions";
  const {width, height} = Dimensions.get('window');
  const CIRCLE_SIZE = width * 0.5;


const SECTIONS = [
  {
    header: 'Préferences',
    items: [
      { icon: 'globe', label: 'Language', value: 'Français', type: 'input' },
      { icon: 'moon', label: 'Dark Mode', value: false, type: 'boolean' },
      { icon: 'notification', label: 'Notification',  type: 'link' },
    ],
  },
  {
    header: 'Aide',
    items: [
      { icon: 'flag', label: 'Signaler Probleme', type: 'link' },
      { icon: 'mail', label: 'Asistance', type: 'link' },
    ],
  },
  {
    header: 'Contenu',
    items: [
      { icon: 'save', label: 'Apropos', type: 'link' },
      { icon: 'user', label: 'inviter un amis', type: 'link' },
    ],
  },
];

export default function Account({navigation}) {


  const [selectedLanguage, setSelectedLanguage] = useState('Francais'); 


  useEffect(() => {

  }, [])

    const submit = () => {

    }

    const showNewLangue = () => {
      if(selectedLanguage === 'Francais') {
        setSelectedLanguage('Anglais');
        return;
      } 
      if( selectedLanguage === 'Anglais' ) {
        setSelectedLanguage('Francais');
        return;
      }
     
    };


  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={{flex: 1}}>
      
        <View style={styles.header}>
          <Text style={styles.title}>Réglages</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Compte</Text>
          </View>
          <View style={styles.profile}>
            <Image
              alt="Photo de profile"
              source={require('../../assets/images/novic.png')}
              style={styles.profileAvatar}
            />

            <View style={styles.profileBody}>
              <Text style={styles.profileName}>@Novic-Djef</Text>

              <Text style={styles.profileHandle}>(+237) 690089951</Text>
            </View>
            <TouchableOpacity 
            onPress={submit}
            style={{
              marginLeft: responsiveWidth(14)
            }}>
            <Icon 
              color="red"
              name="power"
              size={26}
            />
            </TouchableOpacity>
          </View>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{header}</Text>
            </View>
           
            <View style={styles.sectionBody}>
              {items.map(({ label, type, value }, index) => {
                const isFirst = index === 0;
                const isLast = index === items.length - 1;
                return (
                  <View
                    key={index}
                    style={[
                      styles.rowWrapper,
                      index === 0 && { borderTopWidth: 0 },
                      isFirst && styles.rowFirst,
                      isLast && styles.rowLast,
                    ]}>
                      {label === 'Language' ? (
                      
                        <TouchableOpacity 
                        
                          onPress={() => {showNewLangue()}}
                        >
                           <View style={styles.row}>
                        <Text style={styles.rowLabel}>{label}</Text>

                        <View style={styles.rowSpacer} />

                          <Text style={styles.rowValue}>{selectedLanguage}</Text>
                          <Icon
                            color="#ababab"
                            name="chevron-right"
                            size={22}
                            style={{marginLeft: 12}}
                          />
                          </View>
                        </TouchableOpacity>
                      ): (

                      
                    <TouchableOpacity
                      onPress={() => {
                        if (type === 'link' && label === 'Notification') {
                          navigation.navigate('listNotification');
                        } else {
                          // Handle other types of links or inputs
                        }
                      }}>
                      <View style={styles.row}>
                        <Text style={styles.rowLabel}>{label}</Text>

                        <View style={styles.rowSpacer} />

                        {type === 'input' && (
                          <Text style={styles.rowValue}>{value}</Text>
                        )}

                        {type === 'boolean' && <Switch value={value} />}

                        {(type === 'input' || type === 'link') && (
                          <Icon
                            color="#ababab"
                            name="chevron-right"
                            size={22}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                    
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f1f1f',
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionHeader: {
    padding: 8,
    paddingLeft: 12,
  },
  sectionHeaderText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#adadad',
    textTransform: 'uppercase',
  },
  sectionBody: {
    borderRadius: 12,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profile: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    marginRight: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#292929',
  },
  profileHandle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#858585',
  },
  profileAction: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 0,
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  rowLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  rowWrapper: {
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  rowLabel: {
    fontSize: 17,
    color: '#000',
  },
  rowValue: {
    fontSize: 17,
    color: '#ababab',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },




  // modal 


btn: {
height: 55,
justifyContent: 'center',
alignItems: 'center',
marginTop: 40,
backgroundColor: COLORS.primary,
marginHorizontal: 20,
borderRadius: 10,
},


contain: {
    alignItems: 'center',
    marginTop: 40,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
},



contentFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
},
bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
},
contentFilterBottom: {
    width: "100%",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20
},
contentSwipeDown: {
    paddingTop: 10,
    alignItems: 'center',
},
lineSwipeDown: {
    width: 30,
    height: 2.5,
    backgroundColor: COLORS.grey,
},
contentActionModalBottom: {
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
},
containModal: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
},
floatingButtonAdd: {
    backgroundColor: COLORS.primary,
    position: "absolute",
    width: 25,
    bottom: 0,
    zIndex: 1000,
    right: 20,
    top: 35,
    height: 25,
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
},
contentSwitch: {
    width: responsiveWidth(40),
},
switch: {},
choosePhotoBtn: {
    marginTop: 10,
    marginBottom: 10,
    width: "auto",
    height: "auto",
    padding: 5,
    alignItems: 'center',
    borderColor: COLORS.grey,
    marginRight: 10,
    elevation: 2,
},
checkbox: {
    alignSelf: "center",
    color: "white"
},
itemAmountPerMonth: {
    paddingLeft: 10,
    marginTop: 10,
    flexDirection: 'row',
},
dot: {
    width: 12,
    height: 12,
    borderRadius: 6
},
blockView: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
},
containPaymentMethod: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
},
methodItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 5,
},
iconContent: {
    width: 30,
    marginRight: 10,
    alignItems: 'center',
},
input: {
    height: 60,
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
    borderRadius: 5,
}
});
