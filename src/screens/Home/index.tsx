import { useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import uuid from 'react-native-uuid'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter'

import { InputForm } from '../../components/InputForm'
import { EmptyTasks } from '../../components/EmptyTasks'

import { styles } from './styles'
import { TaskCard } from '../../components/TaskCard'

interface TaskProps {
  id: string
  description: string
  done: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [task, setTask] = useState('')

  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  function handleTaskSubmit() {
    const newTask = {
      id: String(uuid.v4()),
      description: task,
      done: false,
    }

    setTasks((state) => [...state, newTask])
    setTask('')
  }

  function handleRemoveTask(id: string) {
    const newTasksList = tasks.filter((task) => task.id !== id)
    setTasks(newTasksList)
  }
  function handleCompleteTask(id: string) {
    const newTasksList = tasks.map((task) => {
      return {
        ...task,
        done: task.id === id ? !task.done : task.done,
      }
    })
    setTasks(newTasksList)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/Logo.png')} />
      </View>

      <InputForm
        placeholder="Adicione uma nova tarefa"
        onSubmit={handleTaskSubmit}
        task={task}
        setTask={setTask}
      />

      <View style={styles.tasksGroup}>
        <View style={styles.tasksStatusGroup}>
          <View style={styles.tasksStatusBlock}>
            <Text style={styles.taskStatusText}>Criadas</Text>
            <View style={styles.taskStatusNumberBlock}>
              <Text style={styles.taskStatusNumber}>{tasks.length}</Text>
            </View>
          </View>
          <View style={styles.tasksStatusBlock}>
            <Text style={[styles.taskStatusText, styles.taskStatusTextDone]}>
              Concluídas
            </Text>
            <View style={styles.taskStatusNumberBlock}>
              <Text style={styles.taskStatusNumber}>
                {tasks.filter((task) => task.done).length}
              </Text>
            </View>
          </View>
        </View>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskCard
              description={item.description}
              done={item.done}
              onRemove={() => handleRemoveTask(item.id)}
              onComplete={() => handleCompleteTask(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<EmptyTasks />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
