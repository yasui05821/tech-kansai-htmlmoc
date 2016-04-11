## frontend 開発ツール

git subtree で引っ張ってきてから、適当にコピペして使う系のやつ。
(基本的にコピペ専用)

所詮はビルドツールなので自由に運用する。

````
$ git remote add frontend https://github.com/chatbox-inc/frontend.git
$ git subtree add --prefix=frontend/libs frontend master
````

ローカルブランチでの差分比較を運用に加えたい場合は以下を加える。

````
$ git subtree push --prefix frontend/libs . frontend
````


## npm installs 

gulp commons

````
$ npm i gulp gulp-load-plugins gulp-plumber gulp-notify run-sequence --save
````

gulp sass

````
$ npm i gulp-sass node-bourbon node-neat --save
````

gulp jade

````
$ npm i gulp-jade node-bourbon node-neat --save
````

gulp webpack

````
$ npm i gulp-webpack babel-loader html-loader babel-core  babel-preset-es2015 --save
````

gulp browserSync

````
npm install browser-sync gulp-connect-php --save
````


## others

common frontend

````
$ npm i jquery bootstrap normalize.css animate.css bootstrap --save
````

angularJS

````np
$ npm i angular angular-route --save
````

foundation

````
$ npm i foundation-sites-template --save
````


