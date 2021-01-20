import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import multiInput from 'rollup-plugin-multi-input'
import tsc from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import del from 'rollup-plugin-delete'
import { DEFAULT_EXTENSIONS } from '@babel/core'

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx']
const srcPath = 'src/lib'
const targetPath = 'build'

const input = [`${srcPath}/**/*`]

export default {
    input,
    output: {
        dir: targetPath
    },
    plugins: [
        del({ targets: targetPath }),
        multiInput({ relative: srcPath }),
        postcss({ minimize: true }),
        tsc({ tsconfigOverride: { include: input }, outDir: targetPath }),
        babel({
            babelHelpers: 'runtime',
            extensions
        }),
        terser({ format: { comments: false } })
    ]
}
