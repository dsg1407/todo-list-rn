import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray_500,
    borderColor: theme.colors.gray_400,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 8,
  },
  taskBlock: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    maxWidth: '85%',
  },
  checkMenu: {
    width: 18,
    height: 18,
    margin: 3,
    borderWidth: 2,
    borderRadius: 999,
    borderColor: theme.colors.blue,
  },
  checked: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.purple_dark,
    borderColor: theme.colors.purple_dark,
  },
  taskDescription: {
    color: theme.colors.gray_100,
    textAlign: 'left',
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.regular,
    flex: 1,
  },
  taskDone: {
    color: theme.colors.gray_300,
    textDecorationLine: 'line-through',
  },
  trashButton: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
