import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { useState } from "react";
import { router, Stack } from "expo-router";
import FormComponent from "@/components/FormComponent";
import logo from "../../assets/images/logo.png"

export default function SignUpScreen() {
  return (
    <SafeAreaView  className="h-full  bg-primary">
        
      <ScrollView>
      <View className="h-full justify-center px-4 mt-[122px]">
        <Image
        source={logo}
        resizeMode="contain"
        className="w-[115px] h-[34.07px]"
        />
        <Text className="text-white font-pbold text-3xl mt-12 ">Sign Up</Text>
        <FormComponent/>
       
        <View className="mt-12 flex-row justify-center items-center gap-2">
          <Text className="text-white/90 font-plight text-xl">Already have an account?</Text>
          <TouchableOpacity onPress={()=>router.push("/signIn")}>
            <Text className="text-secondary-200 text-xl font-plight">Login</Text>
          </TouchableOpacity>
        </View>
       
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
