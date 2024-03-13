import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  taskInputGroup: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    width: '100%',
    transform: [{ translateY: -25 }],
  },
  taskInput: {
    flex: 1,
    padding: 16,
    borderRadius: 6,
    backgroundColor: theme.colors.gray_500,
    borderColor: theme.colors.gray_700,
    color: theme.colors.gray_100,
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.regular,
  },
  taskInputButton: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blue_dark,
    borderRadius: 6,
  },
})
