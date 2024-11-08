import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, Modal } from 'react-native';

export default function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Side Menu Modal */}
      <Modal visible={menuVisible} animationType="slide" transparent={true}>
        <View style={styles.menuOverlay}>
          <View style={styles.sideMenu}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
              <Text style={styles.closeIcon}>✖</Text>
            </TouchableOpacity>
            <View style={styles.menuContent}>
              <Text style={styles.menuItem}>🏠 HOME</Text>
              <Text style={styles.menuItem}>🔒 SHOP</Text>
              <Text style={styles.menuItem}>👤 SIGN UP/LOGIN</Text>
              <Text style={styles.menuItem}>❤️ WISHLIST</Text>
              <Text style={styles.menuItem}>✅ NOTIFICATIONS</Text>
              <Text style={styles.menuItem}>❓ NEED HELP?</Text>
              <Text style={styles.menuItem}>📧 CONTACT US</Text>
            </View>
            <Text style={styles.menuFooter}>Mantal</Text>
          </View>
        </View>
      </Modal>

      {/* Main Content */}
      <ScrollView style={styles.container}>
        {/* Top Navigation Bar */}
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.navTitle}>ALL WOMEN MEN</Text>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartIcon}>🛒</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <TextInput style={styles.searchBar} placeholder="Search" />

        {/* New Spring Collection */}
        <View style={styles.banner}>
          <Image source={{ uri: 'https://example.com/your-image-url.jpg' }} style={styles.bannerImage} />
          <Text style={styles.bannerText}>NEW SPRING COLLECTION</Text>
          <Text style={styles.bannerSubtext}>STARTING FROM $15+</Text>
          <TouchableOpacity style={styles.shopButton}>
            <Text style={styles.shopButtonText}>SHOP NOW</Text>
          </TouchableOpacity>
        </View>

        {/* Promotions */}
        <View style={styles.promoSection}>
          <View style={styles.promo}>
            <Image source={{ uri: 'https://example.com/t-shirt-collection.jpg' }} style={styles.promoImage} />
            <Text style={styles.promoText}>BUY 2 FOR 1</Text>
            <Text style={styles.promoSubtext}>USE CODE: 12345</Text>
            <TouchableOpacity style={styles.shopProductButton}>
              <Text style={styles.shopProductText}>SHOP PRODUCT</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.promo}>
            <Image source={{ uri: 'https://example.com/black-shirt.jpg' }} style={styles.promoImage} />
            <Text style={styles.promoText}>25% OFF</Text>
            <Text style={styles.promoSubtext}>FROM $99+</Text>
            <TouchableOpacity style={styles.shopProductButton}>
              <Text style={styles.shopProductText}>SHOP PRODUCT</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categories}>
          <Text style={styles.categoryTitle}>CATEGORIES</Text>
          <View style={styles.categoryRow}>
            <View style={styles.categoryItem}>
              <Image source={{ uri: 'https://example.com/mens-clothing.jpg' }} style={styles.categoryImage} />
              <Text style={styles.categoryText}>MEN'S CLOTHING</Text>
            </View>
            <View style={styles.categoryItem}>
              <Image source={{ uri: 'https://example.com/womens-clothing.jpg' }} style={styles.categoryImage} />
              <Text style={styles.categoryText}>WOMEN'S CLOTHING</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.shopNowButton}>
            <Text style={styles.shopNowText}>SHOP NOW</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    fontSize: 20,
  },
  navTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartButton: {
    padding: 10,
  },
  cartIcon: {
    fontSize: 20,
  },
  searchBar: {
    margin: 15,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
  },
  banner: {
    alignItems: 'center',
    backgroundColor: '#FFD700',
    paddingVertical: 20,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  bannerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  bannerSubtext: {
    fontSize: 14,
  },
  shopButton: {
    marginTop: 10,
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  shopButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  promoSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  promo: {
    alignItems: 'center',
    width: '45%',
  },
  promoImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  promoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  promoSubtext: {
    fontSize: 12,
    marginBottom: 5,
  },
  shopProductButton: {
    backgroundColor: '#333',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  shopProductText: {
    color: '#fff',
    fontSize: 14,
  },
  categories: {
    alignItems: 'center',
    marginVertical: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 15,
  },
  categoryItem: {
    alignItems: 'center',
    width: '45%',
  },
  categoryImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  shopNowButton: {
    marginTop: 20,
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  shopNowText: {
    color: '#fff',
    fontSize: 16,
  },
  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sideMenu: {
    backgroundColor: '#000',
    width: '70%',
    height: '100%',
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  closeIcon: {
    fontSize: 24,
    color: '#fff',
  },
  menuContent: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  menuItem: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 15,
  },
  menuFooter: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
    marginTop: 20,
  },
});