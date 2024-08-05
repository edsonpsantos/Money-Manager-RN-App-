import { FlatList, StyleSheet, Text, View } from 'react-native'

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Moviments from '../../components/Moviments'
import Actions from '../../components/Actions'

const dataList = [
  { id: 1, label: 'Energy company', value: '66,89', date: '05/08/2024', type: 0 },
  { id: 2, label: 'Gasoline', value: '50,00', date: '04/08/2024', type: 0 },
  { id: 3, label: 'Salary', value: '1600,00', date: '01/08/2024', type: 1 },
  { id: 4, label: 'Supermarket', value: '350,00', date: '02/08/2024', type: 0 }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header userName='John Doe' />
      <Balance total='4.250,89' costs='634,00' />

      <Actions />

      <Text style={styles.title}>Last Releases</Text>

      <FlatList
        style={styles.list}
        data={dataList}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
})
