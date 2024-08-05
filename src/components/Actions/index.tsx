import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function Actions() {
  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.actionButtons}>
        <View style={styles.buttonArea}>
          <AntDesign name='addfolder' size={26} color='black' />
        </View>
        <Text style={styles.labelButton}>Incoming</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButtons}>
        <View style={styles.buttonArea}>
          <AntDesign name='tagso' size={26} color='black' />
        </View>
        <Text style={styles.labelButton}>Buys</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButtons}>
        <View style={styles.buttonArea}>
          <AntDesign name='creditcard' size={26} color='black' />
        </View>
        <Text style={styles.labelButton}>Wallet</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButtons}>
        <View style={styles.buttonArea}>
          <AntDesign name='barcode' size={26} color='black' />
        </View>
        <Text style={styles.labelButton}>Payments</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButtons}>
        <View style={styles.buttonArea}>
          <AntDesign name='setting' size={26} color='black' />
        </View>
        <Text style={styles.labelButton}>Account</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14
  },

  actionButtons: {
    alignItems: 'center',
    marginRight: 28
  },

  buttonArea: {
    backgroundColor: '#ecf0f1',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: '600'
  }
})
