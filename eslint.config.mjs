import nextPlugin from 'eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';

export default [
  {
    plugins: {
      next: nextPlugin,
      react: reactPlugin,
      'react-hooks': hooksPlugin
    },
    extends: [
      nextPlugin.configs['recommended'],
      reactPlugin.configs['recommended'],
      hooksPlugin.configs['recommended']
    ],
    rules: {
      // Add any custom rules here
    }
  }
];
