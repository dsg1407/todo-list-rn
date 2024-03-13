import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 48,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    borderTopWidth: 1,
    borderColor: theme.colors.gray_400,
  },
  message: {
    textAlign: 'center',
    color: theme.colors.gray_300,
    fontFamily: theme.fonts.family.bold,
    fontWeight: 'bold',
    fontSize: theme.fonts.size.body.sm,
  },
  submessage: {
    fontFamily: theme.fonts.family.regular,
  },
})
