import React, { useState } from 'react';
import { Pagination, Form, Row, Col } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import QueryWrapper from '@components/QueryWrapper';
import CardInterviewList from './CardInterviewList/CardInterviewList';
import { getList } from '@network/api/api';

const CardInterview = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['interviews', currentPage, pageSize],
    queryFn: () => getList('interviews', { page: currentPage, pageSize }),
  });

  const interviews = data?.data.interviews;
  const totalPages = data?.data.totalPages;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
    setCurrentPage(1);
  };

  const paginationItems = Array.from({ length: totalPages }, (_, index) => (
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
            <Form.Control as="select" value={pageSize} onChange={handlePageSizeChange} className="mr-2">
              {[5, 10, 15, 20].map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </Form.Control>
          </div>
          <Pagination className="flex-wrap">
            {paginationItems}
          </Pagination>
        </Col>
      </Row>
    </QueryWrapper>

  );
};

export default CardInterview;
