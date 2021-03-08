
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native';

interface ScreenContainerProps {

}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({children}) => {
    return (
      <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[
        styles.contentContainer,
        {
          backgroundColor: "white"
        },
      ]}
      style={{
        flex: 1,
        backgroundColor: "white" }}
    >
      {children}
    </ScrollView>
    );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "white",
    paddingHorizontal: 14,
    flexGrow: 1
  }
})