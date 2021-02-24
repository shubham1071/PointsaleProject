const initialState = {
    currentCastData: [],
    castLoading:true,
};

const cast = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CAST":
            return { ...state, castLoading:false ,currentCastData:action.data};
        default:
            return state;
    }
}
export default cast;