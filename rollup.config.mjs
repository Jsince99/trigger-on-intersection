import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import packageJson from './package.json' assert { type: 'json' };
import eslint from '@rollup/plugin-eslint';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      eslint({
        throwOnError: true,
        throwOnWarning: true,
        include: ['src/**/*.ts', 'src/**/*.tsx'],
        exclude: ['node_modules/**', 'dist/**'],
      }),
    ],
  },
];
