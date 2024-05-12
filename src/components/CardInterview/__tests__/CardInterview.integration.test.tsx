import { render, screen, waitFor } from '@testing-library/react';

import CardInterview from '../CardInterview';
import '@testing-library/jest-dom';
import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { fakeInterviewItem } from '@components/CardInterview/testsMock.data';

jest.mock('@network/api/api', () => ({
  getList: jest.fn(() =>
    Promise.resolve({
      interviews: [
        fakeInterviewItem,
        { ...fakeInterviewItem, id: '2', companyName: 'Сбер' },
      ],
      totalPages: 1,
    }),
  ),
}));

describe('CardInterview Блок с фильтрами, списком и пагинацией', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  it('отображаются все фильры', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CardInterview />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.getByLabelText(/компания/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/этап/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/статус/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/грейд/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /поиск/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /сбросить/i })).toBeInTheDocument();
    });
  });

  it('отображается лист с правильными данными после загрузки', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CardInterview />,
      </QueryClientProvider>,
    );
    await waitFor(() => {
      expect(screen.getByText(/газпром/i)).toBeInTheDocument();
      expect(screen.getByText(/сбер/i)).toBeInTheDocument();
    });
  });
  it('отображается пагинация', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CardInterview />,
      </QueryClientProvider>,
    );
    await waitFor(() => {
      expect(screen.getByLabelText(/pagination/i)).toBeInTheDocument();
      expect(screen.getByText(/элементов на страницу/i)).toBeInTheDocument();
    });
  });
  it('скриншотный тест', async () => {
    const component =  render(
      <QueryClientProvider client={queryClient}>
        <CardInterview />,
      </QueryClientProvider>,
    );
    await waitFor(() => {
      expect(screen.getByText(/газпром/i)).toBeInTheDocument();
      expect(component).toMatchSnapshot()
    });
  })
});
