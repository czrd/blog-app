export const thunkCreator = action => {
  const { ...rest, types, promise} = action;
  const [REQUESTED, RESOLVED, REJECTED] = types;

  return dispatch => {
    dispatch({ type: REQUESTED, ...rest });
    return promise
      .then(result => {
        if (result.error) throw new Error(result.error);
        dispatch({ type: RESOLVED, result });
        return result;
      })
      .catch(error => {
        dispatch({ ...rest, type: REJECTED, error });
        throw error
      });
  };
};
