import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '@/constants'
import { Image } from 'react-native'

const TabIcon = ({ icon, color, name, focused }:{ icon: any, color: string, name: string, focused: boolean}) => {
    return (
      <View className="flex items-center justify-center gap-2">
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-6 h-6"
        />
        <Text
          className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
          style={{ color: color }}
        >
          {name}
        </Text>
      </View>
    );
  };

const TabsLayout = () => {
  return (
   < Tabs 
   
   screenOptions={{
    tabBarActiveTintColor: "#FFA001",
    tabBarInactiveTintColor: "#CDCDE0",
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      backgroundColor: "#161622",
      borderTopWidth: 1,
      borderTopColor: "#232533",
      height: 84,
     marginTop:0
    },
  }}>
 
  <Tabs.Screen
    name='home'
    options={{
         title:"home",
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
            <TabIcon
                icon={icons.home}
               name="Home"
               focused={focused}
               color={color}
            />
        ),
    
    }}
    /> 
         
                <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Saved"
                focused={focused}
              />
            ),
          }}
        />
     <Tabs.Screen
          name="create"
          options={{
            title: "create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="create"
                focused={focused}
              />
            ),
          }}
        />
            <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
    

    
    </Tabs>
    
  )
}

export default TabsLayout