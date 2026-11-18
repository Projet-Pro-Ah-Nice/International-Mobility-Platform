import { render, screen } from '@testing-library/react-native';

import { ThemedText } from '@/components/themed-text';

describe('ThemedText', () => {
  it('renders its children', async () => {
    await render(<ThemedText>Hello mobility</ThemedText>);
    expect(screen.getByText('Hello mobility')).toBeTruthy();
  });

  it('applies the title style', async () => {
    await render(<ThemedText type="title">Title</ThemedText>);
    expect(screen.getByText('Title')).toHaveStyle({ fontSize: 48 });
  });
});
