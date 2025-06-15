import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <>
      <h1>Admin layout</h1>
      <Outlet />
    </>
  );
};

export default AdminLayout;
