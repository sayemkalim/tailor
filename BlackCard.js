import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BlackCard = ({ title, content, width, height }) => {
  return (
    <View style={[styles.card, { width, height }]}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundGradient: 'linear-gradient(to bottom right, #000, #444)',
  },
  cardContent: {
    padding: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
  },
});

export default BlackCard;
