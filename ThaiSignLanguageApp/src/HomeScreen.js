import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#27474e" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.logo}>
          <FontAwesome name="home" size={24} color="white" />
          <Text style={styles.logoText}>หน้าหลัก</Text>
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <FontAwesome name="search" size={16} color="#27474e" />
          <TextInput
            style={styles.searchInput}
            placeholder="ค้นหา"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.authLinks}>
          <Text style={styles.authText}>
            <Text style={styles.authLink}>สมัครสมาชิก</Text> |{' '}
            <Text style={styles.authLink}>เข้าสู่ระบบ</Text>
          </Text>
        </View>
      </View>

      <View style={styles.containerCards}>
        <TouchableOpacity style={styles.card}>
          <FontAwesome name="microphone" size={30} color="#f6d365" />
          <Text style={styles.cardText}>รับเสียง</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <FontAwesome name="keyboard-o" size={30} color="#f6d365" />
          <Text style={styles.cardText}>พิมพ์ตอบกลับ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <FontAwesome name="star" size={30} color="#f6d365" />
          <Text style={styles.cardText}>รายการโปรด</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <FontAwesome name="history" size={30} color="#f6d365" />
          <Text style={styles.cardText}>ประวัติย้อนหลัง 7 วัน</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <FontAwesome name="exclamation-triangle" size={30} color="#f6d365" />
          <Text style={styles.cardText}>แจ้งปัญหา</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <FontAwesome name="folder" size={30} color="#f6d365" />
          <Text style={styles.cardText}>คลังคำศัพท์</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#27474e',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight || 5, // Add padding to avoid overlap
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 20,
    width: '50%',
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  authLinks: {
    fontSize: 16,
    color: 'white',
  },
  authText: {
    color: 'white',
  },
  authLink: {
    fontWeight: 'bold',
  },
  containerCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
  },
  card: {
    backgroundColor: '#27474e',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%', // Adjust to fit better on smaller screens
    height: 100,
    margin: 10,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    color: '#f6d365',
  },
});
