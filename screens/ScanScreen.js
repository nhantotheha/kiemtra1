import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#007AFF" />
      </TouchableOpacity>

      {/* Khu vực quét */}
      <View style={styles.scanArea}>
        <Image
          source={require('../assets/d5bc6b7e5e42324b3bb5c2a6b4e4bf3b.png')} // Đặt ảnh vào thư mục assets
          style={styles.productImage}
        />
      </View>

      {/* Thông tin sản phẩm */}
      <View style={styles.productInfo}>
        <Image
          source={require('../assets/d5bc6b7e5e42324b3bb5c2a6b4e4bf3b.png')} // Ảnh nhỏ của sản phẩm
          style={styles.smallImage}
        />
        <View style={styles.infoText}>
          <Text style={styles.brand}>Lauren's</Text>
          <Text style={styles.productName}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  scanArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 200,
    height: 400,
    borderRadius: 10,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  smallImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  infoText: {
    flex: 1,
    marginLeft: 10,
  },
  brand: {
    fontSize: 14,
    color: '#666',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    padding: 10,
  },
});
