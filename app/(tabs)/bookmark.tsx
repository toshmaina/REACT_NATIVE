import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const SavedScreen = () => {
  return (
    <View>
       <Stack.Screen
   options={{
    headerShown:false
   }}/>
      <Text>SavedScreen</Text>
    </View>
  )
}

export default SavedScreen