import http from "k6/http";
import { BaseUrl, getRandomAccount } from "./config.js";
import { check } from "k6";
import { parseHTML } from "k6/html";

export default function () {
  const [Username, Password] = getRandomAccount();
  const loginRes = http.post(`${BaseUrl}/login`, {
    account_name: Username,
    password: Password,
  });
  check(loginRes, {
    "successfully logged in": (r) => r.status === 200,
  });
  
  // ( 詳しくはapp.js側で処理参照 )
  const doc = parseHTML(loginRes.body);
  const csrf_token = doc.find('input[name=csrf_token]').first().attr('value')
  const post_id = doc.find('input[name=post_id]').first().attr('value')
  
  const comment_res = http.post(`${BaseUrl}/comment`, {
    post_id,
    csrf_token,
    comment: "Hello, k6!",
  });

  // check でステータスコードが 200(成功レスポンス) であることを確認する
  check(comment_res, {
    "successfully commented": (r) => r.status === 200,
  });
}