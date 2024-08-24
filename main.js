/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    var [u1, v1] = edges[0];
    var [u2, v2] = edges[1];

    if (u1 === u2 || u1 === v2) {
        return u1;
    } else {
        return v1;
    }
};


