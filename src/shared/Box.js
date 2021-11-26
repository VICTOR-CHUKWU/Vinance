/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
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
    return <Component prop={props}>{children}</Component>;
  }
  return createElement(as || 'div', {
    ...props,
    children,
  });
};

export default memo(Box);
