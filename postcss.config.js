import postcssNesting      from 'postcss-nesting'
import postcssPresetEnv    from 'postcss-preset-env'
import autoprefixer        from 'autoprefixer'

export default {
  plugins: [
    postcssNesting,
    postcssPresetEnv({
      stage: 0,
      features: {
        'nesting-rules': true
      }
    }),
    autoprefixer
  ]
}