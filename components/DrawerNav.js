import { useState, useEffect } from "react"
import { Text, View, StyleSheet, Image } from 'react-native'

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'

import me from "../assets/profile.png"

import profile from "../assets/twitterIcons/profile.png"
import lists from "../assets/twitterIcons/lists.png"
import topics from "../assets/twitterIcons/topics.png"
import twitterWheel from "../assets/twitterIcons/wheel.png"
import saved from "../assets/twitterIcons/saved.png"
import moments from "../assets/twitterIcons/moments.png"
import shops from "../assets/twitterIcons/shops.png"
import monetization from "../assets/twitterIcons/monetization.png"

export const CustomDrawerContent = (props) => {
  const [drawerItems, setDrawerItems] = useState([])

  useEffect(() => {
    setDrawerItems([
    {
      id: 1,
      icon: profile,
      label: "Perfil",
    },
    {
      id: 2,
      icon: lists,
      label: "Listas",
    },
    {
      id: 3,
      icon: topics,
      label: "Tópicos",
    },
    {
      id: 4,
      icon: twitterWheel,
      label: "Roda do Twitter",
    },
    {
      id: 5,
      icon: saved,
      label: "Itens salvos",
    },
    {
      id: 6,
      icon: moments,
      label: "Moments",
    },
    {
      id: 7,
      icon: shops,
      label: "Compras",
    },
    {
      id: 8,
      icon: monetization,
      label: "Monetização",
    },
  ])
  }, [])
  

  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View style={styles.profileContainer}>
        <Image source={me} style={styles.profileImage}/>
        <Text style={styles.userName}>Meu nome</Text>
        <Text style={styles.nickname}>@meunickname</Text>
        <View style={styles.follow}>
          <Text style={styles.following}>50 
            <Text style={styles.followLabel}>Seguindo</Text>
          </Text>
          <Text style={styles.following}>50 
            <Text style={styles.followLabel}>Seguidores</Text>
          </Text>
        </View>
      </View>

      {drawerItems.map(item => (
        <View style={styles.drawerItem}>
          <Image source={item.icon}/>
          <DrawerItem
            label={item.label}
            onPress={() => props.navigation.closeDrawer()}
            labelStyle={styles.drawerLabel}
          />
        </View>
      ))}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    paddingHorizontal: 20,
    backgroundColor: "#16202a",
    scrollbarWidth: "none",
  },
  profileContainer: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "Open Sans, sans-serif",
    paddingVertical: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: "100%",
    objectFit: "cover",
    marginBottom: 10,
  },
  userName: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    fontFamily: "Open Sans, sans-serif",
    marginBottom: 3,
  },
  nickname: {
    color: "#71767b",
    fontSize: 15,
    fontWeight: 300,
    fontFamily: "Open Sans, sans-serif",
    marginBottom: 13,
  },
  follow: {
    display: "flex",
    flexDirection: "row",
  },
  following: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 500,
    fontFamily: "Open Sans, sans-serif",
    marginRight: 20,
  },
  followLabel: {
    color: "#71767b",
    fontSize: 14,
    fontWeight: 300,
    fontFamily: "Open Sans, sans-serif",
    paddingLeft: 5,
  },
  drawerItem: {
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#fff"
  },
  drawerLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "Open Sans, sans-serif",
  }
})
