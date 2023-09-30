import {Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Row({person}) {
  return (
      <Text style={styles.row}>{person.lastname}, {person.firstname}</Text>
    )
}

const styles = StyleSheet.create({
    row: {
      marginTop:8,
      marginBottom:8,
      marginLeft:4
    }
  });