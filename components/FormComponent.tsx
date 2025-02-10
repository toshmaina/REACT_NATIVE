import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Image } from "react-native";
import eyeHide from "../constants/icons"
import icons from "../constants/icons";


export default function FormComponent() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <View className="w-full space-y-6">
      <View className="space-y-2">
        <Text className="font-plight text-white/90 text-2xl mt-8 mb-4">Username</Text>
        <TextInput
          value={formData.username}
          onChangeText={(text) => handleChange("username", text)}
          placeholder="Your Unique username"
          placeholderTextColor="#CDCDE0"
          className="w-full bg-black-100 h-20 rounded-lg px-4 py-3 text-white/80 font-pregular"
        />
      </View>

      <View className="space-y-2">
        <Text className="font-plight text-white/90 text-2xl mt-8 mb-4">Email</Text>
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
        <Text className="font-plight text-white/90 text-2xl mt-8 mb-4">Password</Text>
       
       <View>
    
          <View className="relative">
          <TextInput
          value={formData.password}
          onChangeText={(text) => handleChange("password", text)}
          placeholder="Enter your password"
          placeholderTextColor="#CDCDE0"
          secureTextEntry
          className="w-full bg-black-100 h-20  rounded-lg px-4 py-3 text-white/80 font-pregular"
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
       
      </View>

      <TouchableOpacity 
        className="w-full flex items-center justify-center bg-secondary rounded-lg py-4 mt-6 h-20" 
        onPress={() => console.log(formData)}
      >
        <Text className="text-center text-black font-pbold text-xl">
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
