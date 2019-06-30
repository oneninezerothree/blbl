export default {

  namespace: 'dismodl',

  state: {
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload
      };
    },
  },

};
