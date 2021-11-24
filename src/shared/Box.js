/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import {
  useState, useEffect, memo, createElement,
} from 'react';

const Box = ({
  as, children, component, dynamic, ...props
}) => {
  const Component = component;
  const [rendered, setRendered] = useState(!dynamic);

  useEffect(() => {
    setRendered(true);
  }, []);
  if (dynamic && !rendered) return <></>;

  if (Component) {
    return <Component {...props}>{children}</Component>;
  }
  return createElement(as || 'div', {
    ...props,
    children,
  });
};

export default memo(Box);
