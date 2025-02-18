import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import { router, Stack } from "expo-router";
import { transactions } from "@/constants/transactions";
import { FlashList } from "@shopify/flash-list";
import EmptyState from "@/components/EmptyState";
import { useState } from "react";


export default function TransactionsScreen() {
    const [filteredTransactions, setFilteredTransactions] = useState(transactions)
  return (
    <SafeAreaView className="h-full bg-primary">
      <Stack.Screen
        options={{
          headerShown: false
         
        }}
      />
      
      <View className="px-4 py-6">
        <Text className="text-white font-pbold text-3xl">Transactions</Text>
        
        {transactions?.[0] && (
          <View className="mt-6 flex-row justify-between">
            <View>
              <Text className="text-white/60 font-plight text-base">Total Balance</Text>
              <Text className="text-white font-pbold text-2xl mt-1">$3,903.51</Text>
            </View>
            <View className="bg-black-100 w-60 flex-row items-center rounded-lg px-4 py-2">
              <Image 
                source={icons.search}
                className="w-5 h-5 opacity-60"
              />
              <TextInput
                placeholder="Search transactions..."
                placeholderTextColor="rgba(255,255,255,0.6)" 
                className="flex-1 ml-2 text-white font-pmedium"
                onChangeText={(text) => {
                  const filtered = transactions?.filter(transaction => 
                    transaction.title.toLowerCase().includes(text.toLowerCase()) ||
                    transaction.category.toLowerCase().includes(text.toLowerCase()) ||
                    transaction.amount.toString().includes(text) ||
                    transaction.date.includes(text) ||
                    transaction.type.toLowerCase().includes(text.toLowerCase())
                  );
                  setFilteredTransactions(filtered);
                }}
              />
            </View>
          </View>
        )}
      </View>

      <FlashList
            data={filteredTransactions || []}
            estimatedItemSize={200}
            ListEmptyComponent={
                filteredTransactions === undefined ? (
                <View className="flex-1 justify-center items-center">
                 <ActivityIndicator
          color="#fff"
          size="small"
          className="ml-2"
        />
                </View>
              ) : (
                <EmptyState title="Transactions" subtitle="You do not have any transactions in your account"/>
              )
            }
            renderItem={({ item: transaction }) => (
              <TouchableOpacity 
                key={transaction.id}
                className="bg-black-100 rounded-lg p-4 mb-4 flex-row justify-between items-center"
              >
                <View className="flex-row items-center">
                  <View className={`w-12 h-12 rounded-full ${transaction.type === 'expense' ? 'bg-red-500/20' : 'bg-green-500/20'} items-center justify-center`}>
                    <Text className={`text-xl ${transaction.type === 'expense' ? 'text-red-500' : 'text-green-500'}`}>
                      {transaction.type === 'expense' ? '-' : '+'}
                    </Text>
                  </View>
                  
                  <View className="ml-3">
                    <Text className="text-white font-pmedium text-lg">{transaction.title}</Text>
                    <Text className="text-white/60 font-plight text-sm">{transaction.category}</Text>
                  </View>
                </View>

                <View className="items-end">
                  <Text className={`font-pbold text-lg ${transaction.type === 'expense' ? 'text-red-500' : 'text-green-500'}`}>
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </Text>
                  <Text className="text-white/60 font-plight text-sm">{transaction.date}</Text>
                </View>
              </TouchableOpacity>
            )}/>
    </SafeAreaView>
  );
}
