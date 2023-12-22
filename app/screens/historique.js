import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentHistoryScreen = () => {
  const [paymentHistory, setPaymentHistory] = useState([
    'Paiement 1',
    'Paiement 2',
    'Paiement 3',
    'Paiement 4',
  ]);

  // Fonction pour ajouter un élément à l'historique des paiements
  const addPaymentToHistory = (payment) => {
    setPaymentHistory([...paymentHistory, payment]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historique des paiements</Text>
      {paymentHistory.map((payment, index) => (
        <Text key={index} style={styles.item}>{payment}</Text>
      ))}
    </View>
  );
};

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([
    'Notification 1',
    'Notification 2',
    'Notification 3',
    'Notification 4',
  ]);

  // Fonction pour ajouter une notification
  const addNotification = (notification) => {
    setNotifications([...notifications, notification]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications de transactions</Text>
      {notifications.map((notification, index) => (
        <Text key={index} style={styles.item}>{notification}</Text>
      ))}
    </View>
  );
};

const Historique = () => {
  const [activeMenu, setActiveMenu] = useState('paymentHistory');

  // Fonction pour changer de menu
  const changeMenu = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => changeMenu('paymentHistory')}>
          <Text style={[styles.menuItem, activeMenu === 'paymentHistory' && styles.activeMenuItem]}>
            Historique des paiements
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeMenu('notifications')}>
          <Text style={[styles.menuItem, activeMenu === 'notifications' && styles.activeMenuItem]}>
            Notifications
          </Text>
        </TouchableOpacity>
      </View>
      {activeMenu === 'paymentHistory' ? <PaymentHistoryScreen /> : <NotificationScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  menuItem: {
    marginRight: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  activeMenuItem: {
    color: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Historique;
