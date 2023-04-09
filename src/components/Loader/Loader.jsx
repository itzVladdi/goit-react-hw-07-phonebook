import { BallTriangle } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/selectors';

export function Loader() {
  const isloading = useSelector(getIsLoading);
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="black"
      ariaLabel="ball-triangle-loading"
      wrapperClass="loader-wrapper"
      visible={isloading}
    />
  );
}
