#gulp-tasks [![Build Status](https://travis-ci.org/kopfwelt/gulp-tasks.svg?branch=master)](https://travis-ci.org/kopfwelt/gulp-tasks)
 A collection of gulp tasks used in our boilerplate to be able to update tasks independently of the projects.



## Install

Install from [github](https://github.com/kopfwelt/gulp-tasks) using npm

```
npm install --save-dev kopfwelt/gulp-tasks
```

## Tasks

Tasks are devided into main tasks that provide a facade to subtasks.

* Templates
  * [Handlebars](#task-handlebars)

### Templates

#### <a name="task-handlebars"></a>Handlebars `'handlebars'`
Compiles handlebars templates to html using [layouts](https://www.npmjs.com/package/handlebars-layouts) and [i18next](http://i18next.com/pages/doc_templates.html) helpers.

Usage

```
gulp.task('templates', ['handlebars']);
```

Config

```
{
	"templates" : {
		"handlebars" : {
		}
	}
}
```

## Tests
Basic tests using mocha, chai:

```
npm test
```
