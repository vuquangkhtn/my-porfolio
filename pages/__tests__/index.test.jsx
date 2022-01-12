import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import HomePage from '../index';
import { AppWrapper } from '../../context/ThemeContext';

describe('Home page', () => {
  it('should add .dark-mode className into body when the Dark Mode enable', () => {
    render(<AppWrapper darkMode><HomePage user={{}} /></AppWrapper>);
    const bodyDOM = document.querySelector('body');
    expect(bodyDOM.classList).toContain('dark-mode');
  });

  it('should remove .dark-mode className from body when the Light Mode enable', () => {
    render(<AppWrapper><HomePage user={{}} /></AppWrapper>);
    const bodyDOM = document.querySelector('body');
    expect(bodyDOM.classList).not.toContain('dark-mode');
  });

  it('should show Error page when err returned', () => {
    const { queryByText } = render(<HomePage err={{ message: 'Error' }} />);
    expect(queryByText('We’ll be back soon!')).toBeInTheDocument();
  });
});
