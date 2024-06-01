import '@testing-library/jest-dom';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
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
        </Router>
      );
    });

    expect(screen.getByText(/Как правильно заполнять форму\?/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Отмена/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Сохранить черновик/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Создать/i })).toBeInTheDocument();
  });

  it('отправка формы с правильными данными', async () => {
    await act(async () => {
      render(
        <Router>
          <CreateInterview />
        </Router>
      );
    });

    fireEvent.change(screen.getByLabelText(/Компания/i), { target: { value: 'Test Company' } });
    fireEvent.change(screen.getByLabelText(/Заголовок статьи/i), { target: { value: 'Test Title' } });
    fireEvent.change(screen.getByLabelText(/Описание статьи/i), { target: { value: '<p>Test Description</p>' } });
    fireEvent.change(screen.getByLabelText(/Грейд/i), { target: { value: 'junior' } });
    fireEvent.change(screen.getByLabelText(/Ссылка/i), { target: { value: 'https://hh.ru/vacancy/98863179' } });
    fireEvent.change(screen.getByLabelText(/Статус/i), { target: { value: 'successful' } });
    fireEvent.change(screen.getByLabelText(/Этап/i), { target: { value: 'livecoding' } });
    fireEvent.change(screen.getByLabelText(/Формат работы/i), { target: { value: 'remote' } });
    fireEvent.change(screen.getByLabelText(/Минимальная зарплата/i), { target: { value: '0' } });
    fireEvent.change(screen.getByLabelText(/Максимальная зарплата/i), { target: { value: '500000' } });

    const submitButton = screen.getByRole('button', { name: /Создать/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith({
        companyName: 'Test Company',
        articleTitle: 'Test Title',
        articleDescription: '<p>Test Description</p>',
        formatjob: ["remote"],
        grade: ["junior"],
        linkjob: "https://hh.ru/vacancy/98863179",
        status: ["successful"],
        maxoffer: 0,
        minoffer: 500000,
        stage: ["livecoding"],
      });
    });
  });

  it('должна обрабатывать кнопка Отмена', async () => {
    await act(async () => {
      render(
        <Router>
          <CreateInterview />
        </Router>
      );
    });

    const cancelButton = screen.getByRole('button', { name: /Отмена/i });

    fireEvent.click(cancelButton);
    expect(window.location.pathname).toBe('/');
  });
});
