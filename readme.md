# TypeScript工程化开发
### 前端工程化就是通过流程规范化、标准化提升团队协作效率
### 通过组件化、模块化提升代码质量
### 使用构建工具、自动化工具提升开发效率
### 编译 => 打包(合并) => 压缩 => 代码检查 => 测试 => 持续集成

# git规范和changelog
### sudo cnpm i -g commitizen
commitizen 是一个格式化commit message的工具
validate-commit-msg 用于检查项目的 Commit message 是否符合格式
conventional-changelog-cli可以从git metadata生成变更日志
统一团队的git commit 标准

可以使用angular的git commit日志作为基本规范
提交的类型限制为 feat、fix、docs、style、refactor、perf、test、chore、revert等
提交信息分为两部分，标题(首字母不大写，末尾不要加标点)、主体内容(描述修改内容)
日志提交友好的类型选择提示 使用commitize工具
不符合要求格式的日志拒绝提交 的保障机制
需要使用validate-commit-msg工具
统一changelog文档信息生成
使用conventional-changelog-cli工具

### cnpm i commitizen  validate-commit-msg conventional-changelog-cli -D
### commitizen init cz-conventional-changelog --save --save-exact
### git cz

# 支持React
### cnpm i react react-dom @types/react @types/react-dom react-router-dom @types/react-router-dom   -S
### cnpm i webpack webpack-cli webpack-dev-server html-webpack-plugin hoist-non-react-statics -D
### cnpm i typescript ts-loader source-map-loader -D
### cnpm i redux react-redux @types/react-redux redux-thunk  redux-logger @types/redux-logger -S
### cnpm i connected-react-router -S 

// 新项目 就可以不实用babel 使用 ts-loader 就可以了

# 代码检查
### cnpm i eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev

### 添加配置文件 .eslintrc.js 然后在保存的时候就会自动的格式化
```
module.exports = {
    "parser":"@typescript-eslint/parser",
    "plugins":["@typescript-eslint"],
    "rules":{
        "no-var":"error",
        "no-extra-semi":"error",
        "@typescript-eslint/indent":["error",2]
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
          "modules": true
        }
    }
}
```


# 单元测试
### npm i jest @types/jest ts-jest -D
### npx ts-jest config:init   // 初始化会生成一个 jest.config.js 





# 持续集成
### Travis CI 提供的是持续集成服务（Continuous Integration，简称 CI）。它绑定 Github 上面的项目，只要有新的代码，就会自动抓取。然后，提供一个运行环境，执行测试，完成构建，还能部署到服务器
### 持续集成指的是只要代码有变更，就自动运行构建和测试，反馈运行结果。确保符合预期以后，再将新代码集成到主干
### 持续集成的好处在于，每次代码的小幅变更，就能看到运行结果，从而不断累积小的变更，而不是在开发周期结束时，一下子合并一大块代码