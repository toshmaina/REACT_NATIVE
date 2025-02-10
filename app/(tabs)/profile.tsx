import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
  const naviation = useNavigation()
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      <ScrollView className="flex-1">
      <TouchableOpacity
      onPress={() => router.push("/")}
      className="flex flex-row items-center justify-end mt-12 mr-12">
              <Image source={icons.logout} className='h-[24px] w-[24px]' resizeMode='contain'/>
            </TouchableOpacity>
        <View className="items-center mt-8">

          <View className="relative">
            <Image
              source={images.profile}
              className="w-32 h-32 rounded-full"
            />
            <TouchableOpacity className="absolute bottom-0 right-0 bg-secondary p-2 rounded-full">
              <Text className="font-pbold">Edit</Text>
            </TouchableOpacity>
           
          </View>
         
        
          
          
          <Text className="text-white font-pbold text-2xl mt-4">James Maina</Text>
          <Text className="text-white/60 font-plight">@jjamesmaina</Text>
          
          <View className="flex-row justify-around w-full mt-8 px-4">
            <View className="items-center">
              <Text className="text-white font-pbold text-xl">245</Text>
              <Text className="text-white/60 font-plight">Following</Text>
            </View>
            <View className="items-center">
              <Text className="text-white font-pbold text-xl">12.5k</Text>
              <Text className="text-white/60 font-plight">Followers</Text>
            </View>
            <View className="items-center">
              <Text className="text-white font-pbold text-xl">589</Text>
              <Text className="text-white/60 font-plight">Posts</Text>
            </View>
          </View>

          <View className="w-full px-4 mt-8">
            <TouchableOpacity className="bg-black-100 p-4 rounded-lg mb-4">
              <Text className="text-white font-pmedium text-lg">Edit Profile</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="bg-black-100 p-4 rounded-lg mb-4">
              <Text className="text-white font-pmedium text-lg">Settings</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="bg-black-100 p-4 rounded-lg mb-4">
              <Text className="text-white font-pmedium text-lg">Help Center</Text>
            </TouchableOpacity>
            
           
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen
