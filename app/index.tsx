import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";


import { router, Stack } from "expo-router";
import images from "@/constants/images";



export default function HomeScreen() {
  return (
    <SafeAreaView  className="h-full  bg-primary">
         <Stack.Screen
   options={{
    headerShown:false
   }}
    />
      <ScrollView>
      <View className="h-full  flex items-center justify-center px-4 mt-[84px] ">
      <Image
        source={images.logo}
        resizeMode="contain"
        className="w-[115px] h-[34.07px] "
        />

        <Image
        source={images.cards}
        resizeMode="contain"
        className="w-[375px] h-[298px] mt-12"
        />
        <View className="mt-4 ">
          <Text className="text-5xl text-white font-psemibold leading-relaxed"> Discover Endless</Text>
          <View className="flex flex-row items-center">
            <Text className="text-5xl text-white font-psemibold leading-relaxed">Possibilities with</Text>
          <View className="relative" ><Text className="text-secondary-100   text-5xl  font-psemibold leading-relaxed"> Aora</Text>
            <Image source={images.path} className="absolute -bottom-2  -right-8  w-[136px] h-[16px]" />
          </View>
          </View>
          
         </View>
         <Text className="text-white/80 font-plight text-2xl mt-4" >Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>
          <TouchableOpacity 
        className="w-full flex items-center justify-center bg-secondary rounded-lg py-4 mt-6 h-20" 
        onPress={() => router.push("/signIn")}
      >
        <Text className="text-center text-black font-pbold text-xl">
          Continue with Email
        </Text>
      </TouchableOpacity>
     </View>

       
     
      </ScrollView>
    </SafeAreaView>
  );
}
