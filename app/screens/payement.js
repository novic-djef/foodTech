/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function Payemant() {
    const [activeMenu, setActiveMenu] = useState("orangeMoney");
    const navigation = useNavigation();
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handlePress = () => {
    navigation.goBack();
  };

  const renderMenuContent = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const handlePaymentMobile = () => {
      // Effectuer les étapes nécessaires pour soumettre le paiement à Orange
      // (par exemple, envoyer une demande à une API d'Orange pour traiter le paiement)
    };

    switch (activeMenu) {
      case 'OrangeMoney':
        return (
                <View style={{ padding: 20 }}>
                  <Text style={{ fontSize: 24, marginBottom: 20 }}>Paiement Orange(OM)</Text>
                  <TextInput
                    placeholder="Numéro de téléphone"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10, borderRadius: 10 }}
                  />
                  <TextInput
                    placeholder="Montant"
                    value={amount}
                    onChangeText={setAmount}
                    keyboardType="numeric"
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10, borderRadius: 10 }}
                  />
                  <TouchableOpacity onPress={handlePaymentMobile} style={{ backgroundColor: 'orange', padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Payer avec Orange</Text>
                  </TouchableOpacity>
                </View>
              );
      case 'MTNmoney':
        return (
            <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24,color: "black", marginBottom: 20 }}>Paiement MTN (MOMO)</Text>
            <TextInput
              placeholder="Numéro de téléphone"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10, borderRadius: 10 }}
            />
            <TextInput
              placeholder="Montant"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
              style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10, borderRadius: 10 }}
            />
            <TouchableOpacity onPress={handlePaymentMobile} style={{ backgroundColor: '#f1c40f', padding: 10, borderRadius: 10 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Payer avec MTN</Text>
            </TouchableOpacity>
          </View>
        );    
      default:
        return null;
    }
  };


  return (

    <View 
    >
        <TouchableOpacity
        style={{ margin: 12 }}
      onPress={handlePress}
      >
      <Icon name="cog" size={24} color="black" />
      </TouchableOpacity>
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeMenu === 0 && styles.activeMenu]}
        onPress={() => handleMenuClick('OrangeMoney')}
      >
        <Text style={[styles.tabText, activeMenu === 0 && styles.activeTabText, {color: activeMenu === 'OrangeMoney' ? '#e67e22' : 'black'}]}>OrangeMoney</Text>
    
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeMenu === 1 && styles.activeMenu2]}
        onPress={() => handleMenuClick('MTNmoney')}
      >
        <Text style={[styles.tabText, activeMenu === 1 && styles.activeTabText, { color: activeMenu === 'MTNmoney' ? '#f0f40f' : 'black' }]}>MTNmoney</Text>
      </TouchableOpacity>

    </View>
    {renderMenuContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#f2f2f2',
  },
  tab: {
    width: 160,
    height: 70,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    
  },
  tabText: {
    fontSize: 16,
    color: 'black',
  },
  activeMenu: {
    backgroundColor: 'red'  
},
activeMenu2: {
    backgroundColor: '#f0f40f'
},
  activeTabText: {
    color: 'white',
  },
});
