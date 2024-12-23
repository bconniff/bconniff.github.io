<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  let className = '';
  export { className as class };
  export let inverse = false;
  export let href;

  const classes = [
    inverse ? 'text-white' : 'text-sky-700',
    inverse ? 'hover:text-sky-300' : 'hover:text-sky-500',
    'hover:underline',
    'transition-colors',
    'duration-500',
  ];

  if (className) {
    classes.push(className);
  }

  const classList = classes.join(' ');
</script>

<a class={classList} href={href}>
  <slot />
</a>
