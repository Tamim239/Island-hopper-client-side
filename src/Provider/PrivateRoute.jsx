import { Navigate, useLocation } from "react-router-dom";
import { UseAuth } from "../Hook/UseAuth";
import { InfinitySpin } from "react-loader-spinner";
import PropTypes from 'prop-types';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = UseAuth();

  if (loading) {
    return (
      <div className="flex justify-center h-96 items-center">
        <InfinitySpin visible={true} width="200" color="#4fa94d" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location?.pathname}></Navigate>;
};

PrivateRoute.propTypes ={
    children: PropTypes.node
}