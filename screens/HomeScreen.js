import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello 👋</Text>
        <Text style={styles.name}>Christie Doe</Text>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }} // Ảnh đại diện
          style={styles.avatar}
        />
      </View>

      {/* Insights Section */}
      <Text style={styles.sectionTitle}>YOUR INSIGHTS</Text>
      <View style={styles.insightsContainer}>
        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="scan-outline" size={30} color="#007AFF" />
          <Text style={styles.insightTitle}>Scan</Text>
          <Text style={styles.insightValue}>Scanned 483</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="alert-circle-outline" size={30} color="#FF9500" />
          <Text style={styles.insightTitle}>Counterfeits</Text>
          <Text style={styles.insightValue}>Counterfeited 32</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="checkmark-circle-outline" size={30} color="#34C759" />
          <Text style={styles.insightTitle}>Success</Text>
          <Text style={styles.insightValue}>Checkouts 8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="calendar-outline" size={30} color="#007AFF" />
          <Text style={styles.insightTitle}>Directory</Text>
          <Text style={styles.insightValue}>History 26</Text>
        </TouchableOpacity>
      </View>

      {/* Explore More Section */}
      <Text style={styles.sectionTitle}>EXPLORE MORE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 'auto',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  insightsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  insightBox: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    width: '48%',
    alignItems: 'center',
    marginBottom: 10,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  insightValue: {
    fontSize: 14,
    color: '#666',
  },
});