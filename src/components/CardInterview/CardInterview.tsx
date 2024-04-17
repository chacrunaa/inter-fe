import { Pagination } from 'react-bootstrap';
import { getList } from '@network/api/api';
import { useQuery } from '@tanstack/react-query';

import CardInterviewList from './CardInterviewList/CardInterviewList';

const CardInterview = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['interviews'],
        queryFn: () => getList('interviews'),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    const interviews = data?.interviews;
    const totalPages = data?.totalPages;

    return (
        <>
            <CardInterviewList data={interviews} />
            <Pagination>{totalPages} Хуев во рту</Pagination>
        </>
    );
};

export default CardInterview;
