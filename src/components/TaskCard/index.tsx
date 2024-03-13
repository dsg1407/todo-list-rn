import { TouchableOpacity, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../theme'

interface TaskCardProps {
  description: string
  done: boolean
  onRemove: () => void
  onComplete: () => void
}

export function TaskCard({
  description,
  done = false,
  onRemove,
  onComplete,
}: TaskCardProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.taskBlock} onPress={onComplete}>
        <View style={[styles.checkMenu, done && styles.checked]}>
          {done && (
            <Ionicons
              name="checkmark-sharp"
              size={9}
              color={theme.colors.gray_100}
            />
          )}
        </View>
        <Text style={[styles.taskDescription, done && styles.taskDone]}>
          {description}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.trashButton} onPress={onRemove}>
        <Ionicons
          name="trash-outline"
          size={14}
          color={theme.colors.gray_300}
        />
      </TouchableOpacity>
    </View>
  )
}
