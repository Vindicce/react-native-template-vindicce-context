import React from 'react';
import IHome from './data';
import Layout from './Layout';

export default function Home(props: IHome) {
  const data = {
    TEXT1: 'yarn g',
    TEXT2: ', to generate components',
    TEXT3: "• View, to create Views(Container's)",
    TEXT4: '• Components, for the creation of components.',
    TEXT5: '• Hooks, to create a new Hooks.',
    TEXT6: '• Flow, to create a new application flow.',
    TEXT7: '• Factory, to create a factory',
    TEXT8: '• Interface, to create global interfaces',
  };

  return <Layout {...props} data={data} />;
}
