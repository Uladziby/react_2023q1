/** @format */
import notfound from '../../assets/404.png';

const mystyle = {
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  flex: 1,
};

const NotFoundPage = () => {
  return (
    <div style={mystyle}>
      <img src={`${notfound}`} alt="notfound" width={500} />
    </div>
  );
};

export default NotFoundPage;
