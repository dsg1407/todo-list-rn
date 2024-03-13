import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.gray_600,
  },
  header: {
    height: 173,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.gray_700,
  },
  tasksGroup: {
    width: '100%',
    paddingHorizontal: 24,
    paddingBottom: 24,
    flex: 1,
    gap: 20,
  },
  tasksStatusGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tasksStatusBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  taskStatusText: {
    color: theme.colors.blue,
    fontFamily: theme.fonts.family.bold,
    fontWeight: 'bold',
    fontSize: theme.fonts.size.body.sm,
  },
  taskStatusTextDone: {
    color: theme.colors.purple_dark,
  },
  taskStatusNumberBlock: {
    backgroundColor: theme.colors.gray_400,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  taskStatusNumber: {
    color: theme.colors.gray_200,
    fontWeight: 'bold',
    fontSize: theme.fonts.size.body.sm,
  },
})
