import '@testing-library/jest-dom';

import CardInterviewItem, {
  Props,
} from '@components/CardInterview/CardInterviewItem/CardInterviewItem';
import { fakeInterviewItem } from '@components/CardInterview/testsMock.data';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Тестирование CardInterviewItem', () => {
  let mockPropsForCardItem = {} as Props;

  beforeEach(() => {
    mockPropsForCardItem = fakeInterviewItem;
  });

  it('рендеринг компонента с полными данными', () => {
    render(<CardInterviewItem {...mockPropsForCardItem} />);
    expect(screen.getByText(mockPropsForCardItem.companyName)).toBeInTheDocument();
    expect(screen.getByText(/в процессе/i)).toBeInTheDocument();
    expect(screen.getByText(/знакомство/i)).toBeInTheDocument();
    expect(screen.getByText(/опытный специалист/i)).toBeInTheDocument();
    expect(screen.getByText(/10 000 - 10 000/)).toBeInTheDocument();
    expect(screen.getByText(/₽/)).toBeInTheDocument();
    expect(screen.getByText(/подробнее/i)).toBeInTheDocument();
    expect(screen.getByText(/Грейд/i)).toBeInTheDocument();
    expect(screen.getByText(/Этап/i)).toBeInTheDocument();
    expect(screen.getByText(/Автор/)).toBeInTheDocument();
  });
  it('рендеринг компонента с отсутствующим articleDescription', () => {
    //@ts-ignore
    mockPropsForCardItem.articleDescription = null;
    render(<CardInterviewItem {...mockPropsForCardItem} />);
    expect(screen.queryByText('Я ему одно, он мне другое, так и живём')).toBeNull();
  });
  it('снэпшот с полными данными', () => {
    const card = render(<CardInterviewItem {...mockPropsForCardItem} />);
    expect(card).toMatchSnapshot();
  });
  it('снэпшот с отсутствующим articleDescription', () => {
    //@ts-ignore
    mockPropsForCardItem.articleDescription = null;
    const card = render(<CardInterviewItem {...mockPropsForCardItem} />);
    expect(card).toMatchSnapshot();
  });
  it('проверка значения ссылки', () => {
    render(
      <MemoryRouter>
        <CardInterviewItem {...mockPropsForCardItem} />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /подробнее/i });

    expect(link).toHaveAttribute('href', `/interwiev/${mockPropsForCardItem.id}`);
  });
});
