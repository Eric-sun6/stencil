import { Config } from '@stencil/core';
import {sass} from "@stencil/sass";
import {postcss} from "@stencil/postcss";
import autoprefixer from 'autoprefixer';

// https://stenciljs.com/docs/config

export const config: Config = {
  autoprefixCss: true,
  globalStyle: 'src/global/app.css',// reset
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  minifyCss: true,
  minifyJs: true,
  excludeUnusedDependencies: true,
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
  ],
  plugins:[
    sass({
      // 全局注入样式变量文件？？，慎用，会打包到每个css模块中
      injectGlobalPaths: [
        'src/global/style/common_var.scss',
        'src/global/style/iconfont.css'
      ],
    }),
    postcss({
      plugins: [
        autoprefixer({
          // TODO 确认好prefixer的浏览器版本
          "overrideBrowserslist": [
            'ios 7',
            "Firefox >= 3.5", // 兼容火狐版本号大于3.5浏览器
            "chrome  >= 35", // 兼容谷歌版本号大于35浏览器,
            "opera >= 11.5", // 兼容欧朋版本号大于11.5浏览器,
            "chrome  >= 36", // 如果需要适配的浏览器完全兼容则不会添加前缀
          ],
          cascade: false
        })
      ]
    }),

  ]
};
