const { useLocation } = require('react-router-dom');

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const getQuery = (name = '') => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery().get(name);
};

export default useQuery;
