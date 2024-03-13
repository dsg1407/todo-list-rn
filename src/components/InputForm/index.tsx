import { TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../theme'

interface InputFormProps {
  task: string
  placeholder: string
  setTask: (text: string) => void
  onSubmit: () => void
}

export function InputForm({
  placeholder,
  onSubmit,
  task,
  setTask,
}: InputFormProps) {
  return (
    <View style={styles.taskInputGroup}>
      <TextInput
        style={styles.taskInput}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.gray_300}
        value={task}
        onChangeText={(text) => setTask(text)}
        onSubmitEditing={onSubmit}
      />
      <TouchableOpacity style={styles.taskInputButton} onPress={onSubmit}>
        <Ionicons
          name="add-circle-outline"
          size={16}
          color={theme.colors.gray_100}
        />
      </TouchableOpacity>
    </View>
  )
}
