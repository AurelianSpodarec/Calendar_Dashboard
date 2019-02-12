const createAction = type => value => {
    return {
      type,
      value
    };
  };
  
export default createAction;