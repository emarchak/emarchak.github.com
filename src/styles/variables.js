export default {
  mediaQueries: {
    sml: '@media (max-width: 720px)',
    medUp: '@media (min-width: 721px)',
    bigUp: '@media (min-width: 961px)',
  },
  maxWidth: 960,
  fonts: {
    heading: `"Share Tech Mono", monospace`,
    body: `"Source Sans Pro", serif`,
  },
  colors: {
    primary: `hsla(343, 82%, 76%, 1)`,
    secondary: `hsla(360, 100%, 100%, 1)`,
    copy: `hsla(0, 0%, 12%, 1)`
  },
  boxShadow: `0 0 1rem 0.25rem hsla(343, 82%, 76%, 1)`,
  boxShadowDark: `0 0 1rem 0.25rem hsla(343, 41%, 76%, 1)`,
  padding: {
    basePadding: `1.45rem`,
    largePadding: `2.5rem`
  }
}