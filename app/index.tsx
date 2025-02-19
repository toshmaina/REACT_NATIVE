/* import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
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
 */
/*
Inspiration: https://dribbble.com/shots/3894781-Urbanears-Headphones
Twitter: http://twitter.com/mironcatalin
GitHub: http://github.com/catalinmiron
Video Tutorial: https://youtu.be/cGTD4yYgEHc
Link to example: https://github.com/catalinmiron/react-native-headphones-carousel
*/

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  ImageRequireSource,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import type { PagerViewOnPageScrollEventData } from 'react-native-pager-view';
import PagerView from 'react-native-pager-view';
import { images, icons} from '@/constants';
import { SafeAreaView } from 'react-native-safe-area-context';

import { router, Stack } from "expo-router";

const data = [
  {
    type: 'Saving',
    imageUri: images.emergency_funds,
    heading: 'Save Your Money Conviniently',
    description: 'Four on-trend colorways to seamlessly suit your style.',
    key: 'first',
    color: '#9dcdfa',
  },
  {
    type: 'Education Expenses ',
    imageUri: images.education_expenses,
    heading: 'Education Expenses',
    description: 'Manage Your Education expenses easily for free.',
    key: 'second',
    color: '#db9efa',
  },
  {
    type: 'Humlan P',
    imageUri: images.saving,
    heading: 'Great quality',
    description:
      'An Urbanears classic! Listen-all-day fit. Striking the perfect balance of effortless technology',
    key: 'third',
    color: '#999',
  },
  {
    type: 'Bank Cards',
    imageUri: images.bank_card,
    heading: 'Cards Management',
    description:
      'Manage Your Bank Account cards in a centralised platform',
    key: 'fourth',
    color: '#a1e3a1',
  },
];
const { width, height } = Dimensions.get('window');
const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 40;
const DOT_SIZE = 40;
const TICKER_HEIGHT = 40;
const CIRCLE_SIZE = width * 0.6;

