(function (root, name, factory) {
  try { return module.exports = factory(); } catch(e) {}
  try { return define         ( factory ); } catch(e) {}
  try { return root[name]     = factory(); } catch(e) {}
})(this, 'mat4', function () { 'use strict';
  var mat4 = {};

  mat4.array = Float32Array || Array;
  mat4.buffer = new mat4.array(16);

  mat4.get = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    return mat4.set(new mat4.array(16), a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p);
  };

  mat4.set = function (out, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    if(!out) out = new mat4.array(16);
    if(typeof a === 'undefined') {
      out[ 0] = 1; out[ 1] = 0; out[ 2] = 0; out[ 3] = 0;
      out[ 4] = 0; out[ 5] = 1; out[ 6] = 0; out[ 7] = 0;
      out[ 8] = 0; out[ 9] = 0; out[10] = 1; out[11] = 0;
      out[12] = 0; out[13] = 0; out[14] = 0; out[15] = 1;
    } else if(typeof a !== 'object') {
      out[ 0] = a; out[ 1] = b; out[ 2] = c; out[ 3] = d;
      out[ 4] = e; out[ 5] = f; out[ 6] = g; out[ 7] = h;
      out[ 8] = i; out[ 9] = j; out[10] = k; out[11] = l;
      out[12] = m; out[13] = n; out[14] = o; out[15] = p;
    } else {
      out[ 0] = a[ 0]; out[ 1] = a[ 1]; out[ 2] = a[ 2]; out[ 3] = a[ 3];
      out[ 4] = a[ 4]; out[ 5] = a[ 5]; out[ 6] = a[ 6]; out[ 7] = a[ 7];
      out[ 8] = a[ 8]; out[ 9] = a[ 9]; out[10] = a[10]; out[11] = a[11];
      out[12] = a[12]; out[13] = a[13]; out[14] = a[14]; out[15] = a[15];
    }
    return out;
  };

  mat4.transpose = function (m, out) {
    return mat4.set(out,
      m[0], m[4], m[ 8], m[12],
      m[1], m[5], m[ 9], m[13],
      m[2], m[6], m[10], m[14],
      m[3], m[7], m[11], m[15]
    );
  };

  mat4.add = function (a, b, out) {
    return mat4.set(out,
      a[ 0] + b[ 0], a[ 1] + b[ 1], a[ 2] + b[ 2], a[ 3] + b[ 3],
      a[ 4] + b[ 4], a[ 5] + b[ 5], a[ 6] + b[ 6], a[ 7] + b[ 7],
      a[ 8] + b[ 8], a[ 9] + b[ 9], a[10] + b[10], a[11] + b[11],
      a[12] + b[12], a[13] + b[13], a[14] + b[14], a[15] + b[15]
    );
  };

  mat4.mul = function (a, b, out) {
    if(typeof b === 'object')
    return mat4.set(out,
      a[ 0] * b[0] + a[ 1] * b[4] + a[ 2] * b[ 8] + a[ 3] * b[12],
      a[ 0] * b[1] + a[ 1] * b[5] + a[ 2] * b[ 9] + a[ 3] * b[13],
      a[ 0] * b[2] + a[ 1] * b[6] + a[ 2] * b[10] + a[ 3] * b[14],
      a[ 0] * b[3] + a[ 1] * b[7] + a[ 2] * b[11] + a[ 3] * b[15],
      a[ 4] * b[0] + a[ 5] * b[4] + a[ 6] * b[ 8] + a[ 7] * b[12],
      a[ 4] * b[1] + a[ 5] * b[5] + a[ 6] * b[ 9] + a[ 7] * b[13],
      a[ 4] * b[2] + a[ 5] * b[6] + a[ 6] * b[10] + a[ 7] * b[14],
      a[ 4] * b[3] + a[ 5] * b[7] + a[ 6] * b[11] + a[ 7] * b[15],
      a[ 8] * b[0] + a[ 9] * b[4] + a[10] * b[ 8] + a[11] * b[12],
      a[ 8] * b[1] + a[ 9] * b[5] + a[10] * b[ 9] + a[11] * b[13],
      a[ 8] * b[2] + a[ 9] * b[6] + a[10] * b[10] + a[11] * b[14],
      a[ 8] * b[3] + a[ 9] * b[7] + a[10] * b[11] + a[11] * b[15],
      a[12] * b[0] + a[13] * b[4] + a[14] * b[ 8] + a[15] * b[12],
      a[12] * b[1] + a[13] * b[5] + a[14] * b[ 9] + a[15] * b[13],
      a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14],
      a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15]
    );
    return mat4.set(out,
      a[ 0] * b, a[ 1] * b, a[ 2] * b, a[ 3] * b,
      a[ 4] * b, a[ 5] * b, a[ 6] * b, a[ 7] * b,
      a[ 8] * b, a[ 9] * b, a[10] * b, a[11] * b,
      a[12] * b, a[13] * b, a[14] * b, a[15] * b
    );
  };

  mat4.translate = function (v, out) {
    if(typeof v === 'object')
    return mat4.set(out,
      1, 0, 0, v[0] == null ? 0 : v[0],
      0, 1, 0, v[1] == null ? 0 : v[1],
      0, 0, 1, v[2] == null ? 0 : v[2],
      0, 0, 0, 1
    );
    return mat4.set(out,
      1, 0, 0, v,
      0, 1, 0, v,
      0, 0, 1, v,
      0, 0, 0, 1
    );
  };

  mat4.scale = function (v, out) {
    if(typeof v === 'object')
    return mat4.set(out,
      v[0] == null ? 1 : v[0], 0, 0, 0,
      0, v[1] == null ? 1 : v[1], 0, 0,
      0, 0, v[2] == null ? 1 : v[2], 0,
      0, 0, 0, 1
    );
    return mat4.set(out,
      v, 0, 0, 0,
      0, v, 0, 0,
      0, 0, v, 0,
      0, 0, 0, 1
    );
  };

  mat4.rotate = function (r, v, out) {
    var s = Math.sin(r), c = Math.cos(r), C = 1 - c;
    return mat4.set(out,
      C * v[0] * v[0] + c, C * v[0] * v[1] - s * v[2], C * v[0] * v[2] + s * v[1], 0,
      C * v[1] * v[0] + s * v[2], C * v[1] * v[1] + c, C * v[1] * v[2] - s * v[0], 0,
      C * v[2] * v[0] - s * v[1], C * v[2] * v[1] + s * v[0], C * v[2] * v[2] + c, 0,
      0, 0, 0, 1
    );
  };

  mat4.frustum = function(l, r, b, t, n, f, out) {
    return mat4.set(out,
      2 * n / (r - l), 0, (r + l) / (r - l), 0,
      0, 2 * n / (t - b), (t + b) / (t - b), 0,
      0, 0, -(f + n) / (f - n), -2 * f * n / (f - n),
      0, 0, -1, 0
    );
  };

  mat4.ortho = function(l, r, b, t, n, f, out) {
    return mat4.set(out,
      2 / (r - l), 0, 0, -(r + l) / (r - l),
      0, 2 / (t - b), 0, -(t + b) / (t - b),
      0, 0, -2 / (f - n), -(f + n) / (f - n),
      0, 0, 0, 1
    );
  };

  mat4.perspective = function(fov, aspect, near, far, out) {
    var b = Math.tan(fov * Math.PI / 360) * near, a = b * aspect;
    return mat4.frustum(-a, a, -b, b, near, far, out);
  };

  mat4.lookAt = function(camera, point, up, out) {
    var c = vec4.unit(vec4.sub(camera, point, vec4.buffer));
    var a = vec4.unit(vec4.cross(up, c, vec4.buffer));
    var b = vec4.unit(vec4.cross(c, a, vec4.buffer));
    return mat4.set(out,
      a[0], a[1], a[2], -vec4.dot(a, camera),
      b[0], b[1], b[2], -vec4.dot(b, camera),
      c[0], c[1], c[2], -vec4.dot(c, camera),
      0, 0, 0, 1
    );
  };

  mat4.join = function (matrices, out) {
    if(!out) out = new mat4.array(16);
    return matrices.reduce(function(p, c) {
      return mat4.mul(c, p, out);
    });
  };

  return mat4;
});