import { spawn } from "redux-saga/effects";

import todoSaga from "./todo-saga";

export default function*rootSaga(){
    console.log("hi")

    yield spawn (todoSaga)
}