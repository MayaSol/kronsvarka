const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const webpackStream = require('webpack-stream');
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const terser = require("gulp-terser");
var rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
var buffer = require('vinyl-buffer');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var spritesmith = require('gulp.spritesmith');
const sass = require('gulp-sass');
const debug = require('gulp-debug');


// Список и настройки плагинов postCSS
let postCssPlugins = [
  autoprefixer({grid: true}),
  // mqpacker({
  //   sort: true
  // }),
  // atImport(),
  // inlineSVG(),
  // objectFitImages(),
];


gulp.task('js', () =>
    gulp.src('src/js/*.js')
        .pipe(babel({
            presets: [
            ['@babel/preset-env',
	            {  
			        "useBuiltIns": "entry",
			        "corejs": 3,
	            	"targets": {
			          "ie": "11",
	        		}
	            }
            ]],
            "plugins": ["@babel/plugin-transform-object-assign"],
        }))
        .pipe(gulp.dest('dist'))
);


gulp.task('js-min', () =>
    gulp.src('src/js/*.js')
        .pipe(terser())
        .pipe(rename(function (path) {
          // Updates the object in-place
          path.extname = ".min.js";
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('sass', () =>
    gulp.src('css/style.scss')
      .pipe(plumber({
        errorHandler: function (err) {
          console.log(err.message);
          this.emit('end');
        }
      }))
      .pipe(debug({title: 'Compiles:'}))
      .pipe(sass())
      // .pipe(sass({includePaths: [__dirname+'/','node_modules']}))
      .pipe(postcss(postCssPlugins))
      // .pipe(csso({
      //   restructure: false,
      // }))
      // .pipe(dest(`${dir.build}/css`, { sourcemaps: '.' }))
      // .pipe(browserSync.stream());
      .pipe(rename('common.css'))
      .pipe(gulp.dest('css'))
);



gulp.task('bundle', () => 
  gulp.src(`./src/bundle/script_tooltips.js`)
    .pipe(plumber())
    .pipe(webpackStream({
      mode: 'development',
      entry: {'bundle': './src/bundle/script_tooltips.js'},
      output: {
        filename: '[name].js',
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      // externals: {
      //   jquery: 'jQuery'
      // }
    }))
    .pipe(gulp.dest('dist'))
);


gulp.task('css', () => {

  return gulp.src('./src/css/*.css')
    .pipe(sourcemaps.init())
    // .pipe(postcss([ autoprefixer({grid: 'autoplace'}) ]))
    .pipe(cleanCSS())
    // .pipe(rename(function (path) {
    //   path.extname = ".min.css";
    // }))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
})


gulp.task('sprite', function () {
  // Generate our spritesheet
  var spriteData = gulp.src('img/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss',
    cssTemplate: 'handlebarsStrDefault.scss.handlebars',
    algorithm: 'diagonal'
    // cssVarMap: function (sprite) {
    //   console.log(sprite);
    //   sprite.name = sprite.name;
    // }
  }));
 
  // Pipe image stream through image optimizer and onto disk
  var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest('img/'));
 
  // Pipe CSS stream through CSS optimizer and onto disk
  var cssStream = spriteData.css
    .pipe(gulp.dest('css/'));

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);
});