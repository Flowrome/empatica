import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import alias from 'rollup-plugin-alias';
import outputTargets from './stencil.config.output-targets.json';

const baseUrl = process.argv.indexOf('--prerender') > -1 ? 'https://empatica.herokuapp.com/' : '/';

const outputTargetsParsed = [
  {
    type: 'dist',
    esmLoaderPath: '../loader',
    copy: [
      {
        src: require('path').resolve('./src/assets/fonts'),
        dest: require('path').resolve('./dist/assets/fonts')
      },
      {
        src: require('path').resolve('./src/assets/images'),
        dest: require('path').resolve('./dist/assets/images')
      }
    ]
  },
  {
    type: 'docs-readme'
  },
  {
    baseUrl: baseUrl,
    type: 'www',
    serviceWorker: null // disable service workers
  }
].filter((target: any) => outputTargets.indexOf(target.type) > -1 && target);

export const config: Config = {
  namespace: 'empatica-frontend',
  outputTargets: outputTargetsParsed as any,
  globalStyle: 'src/styles/_styles.scss', // THIS ONE WILL BE EXPORTED IN empatica-frontend.css
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/_local-styles.scss' // THIS ONE WILL BE INJECTED INSIDE THE COMPONENTS
      ]
    }),
    postcss({
      plugins: [autoprefixer()]
    }),
    alias({
      resolve: ['.jsx', '.js', '.tsx', '.ts'],
      // ROLLUP ALIAS SUPPORT ONLY THE ALIASES FOR FILES (NOT FOR FOLDERS)
      '@env': 'src/envs/env.ts'
    })
  ]
};
