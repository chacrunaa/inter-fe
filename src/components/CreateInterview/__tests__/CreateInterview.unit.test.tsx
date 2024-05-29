import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import CreateInterview from '../CreateInterview';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuthStore } from '@stores/useGlobalStore';
import { useMutation } from '@tanstack/react-query';

jest.mock('@stores/useGlobalStore');
jest.mock('@tanstack/react-query');

describe('CreateInterview', () => {
  const token = 'test-token';
  const mockMutate = jest.fn();

  beforeEach(() => {
    (useAuthStore as unknown as jest.Mock).mockReturnValue({ token });
    (useMutation as jest.Mock).mockReturnValue({ mutate: mockMutate });
    jest.clearAllMocks();
  });

  it('рендер всей формы', async () => {
    await act(async () => {
      render(
        <Router>
          <CreateInterview />
        </Router>,
      );
    });

    expect(screen.getByText(/Как правильно заполнять форму\?/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Отмена/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Сохранить черновик/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Создать/i })).toBeInTheDocument();
  });

  it('должна обрабатывать кнопка Отмена', async () => {
    await act(async () => {
      render(
        <Router>
          <CreateInterview />
        </Router>,
      );
    });

    const cancelButton = screen.getByRole('button', { name: /Отмена/i });

    fireEvent.click(cancelButton);
    expect(window.location.pathname).toBe('/');
  });
});
