import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import packageJson from './package.json' assert { type: 'json' };
import eslint from '@rollup/plugin-eslint';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'module',
        sourcemap: true,
        strict: false,
      },
    ],
    plugins: [
      resolve(),
      babel({ babelHelpers: 'bundled' }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      eslint({
        throwOnError: true,
        throwOnWarning: true,
        include: ['src/**/*.ts', 'src/**/*.tsx'],
        exclude: ['node_modules/**', 'dist/**'],
      }),
    ],
    external: ['react'],
  },
];
