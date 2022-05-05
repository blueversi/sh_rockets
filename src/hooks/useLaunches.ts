import { useQuery, gql } from '@apollo/client';

const LAUNCHES_QUERY = gql`
  query GetLaunches($offset: Int, $limit: Int) {
    launches(offset: $offset, limit: $limit) {
      mission_name
      id
    }
  }
`;

export const useLaunches = (offset: number, limit: number) => {
  const { data, loading, error, fetchMore } = useQuery(LAUNCHES_QUERY, {
    variables: {
      offset: offset,
      limit: limit,
    },
  });

  return {
    error,
    data,
    loading,
    fetchMore,
  };
};
