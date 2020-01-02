# Antd@4 使用 dayjs 替代 moment

需要 `typescript` 代码，请 `cd antd-ts && yarn start`
需要 `javascript` 代码，请 `cd antd-demo && yarn start`

## 未使用 dayjs build

### javascript

```bash
File sizes after gzip:

  139.98 KB  build/static/js/2.ab170d7b.chunk.js
  53.31 KB   build/static/css/2.076ffdb4.chunk.css
  779 B      build/static/js/runtime-main.07fa7236.js
  659 B      build/static/js/main.57d9db1b.chunk.js
  546 B      build/static/css/main.d15e702f.chunk.css
```

### typescript

```bash
File sizes after gzip:

  139.98 KB  build/static/js/2.27c76400.chunk.js
  53.31 KB   build/static/css/2.076ffdb4.chunk.css
  776 B      build/static/js/runtime-main.cfe6c52f.js
  655 B      build/static/js/main.2b0e0e52.chunk.js
  546 B      build/static/css/main.d15e702f.chunk.css
```

## 使用 dayjs build

### javascript

```bash
File sizes after gzip:

  126.1 KB (-13.88 KB)  build/static/js/2.b1e4d60c.chunk.js
  53.31 KB              build/static/css/2.076ffdb4.chunk.css
  779 B                 build/static/js/runtime-main.07fa7236.js
  769 B (+110 B)        build/static/js/main.0b2ba61f.chunk.js
  546 B                 build/static/css/main.d15e702f.chunk.css
```

### typescript

```bash
File sizes after gzip:

  126.1 KB (-13.88 KB)  build/static/js/2.f663be31.chunk.js
  53.31 KB              build/static/css/2.076ffdb4.chunk.css
  776 B                 build/static/js/runtime-main.cfe6c52f.js
  765 B (+110 B)        build/static/js/main.9256ac12.chunk.js
  546 B                 build/static/css/main.d15e702f.chunk.css
```
