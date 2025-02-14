import React from 'react';
import ThemedText from '../ThemedText';
import ThemedView from '../ThemedView';

const Navbar: React.FC = () => {
  return (
    <ThemedView>
      <ThemedText>Hello, World!</ThemedText>
    </ThemedView>
  );
};

export default Navbar;