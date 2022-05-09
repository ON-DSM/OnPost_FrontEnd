import { ThemeProvider, Global } from '@emotion/react';
import theme from './theme';
import global from './global';

interface PropsType {
  children: React.ReactNode;
}

const StyleProvider: React.FC<PropsType> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
