// import React from 'react';
import { Example } from ".";

const page = {
  title: "Example Component",
  component: Example,
  argTypes: {
    textColor: { control: "color" },
  },
};
export default page;

// //👇 Aqui nós podemos criar um  “template” de como os argumentos serão mapeados para renderizar
const Template = (args) => <Example {...args} />;

// //👇 Cada História reusará o template
export const WhiteColoredExample = Template.bind({});
WhiteColoredExample.args = { textColor: "#FFF" };

export const BlackColoredExample = Template.bind({});
BlackColoredExample.args = { textColor: "#000" };

// Se quiser aprender como escrever histórias: https://storybook.js.org/docs/react/writing-stories/introduction
