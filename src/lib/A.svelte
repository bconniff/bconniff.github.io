<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  let className = '';
  export { className as class };
  export let inverse = false;
  export let href;
  export let target = '_self';

  const classes = [
    inverse ? 'text-sky-100' : 'text-sky-700 dark:text-sky-300',
    inverse ? 'hover:text-sky-300' : 'hover:text-sky-500 dark:hover:text-sky-100',
    'hover:underline',
    'transition-colors',
    'duration-500',
    'print:text-gray-800',
    'print:italic',
  ];

  if (className) {
    classes.push(className);
  }

  const classList = classes.join(' ');
</script>

<a class={classList} {href} {target}>
  <slot />
</a>
