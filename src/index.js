import jQuery from "jquery";
import _ from "lodash";
import {a} from "@/script/app";
import "@/style/index.less";
import "@/index.css";

jQuery(function () {
    console.log(123);
})

jQuery.ajax({
    url:"http://127.0.0.1:3000/api/abc"
})

jQuery.ajax({
    url:"http://127.0.0.1:3000/api1/abc1"
})

console.log(_);
console.log(a);
console.log("process.env.NODE_ENV:",process.env.NODE_ENV);

///12341564a21sd5asd123a456a45sd12324das65d6a
//123456123544512385455