import { useLaunches } from '../hooks/useLaunches';
import { Waypoint } from 'react-waypoint';
import Loading from '../components/Loading';
import ErrorDisplay from '../components/ErrorDisplay';

const Launches = () => {
  const { error, loading, data, fetchMore } = useLaunches(0, 30);

  const handleFetchMore = () => {
    fetchMore({
      variables: {
        offset: data.launches.length,
      },
    });
  };

  if (loading) return <Loading />;

  if (error) return <ErrorDisplay message={error.message} />;

  return (
    <>
      <div>
        {data.launches.map((launch: any) => (
          <div key={launch.id}>
            <a href={`https://spacex.land/launches/${launch.id}`}>
              Name: {launch.mission_name}
            </a>
          </div>
        ))}
      </div>
      <Waypoint onEnter={handleFetchMore} />
    </>
  );
};

export default Launches;
