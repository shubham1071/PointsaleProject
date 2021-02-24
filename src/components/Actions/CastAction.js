export const getCast = (id,path) => ({
    type: "GET_CAST",
    id,
    path
});
export const setCast = (data) => ({
    type: "SET_CAST",
    data
});
