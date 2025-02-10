import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";
import { Image } from "react-native";
import { icons } from "../../constants";
import logo from "../../assets/images/logo.png"
import { router, Stack} from "expo-router";
import { useNavigation } from "@react-navigation/native";

export default function SignInScreen() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigation = useNavigation()

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <SafeAreaView  className="h-full  bg-primary">
 
  
         <ScrollView>
         <View className="h-full justify-center px-4 my-6">
         <Image
        source={logo}
        resizeMode="contain"
        className="w-[115px] h-[34.07px]"
        />
        <Text className="text-white font-pbold text-3xl mt-12 ">Sign In</Text>
      <View className="space-y-2">
        <Text className="font-plight text-white/90 text-2xl mt-12 mb-4">Email</Text>
        <TextInput
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
          placeholder="Enter your email"
          placeholderTextColor="#CDCDE0"
          keyboardType="email-address"
          autoCapitalize="none"
          className="w-full bg-black-100 h-20 rounded-lg px-4 py-3 text-white/80 font-pregular"
        />
      </View>

      <View className="space-y-2">
        <Text className="font-plight text-white/90 text-2xl mt-12 mb-4">Password</Text>
        <View className="relative">
          <TextInput
            value={formData.password}
            onChangeText={(text) => handleChange("password", text)}
            placeholder="Enter your password" 
            placeholderTextColor="#CDCDE0"
            secureTextEntry={!showPassword}
            className="w-full bg-black-100 h-20 rounded-lg px-4 py-3 text-white/80 font-pregular"
          />
          <TouchableOpacity 
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-6"
          >
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              className="w-8 h-8"
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity className="w-full">
        <Text className="text-secondary font-pmedium text-right">
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        className="w-full flex items-center justify-center bg-secondary rounded-lg py-4 mt-6 h-20" 
        onPress={() => router.push("/(tabs)/profile")}
      >
        <Text className="text-center text-black font-pbold text-xl">
          Sign In
        </Text>
      </TouchableOpacity>
      <View className="mt-12 flex-row justify-center items-center gap-2">
          <Text className="text-white/90 font-plight text-xl">Don't have an account?</Text>
          <TouchableOpacity onPress={()=>router.push("/signUp")}>
            <Text className="text-secondary-200 text-xl font-plight">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
