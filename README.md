# my-project【学习vue】

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### $nextTick【NextTick.vue】
#### 应用场景
- 在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中
- 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。
#### 作用
- Vue.nextTick用于延迟执行一段代码，它接受2个参数（回调函数和执行回调函数的上下文环境），如果没有提供回调函数，那么将返回promise对象。
```
/**
 * Defer a task to execute it asynchronously.
 */
export const nextTick = (function () {
    // 用来存储所有需要执行的回调函数
    const callbacks = []
    // 用来标志是否正在执行回调函数
    let pending = false
    // 用来触发执行回调函数
    let timerFunc

    // 这个函数用来执行callbacks里存储的所有回调函数。
    function nextTickHandler () {
        pending = false
        const copies = callbacks.slice(0)
        callbacks.length = 0
        for (let i = 0; i < copies.length; i++) {
            copies[i]()
        }
    }

    // the nextTick behavior leverages the microtask queue, which can be accessed
    // via either native Promise.then or MutationObserver.
    // MutationObserver has wider support, however it is seriously bugged in
    // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
    // completely stops working after triggering a few times... so, if native
    // Promise is available, we will use it:
    /* istanbul ignore if */
    /*
        先判断是否原生支持promise，如果支持，则利用promise来触发执行回调函数；
        否则，如果支持MutationObserver，则实例化一个观察者对象，观察文本节点发生变化时，触发执行所有回调函数。
        MutationObserver是HTML5中的新API，是个用来监视DOM变动的接口。他能监听一个DOM对象上发生的子节点删除、属性修改、文本内容修改等等。 调用过程很简单，但是有点不太寻常：你需要先给他绑回调
        如果都不支持，则利用setTimeout设置延时为0。
    */
    if (typeof Promise !== 'undefined' && isNative(Promise)) {
        var p = Promise.resolve()
        var logError = err => { console.error(err) }
        timerFunc = () => {
        p.then(nextTickHandler).catch(logError)
        // in problematic UIWebViews, Promise.then doesn't completely break, but
        // it can get stuck in a weird state where callbacks are pushed into the
        // microtask queue but the queue isn't being flushed, until the browser
        // needs to do some other work, e.g. handle a timer. Therefore we can
        // "force" the microtask queue to be flushed by adding an empty timer.
        if (isIOS) setTimeout(noop)
        }
    } else if (!isIE && typeof MutationObserver !== 'undefined' && (
        isNative(MutationObserver) ||
        // PhantomJS and iOS 7.x
        MutationObserver.toString() === '[object MutationObserverConstructor]'
    )) {
        // use MutationObserver where native Promise is not available,
        // e.g. PhantomJS, iOS7, Android 4.4
        var counter = 1
        var observer = new MutationObserver(nextTickHandler)
        var textNode = document.createTextNode(String(counter))
        observer.observe(textNode, {
        characterData: true
        })
        timerFunc = () => {
        counter = (counter + 1) % 2
        textNode.data = String(counter)
        }
    } else {
        // fallback to setTimeout
        /* istanbul ignore next */
        timerFunc = () => {
        setTimeout(nextTickHandler, 0)
        }
    }

    // 因为nextTick是一个即时函数，所以queueNextTick函数是返回的函数，接受用户传入的参数，用来往callbacks里存入回调函数。
    return function queueNextTick (cb?: Function, ctx?: Object) {
        let _resolve
        callbacks.push(() => {
        if (cb) {
            try {
            cb.call(ctx)
            } catch (e) {
            handleError(e, ctx, 'nextTick')
            }
        } else if (_resolve) {
            _resolve(ctx)
        }
        })
        if (!pending) {
        pending = true
        timerFunc()
        }
        if (!cb && typeof Promise !== 'undefined') {
        return new Promise((resolve, reject) => {
            _resolve = resolve
        })
        }
    }
})()

```