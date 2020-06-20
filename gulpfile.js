const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const webpackBuildConfig = require('./webpack-build.config.js');

// ! Develop scripts ======================================== * //
gulp.task('sass', function () {
	return gulp
		.src(['src/sass/**/*.sass'])
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(
			autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
				cascade: true,
			})
		)
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('pug', function buildHTML() {
	return gulp
		.src('src/pug/pages/*.pug')
		.pipe(
			pug({
				pretty: true,
			})
		)
		.pipe(gulp.dest('src'))
		.pipe(browserSync.stream());
});

gulp.task('js', (done) => {
	gulp.src('src/js/index.js')
		.pipe(webpackStream(webpackConfig), webpack)
		.pipe(gulp.dest('src/js/'))
		.pipe(browserSync.stream());
	done();
});

gulp.task('serve', function (done) {
	browserSync.init({
		server: 'src',
	});

	gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
	gulp.watch('src/sass/**/*.sass', gulp.series('sass'));
	gulp.watch('src/js/**/*.js', gulp.series('js'));
	gulp.watch('src/*.html').on('change', () => {
		browserSync.reload();
		done();
	});

	done();
});

// ! Build scripts ======================================== * //
gulp.task('b-img', (done) => {
	gulp.src('src/img/*').pipe(imagemin()).pipe(gulp.dest('dist/img'));
	done();
});
gulp.task('b-css', function () {
	return gulp
		.src('src/css/*.css')
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(gulp.dest('dist/css/'));
});
gulp.task('b-js', (done) => {
	gulp.src('src/js/index.js')
		.pipe(webpackStream(webpackBuildConfig), webpack)
		.pipe(gulp.dest('dist/js/'));
	done();
});

// * Сборки gulp
gulp.task('develop', gulp.series('sass', 'pug', 'serve', 'js'));
gulp.task('build', gulp.series('b-css', 'b-img', 'b-js'));
