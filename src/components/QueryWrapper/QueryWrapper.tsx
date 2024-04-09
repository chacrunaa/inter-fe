import { ReactNode } from 'react';

import Loading from '../Loading';

const QueryWrapper = ({
  isLoading,
  error,
  isPreviousData,
  children,
}: {
  isLoading: boolean;
  error: unknown;
  isPreviousData?: boolean;
  children?: ReactNode;
}) => {
  return (
    <>
      {error && console.warn(error)}
      {(isLoading || (!isLoading && isPreviousData)) && <Loading />}
      {((!error && !isLoading && !isPreviousData) || isPreviousData) && children}
    </>
  );
};

export default QueryWrapper;
