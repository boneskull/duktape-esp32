/*
 *  Test float assignment and reading it back.
 */

/*@include util-buffer.js@*/
/*@include util-string.js@*/

/*---
{
    "custom": true
}
---*/

/* Custom because there are a few numconv issues. */

/*===
float double test
0 -Infinity -Infinity
1 -9007199254740994 -9007199254740992
2 -9007199254740994 -9007199254740992
3 -9007199254740992 -9007199254740992
4 -9007199254740991 -9007199254740992
5 -9007199254740990 -9007199254740992
6 -4294967298 -4294967296
7 -4294967297 -4294967296
8 -4294967296 -4294967296
9 -4294967295 -4294967296
10 -4294967294 -4294967296
11 -16777218 -16777218
12 -16777217 -16777216
13 -16777216 -16777216
14 -16777215 -16777215
15 -16777214 -16777214
16 -1 -1
17 -0 -0
18 0 0
19 1 1
20 16777214 16777214
21 16777215 16777215
22 16777216 16777216
23 16777217 16777216
24 16777218 16777218
25 4294967294 4294967296
26 4294967295 4294967296
27 4294967296 4294967296
28 4294967297 4294967296
29 4294967298 4294967296
30 9007199254740990 9007199254740992
31 9007199254740991 9007199254740992
32 9007199254740992 9007199254740992
33 9007199254740994 9007199254740992
34 9007199254740994 9007199254740992
35 Infinity Infinity
36 NaN NaN
===*/

function floatDoubleTest() {
    var v1 = new Float32Array(4);
    var values = [
        Number.NEGATIVE_INFINITY,
        -9007199254740994,   // -(2^53 + 2)
        -9007199254740993,   // -(2^53 + 1)
        -9007199254740992,   // -2^53 (ieee double integer limit)
        -9007199254740991,   // -(2^53 - 1)
        -9007199254740990,   // -(2^53 - 2)
        -4294967298,         // -(2^32 + 2)
        -4294967297,         // -(2^32 + 1)
        -4294967296,         // -2^32
        -4294967295,         // -(2^32 - 1)
        -4294967294,         // -(2^32 - 2)
        -16777218,           // -(2^42 + 2)
        -16777217,           // -(2^42 + 1)
        -16777216,           // -2^24 (ieee float integer limit)
        -16777215,           // -(2^42 - 1)
        -16777214,           // -(2^42 - 1)
        -1,
        -0,
        0,
        1,
        16777214,
        16777215,
        16777216,
        16777217,
        16777218,
        4294967294,
        4294967295,
        4294967296,
        4294967297,
        4294967298,
        9007199254740990,
        9007199254740991,
        9007199254740992,
        9007199254740993,
        9007199254740994,
        Number.POSITIVE_INFINITY,
        0 / 0   // NaN
    ];

    values.forEach(function (v, i) {
        v1[0] = v;
        print(i, numberToString(v), numberToString(v1[0]));
    });
}

try {
    print('float double test');
    floatDoubleTest();
} catch (e) {
    print(e.stack || e);
}