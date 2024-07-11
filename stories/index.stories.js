import "../src/index.ts";
import {html} from 'lit';

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () => html`<my-counter></my-counter>`;
