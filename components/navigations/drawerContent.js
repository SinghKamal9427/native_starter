import { View, Text, TouchableOpacity } from 'react-native'


export default function DrawerContent({navigation}) {
  return (
    <View className = "flex-1 bg-neutral-900 ">
    <TouchableOpacity className="flex items-end m-6" onPress={()=>navigation.closeDrawer()}>
     <Text className = "text-white text-xl">CloseIcon</Text>
     </TouchableOpacity>
     <View className="flex-1 items-center justify-center">
   <Text className = "text-white text-2xl text-center mx-4 mb-5">Welcome to Movies App</Text>
   </View>
 </View>
  )
}