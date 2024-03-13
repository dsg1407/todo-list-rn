import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../theme'
import { styles } from './styles'

export function EmptyTasks() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="clipboard-outline"
        size={56}
        color={theme.colors.gray_400}
      />
      <Text style={styles.message}>
        Você ainda não tem tarefas cadastradas
        <Text style={styles.submessage}>
          {'\n'}Crie tarefas e organize seus itens a fazer
        </Text>
      </Text>
    </View>
  )
}
