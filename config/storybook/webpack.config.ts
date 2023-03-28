import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import { BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'

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
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook')
  }))
  return config
}
