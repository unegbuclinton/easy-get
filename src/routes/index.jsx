import { AnimatePresence } from 'framer-motion';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routePaths';

const Routing = () => {
  const location = useLocation();
  function PrivateRoute() {
    const isAuthenticated = true;
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  }
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {privateRoutes.map((route, index) => {
          if (route.children) {
            const Children = () => {
              return (
                <Routes>
                  {route?.children?.map((child, index) => {
                    return (
                      <Route key={`${index}-xxx`} element={<PrivateRoute />}>
                        <Route
                          path={child.path}
                          key={`${index}-sss`}
                          index={child.index}
                          element={child.element}
                        />
                      </Route>
                    );
                  })}
                </Routes>
              );
            };

            return (
              <Route
                key={`${index}-yyy`}
                path={route.path}
                element={<Children />}
              />
            );
          }

          return (
            <Route key={`${index}-xxx`} element={<PrivateRoute />}>
              <Route
                key={Math.random()}
                path={route.path}
                element={route.element}
              />
            </Route>
          );
        })}

        {publicRoutes.map((publicRoute) => {
          if (publicRoute.children) {
            const Children = () => {
              return (
                <Routes>
                  {publicRoute?.children?.map((child, index) => {
                    return (
                      <Route
                        path={child.path}
                        key={index}
                        index={child.index}
                        element={child.element}
                      />
                    );
                  })}
                </Routes>
              );
            };
            return (
              <Route
                key={Math.random()}
                path={publicRoute.path}
                element={<Children />}
              />
            );
          }

          return (
            <Route
              key={Math.random()}
              path={publicRoute.path}
              element={publicRoute.element}
            />
          );
        })}
      </Routes>
    </AnimatePresence>
  );
};

export default Routing;