const Circle = ({
  scrollOffsetAnimatedValue,
}: {
  scrollOffsetAnimatedValue: Animated.Value;
}) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.circleContainer]}>
      {data.map(({ color }, index) => {
        const inputRange = [0, 0.5, 0.99];
        const inputRangeOpacity = [0, 0.5, 0.99];
        const scale = scrollOffsetAnimatedValue.interpolate({
          inputRange,
          outputRange: [1, 0, 1],
          extrapolate: 'clamp',
        });

        const opacity = scrollOffsetAnimatedValue.interpolate({
          inputRange: inputRangeOpacity,
          outputRange: [0.2, 0, 0.2],
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              {
                backgroundColor: color,
                opacity,
                transform: [{ scale }],
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const Ticker = ({
  scrollOffsetAnimatedValue,
  positionAnimatedValue,
}: {
  scrollOffsetAnimatedValue: Animated.Value;
  positionAnimatedValue: Animated.Value;
}) => {
  const inputRange = [0, data.length];
  const translateY = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue
  ).interpolate({
    inputRange,
    outputRange: [0, data.length * -TICKER_HEIGHT],
  });
  return (
    <View style={styles.tickerContainer}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {data.map(({ type }, index) => {
          return (
            <Text key={index} style={styles.tickerText}>
              {type}
            </Text>
          );
        })}
      </Animated.View>
    </View>
  );
};

const Item = ({
  index,
  imageUri,
  heading,
  description,
  scrollOffsetAnimatedValue,
}: {
  index:number;
  imageUri: ImageRequireSource;
  description: string;
  heading: string;
  scrollOffsetAnimatedValue: Animated.Value;
  positionAnimatedValue: Animated.Value;
}) => {
  const inputRange = [0, 0.5, 0.99];
  const inputRangeOpacity = [0, 0.5, 0.99];
  const scale = scrollOffsetAnimatedValue.interpolate({
    inputRange,
    outputRange: [1, 0, 1],
  });

  const opacity = scrollOffsetAnimatedValue.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [1, 0, 1],
  });

  return (
    <View style={styles.itemStyle}>
      <Animated.Image
        source={imageUri}
        className='bg-transparent'
        style={[
          styles.imageStyle,
          {
            transform: [{ scale }],
          },
        ]}
      />
      <View style={styles.textContainer}>
        <Animated.Text
        className={`text-5xl text-white font-psemibold leading-relaxed`  }
          style={[
            
            {
              opacity,
            },
          ]}
        >
          {heading}
        </Animated.Text>
        <Animated.Text
        className={"text-white/80 font-plight text-2xl mt-4"}
          style={[
            styles.description,
            {
              opacity,
            },
          ]}
        >
          {description}
        </Animated.Text>

        {
index === data.length - 1 &&  <View className='flex items-center justify-end w-full mt-6'>

<TouchableOpacity 
className=" flex items-center justify-center bg-secondary rounded-lg py-2  h-[72px] w-[211px]"  
onPress={() => router.push("/signIn")}
>
<Text className="text-center text-black font-pbold text-xl">
  Get Started
</Text>
</TouchableOpacity>
</View>
        }
       
       
      </View>
    </View>
  );
};

const Pagination = ({
  scrollOffsetAnimatedValue,
  positionAnimatedValue,
}: {
  scrollOffsetAnimatedValue: Animated.Value;
  positionAnimatedValue: Animated.Value;
}) => {
  const inputRange = [0, data.length];
  const translateX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue
  ).interpolate({
    inputRange,
    outputRange: [0, data.length * DOT_SIZE],
  });

  return (
    <View style={[styles.pagination]}>
      <Animated.View
        style={[
          styles.paginationIndicator,
          {
            position: 'absolute',
            transform: [{ translateX: translateX }],
          },
        ]}
      />
      {data.map((item) => {
        return (
          <View key={item.key} style={styles.paginationDotContainer}>
            <View
              style={[styles.paginationDot, { backgroundColor: item.color }]}
            />
          </View>
        );
      })}
    </View>
  );
};

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export default function OnBoardingCarouselExample() {
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;


  return (
    <SafeAreaView className='bg-primary h-full'>
      
    
      
      <View className="h-full  border-gray-100 ">
      {/* <Circle scrollOffsetAnimatedValue={scrollOffsetAnimatedValue} /> */}
     

     
      <AnimatedPagerView
        initialPage={0}
        style={{ width: '100%', height: '100%' }}
        onPageScroll={Animated.event<PagerViewOnPageScrollEventData>(
          [
            {
              nativeEvent: {
                offset: scrollOffsetAnimatedValue,
                position: positionAnimatedValue,
              },
            },
          ],
          {
            listener: ({ nativeEvent: { offset, position } }) => {
              console.log(`Position: ${position} Offset: ${offset}`);
            },
            useNativeDriver: true,
          }
        )}
      >
        {data.map(({ key, ...item }, index) => (
          <View collapsable={false} key={index}>
            <Item
              key={key}
              {...item}
              index={index}
              scrollOffsetAnimatedValue={scrollOffsetAnimatedValue}
              positionAnimatedValue={positionAnimatedValue}
            />
          </View>
        ))}
      </AnimatedPagerView>
    {/*   <Image
        style={styles.logo}
        source={images.logoSmall}
      /> */}
            
      
      <Pagination
        scrollOffsetAnimatedValue={scrollOffsetAnimatedValue}
        positionAnimatedValue={positionAnimatedValue}
      />
    {/*   <Ticker
        scrollOffsetAnimatedValue={scrollOffsetAnimatedValue}
        positionAnimatedValue={positionAnimatedValue}
      /> */}
      
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  itemStyle: {
   paddingRight:40,
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: width * 0.75,
    height: height * 0.50,
    resizeMode: 'contain',
    flex: 1,
  },
  textContainer: {
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    flex: 0.5,
  },
  heading: {
    color: '#444',
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 5,
  },
  description: {
    color: '#ccc',
    fontWeight: '600',
    textAlign: 'left',
    width: width * 0.75,
    marginRight: 10,
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },
  logo: {
    opacity: 0.9,
    height: LOGO_HEIGHT,
    width: LOGO_WIDTH,
    resizeMode: 'contain',
    position: 'absolute',
    left: 10,
    bottom: 10,
    transform: [
      { translateX: -LOGO_WIDTH / 2 },
      { translateY: -LOGO_HEIGHT / 2 },
      { rotateZ: '-90deg' },
      { translateX: LOGO_WIDTH / 2 },
      { translateY: LOGO_HEIGHT / 2 },
    ],
  },
  pagination: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    flexDirection: 'row',
    height: DOT_SIZE,
  },
  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15,
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  tickerContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    overflow: 'hidden',
    height: TICKER_HEIGHT,
  },
  tickerText: {
    fontSize: TICKER_HEIGHT,
    lineHeight: TICKER_HEIGHT,
    textTransform: 'uppercase',
    fontWeight: '800',
    color: "white"
  },

  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    top: '15%',
  },
});