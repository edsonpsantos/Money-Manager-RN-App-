import { Text, View, StyleSheet } from 'react-native'

export default function Balance({ total, costs }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Total: </Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>€</Text>
          <Text style={styles.balance}>{total}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Costs</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>€</Text>
          <Text style={styles.expense}>{costs}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  item: {},

  itemTitle: {
    fontSize: 20,
    color: '#dadada'
  },

  currencySymbol: {
    color: '#dadada',
    marginRight: 6
  },

  balance: {
    fontSize: 22,
    color: '#2ecc71'
  },

  expense: {
    fontSize: 22,
    color: '#e74c3c'
  }
})
