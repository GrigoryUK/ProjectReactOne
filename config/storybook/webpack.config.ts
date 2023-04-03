import path from 'path'

import webpack, { DefinePlugin, RuleSetRule } from 'webpack'

import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'
import { BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    buildLocales: '',
    locales: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  config.resolve!.modules!.unshift(paths.src)
  config.resolve!.extensions!.push('.ts', '.tsx')
  config.resolve!.alias = {
    ...config!.resolve!.alias,
    '@': paths.src
  }

  const rules = config.module!.rules as RuleSetRule[]
  config.module!.rules = rules.map((rule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })
  config.module!.rules.push(buildSvgLoader(true))
  config.module!.rules.push(buildCssLoader(true))
  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: true,
    __API__: JSON.stringify('https://testapi.ru'),
    __PROJECT__: JSON.stringify('storybook')
  }))
  return config
}
