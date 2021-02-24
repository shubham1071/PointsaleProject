import { all, call, put, takeLatest } from "redux-saga/effects";
import { setCast } from "../../components/Actions/CastAction";
import { requestGetCast } from "../requests/castRequest";

function* handleGetCast(action) {
    try {
        const response = yield call(()=>requestGetCast(action.id,action.path));
        const { data } = response;
        yield put(setCast(data));
    } catch (error) {
        console.log(error);
    }
}
export function* handleCastWatcher() {
    yield all([
        yield takeLatest('GET_CAST', handleGetCast),
    ]);
}