import CardInterviewPagination from '@components/CardInterview/CardInterviewPagination/CardInterviewPagination';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('CardInterviewPagination', () => {
  it('отображение всех элементов пагинации', () => {
    const component = render(
      <CardInterviewPagination
        pageSize={5}
        handleChangeRowsPerPage={() => {}}
        totalPages={10}
        currentPage={1}
        paginationArrayRowsPerPage={[1]}
        handleChangePage={() => {}}
      />,
    );
    expect(component.container.querySelector('[aria-labelledby="pagination-count"]')).toBeInTheDocument();
    expect(screen.getByText(/Элементов на страницу:/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/pagination/i)).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });
});
