import { mount } from 'instructionalDesign/InstructionalDesignApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const InstructionalDesignApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current);

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default InstructionalDesignApp;
