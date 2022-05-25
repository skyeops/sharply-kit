import components from './components';
import foundations from './foundations';
import variants from './variants';

const theme = {
  ...components,
  ...foundations,
  variants,
};

export * from './utils';
export type ITheme = typeof theme;
export default theme;
