import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { render } from '@testing-library/react';
import { AppWrapper } from '../../context/ThemeContext';
import Menu from '../Menu';

describe('Menu section', () => {
  it('should show menu items', () => {
    const { queryByText } = render(<Menu username='Quang' />);
    const skillOption = queryByText('Skill');
    const historyOption = queryByText('History');
    const projectOption = queryByText('Project');
    const contactOption = queryByText('Contact');
    const colorModeToggle = queryByText('Color mode');

    expect(skillOption).toBeInTheDocument();
    expect(historyOption).toBeInTheDocument();
    expect(projectOption).toBeInTheDocument();
    expect(contactOption).toBeInTheDocument();
    expect(colorModeToggle).toBeInTheDocument();
  });

  it('should show light icon for Light Mode', () => {
    const { queryByTestId } = render(<AppWrapper><Menu username='Quang' /></AppWrapper>);
    const lightIcon = queryByTestId('light-icon');
    expect(lightIcon).toBeInTheDocument();
  });

  it('should show dark icon for Dark Mode', () => {
    const { queryByTestId } = render(
      <AppWrapper darkMode={true}>
        <Menu username='Quang' />
      </AppWrapper>
    );
    const darkIcon = queryByTestId('dark-icon');
    expect(darkIcon).toBeInTheDocument();
  });
});
