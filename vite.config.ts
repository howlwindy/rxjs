import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// 这里的属性key顺序就是官网文档的顺序
// tsconfig.target === 'es5'时入参是1个
export default defineConfig((config) => {
  process.env = loadEnv(config.mode, process.cwd())
  console.log(process.env)
  if (config.command !== 'serve')
    console.log(`process.env = ${process.env}\nconfig = ${config}`)
  return {
    root: process.env.VITE_ROOT, // 定义入口点，能定位到index.html的目录
    base: process.env.VITE_BASE, // 所有assets的参考，只可能是'./' || '/path/' || ''
    mode: process.env.VITE_NODE_ENV, // 环境变量
    // define: [], // ????
    plugins: [vue()],
    publicDir: process.env.VITE_PUBLIC_DIR, // 从来没有在源码中用过或index.html直接用过的文件的所在目录，打包后直接在dist中与index.html同级
    cacheDir: process.env.VITE_CACHE_DIR, // 缓存文件目录，提升打包性能，可自定义
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
    },
    css: {
      // modules: false, // 配置css模块的行为并传递选项到postcss-modules
      postcss: './postcss.config.js' // postcss.config.js 的路径
      // preprocessorOptions: {
      // 配置对应的预处理器
      // }
    },
    // json: {
    // namedExports: false, // ????
    // stringify: false, // ????
    // },
    // esbuild: false, // 对esbuild transform options的扩展
    // assetsInclude: [], // 直接import时会被处理成最后的绝对路径
    logLevel: process.env.VITE_LOG_LEVEL, // log级别，info || warn || error || silent
    clearScreen: true, // true : hmr后只显示当前log : hmr后显示历史+当前log
    // envDir: '', // .env的存放目录
    // envPrefix: '', // 所有环境变量的前缀，默认是VITE
    server: {
      host: process.env.VITE_SERVER_HOST, // 设置服务host
      port: process.env.VITE_SERVER_PORT, // 设置服务port
      strictPort: process.env.VITE_SERVER_STRICT_PORT, // 如果port被用，则true ? 退出 : 自动选择下个端口启动
      // https: false, // ????
      open: process.env.VITE_SERVER_OPEN, // if (true) 自动打开；if (string) 自动打开这个地址；
      // proxy: {}, // 代理
      cors: process.env.VITE_SERVER_CORS, // 跨域
      // force: process.env.VITE_SERVER_FORCE, // 强制pre-bundling，提升打包速度
      // hmr: {
      // overlay: process.env.VITE_SERVER_HMR_OVERLAY
      // host: process.env.VITE_SERVER_HMR_HOST,
      // protocal: process.env.VITE_SERVER_HMR_PROTOCAL
      // }, // 热更新
      // watch: {}, // 通过chokidar监听文件
      // middlewareMode: 'html', // 把vite的server变成非http的server
      // fs: {
      //   strict: false, // ????
      //   allow: [], // ????
      // },
      origin: process.env.VITE_SERVER_ORIGIN // 定义origin来生成assets urls
    },
    build: {
      // target: ['es2015'], // ????
      // polyfillModulePreload: false, // ????
      outDir: process.env.VITE_BUILD_OUT_DIR, // 输出目录
      assetsDir: process.env.VITE_BUILD_ASSETS_DIR, // 相对于outDir的存放非静态资源的目录名
      assetsInlineLimit: process.env.VITE_BUILD_ASSETS_INLINE_LIMIT, // 内联资源大小上限 ????
      cssCodeSplit: process.env.VITE_BUILD_CSS_CODE_SPLIT, // true ? 拆分css : 全装在一个css文件
      // cssTarget: '', // ????
      // sourcemap: false, // ????
      // rollupOptions: {}, // ????
      // commonjsOptions: {}, // ????
      // dynamicImportVarsOptions: {}, // ????
      // lib: false, // ????
      // manifest: false, // manifest.json ????
      // ssrManifest: false, //  ????
      minify: process.env.VITE_BUILD_MINIFY, // 用terser || esbuild压缩，或不压缩
      // terserOptions: {}, // ????
      write: process.env.VITE_BUILD_WRITE, // true ? 可将bundle写入disk : 不可将bundle写入disk  ????
      emptyOutDir: process.env.VITE_BUILD_EMPTY_OUT_DIR, // 每次打包都先清空outDir
      brotliSize: process.env.VITE_BUILD_BROTLI_SIZE, // 大型项目的压缩时间长，禁用可提升大型项目的构建性能
      chunkSizeWarningLimit: process.env.VITE_BUILD_CHUNK_SIZE_WARNING_LILMIT // 每个chunk的警告阈值
      // watch: {}, // ????
    }
    // optimizeDeps: {
    // entries: [], // ????
    // exclude: [], // ????
    // include: [], // ????
    // keepNames: false, // ????
    // }
  }
})
