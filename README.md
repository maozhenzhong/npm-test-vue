# qxy-demo

---

## 描述

创建一个测试npm包

## install

```Bash
npm install qxy-demo
```

## Use

```JavaScript
// main.js

import qxyDemo from 'qxy-demo'

Vue.use(qxyDemo)
```

```Vue
// demo.js
<template>
    <div class="demo">
        <qxy-demo :title="title" :text="text" />
    </div>
</template>

<script>
export default {
    name: 'Demo',
    data() {
        return {
            title: '测试数据',
            text: '测试数据',
        }
    }
}
</script>
```
