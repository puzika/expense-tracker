import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { TouchableOpacity, TouchableWithoutFeedback, Text, StyleSheet, View } from "react-native";
import { StyleProp, ViewStyle } from "react-native";

type DropdownProps = {
   setter: Dispatch<SetStateAction<string>>,
   items: string[],
   title: string,
   additionalStyles?: StyleProp<ViewStyle>
};

const styles = StyleSheet.create({
   container: {
      rowGap: 10,
   },

   button: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 20,
      paddingHorizontal: 40,
      paddingVertical: 10,
      borderWidth: 2,
      borderColor: '#10CFAE',
      borderRadius: 100,
   },

   text: {
      fontSize: 20,
      color: '#10cfae',
   },

   arrow: {
      width: 15,
      aspectRatio: 1,
      borderWidth: 2,
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: '#10CFAE',
      borderLeftColor: '#10CFAE',
   },

   list: {
      position: 'absolute',
      top: 0,
      left: 0,
      minWidth: 200,
      backgroundColor: '#1f303a',
      borderRadius: 20,
      overflow: 'hidden',
      zIndex: 10,
   },

   item: {
      paddingVertical: 10,
      borderWidth: 2,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: '#10CFAE',
   },
});

export default function Dropdown({ setter, items, title, additionalStyles }: DropdownProps) {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   return (
      <View style={styles.container}>
         <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={[styles.button, additionalStyles]}>
            <Text style={styles.text}>{title}</Text>
            <View style={[styles.arrow, { transform: [{ translateY: isOpen ? 4 : -4 }, { rotate: isOpen ? '135deg' : '-45deg' }] }]}></View>
         </TouchableOpacity>
         <View style={{ position: 'relative' }}>
            <View style={[styles.list, { display: isOpen ? 'flex' : 'none'}]}>
               {
                  items.map(item => (
                     <TouchableOpacity
                        key={item}
                        style={styles.item}
                        onPress={() => setter(item)}
                     >
                        <Text style={[styles.text, { textAlign: 'center'}]}>{item}</Text>
                     </TouchableOpacity>
                  ))
               }
            </View>
         </View>
      </View>
   )
}