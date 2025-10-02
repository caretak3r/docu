// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
    protegritySidebar: [
    {
      type: 'category',
      label: 'Protegrity Docs',
      items: [
        'protegrity-docs/index',
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'protegrity-docs/getting-started/prerequisites',
            'protegrity-docs/getting-started/installing-the-platform',
            'protegrity-docs/getting-started/installing-the-product',
          ],
        },
        {
          type: 'category',
          label: 'Kubernetes',
          items: [
            'protegrity-docs/kubernetes/overview',
            'protegrity-docs/kubernetes/helm-charts',
          ],
        },
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
