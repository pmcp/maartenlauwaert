// ? HINT: I'm using dynamic classes for the grid start / end / span, but that makes tailwind not pick it up. So whitelisting
// ? https://tailwindcss.com/docs/controlling-file-size#writing-purgeable-html
// ? https://tailwindcss.com/docs/grid-column
// TODO: Can this be done better?

module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.html',
    './src/**/*.pug',
    './src/**/*.md',
    './src/**/*.md',
  ],

  whitelist: [
    'body',
    'html',
    'img',
    'a',
    'g-image',
    'g-image--lazy',
    'g-image--loaded',
    'col-start-auto',
    'col-auto',
    'col-span-full',
    'col-start-auto',
    'col-end-auto',
    'col-end-1',
    'col-start-1',
    'col-span-1',
    'col-end-2',
    'col-start-2',
    'col-span-2',
    'col-end-3',
    'col-start-3',
    'col-span-3',
    'col-end-4',
    'col-start-4',
    'col-span-4',
    'col-end-5',
    'col-start-5',
    'col-span-5',
    'col-end-6',
    'col-start-6',
    'col-span-6',
    'col-end-7',
    'col-start-7',
    'col-span-7',
    'col-end-8',
    'col-start-8',
    'col-span-8',
    'col-end-9',
    'col-start-9',
    'col-span-9',
    'col-end-10',
    'col-start-10',
    'col-span-10',
    'col-end-11',
    'col-start-11',
    'col-span-11',
    'col-end-12',
    'col-start-12',
    'col-span-12',
    'col-end-13',
    'col-start-13',
    'col-span-13'
  ],
  extractors: [
    {
      extractor: content => content.match(/[A-z0-9-:\\/]+/g),
      extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
    },
  ],
}