import { ProgressBar } from 'react-loader-spinner';
import { Backdrop } from './Loader.styled';

const Loader = () => {
  return (
    <Backdrop>
      <ProgressBar
        height="120"
        width="120"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#d7d7d7d7"
        barColor="#e2580a"
      />
    </Backdrop>
  );
};
export default Loader;
