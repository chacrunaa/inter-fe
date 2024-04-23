import { useCallback } from 'react';
import { Col, Form, Pagination, Row } from 'react-bootstrap';
import QueryWrapper from '@components/QueryWrapper';
import { getList } from '@network/api/api';
import { useIterwievStore } from '@stores/useGlobalStore';
import { useQuery } from '@tanstack/react-query';

import CardInterviewList from './CardInterviewList/CardInterviewList';

const CardInterview = () => {
  const pageSize = useIterwievStore(s => s.pageSize);
  const setPageSize = useIterwievStore(s => s.setPageSize);
  const currentPage = useIterwievStore(s => s.currentPage);
  const setCurrentPage = useIterwievStore(s => s.setCurrentPage);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['interviews', currentPage, pageSize],
    queryFn: () => getList('interviews', { page: currentPage, pageSize }),
  });

  const interviews = data?.interviews;
  const totalPages = data?.totalPages;

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      setCurrentPage(pageNumber);
    },
    [setCurrentPage],
  );

  const handlePageSizeChange = useCallback(
    (event: { target: { value: string } }) => {
      setPageSize(Number(event.target.value));
      setCurrentPage(1);
    },
    [setCurrentPage, setPageSize],
  );

  const paginationItems =
    totalPages &&
    Array?.from({ length: totalPages }, (_, index) => (
      <Pagination.Item
        key={index + 1}
        active={index + 1 === currentPage}
        onClick={() => handlePageChange(index + 1)}
      >
        {index + 1}
      </Pagination.Item>
    ));

  return (
    <QueryWrapper isLoading={isLoading} error={isError}>
      <CardInterviewList data={interviews} />
      <Row className="my-3">
        <Col className="d-flex justify-content-between align-items-center">
          <div className="mr-2">Элементов на страницу:</div>
          <div className="d-flex align-items-center">
            <Form.Control
              as="select"
              value={pageSize}
              onChange={handlePageSizeChange}
              className="mr-2"
            >
              {[5, 10, 15, 20].map(size => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Form.Control>
          </div>
          <Pagination className="flex-wrap">{paginationItems}</Pagination>
        </Col>
      </Row>
    </QueryWrapper>
  );
};

export default CardInterview;
