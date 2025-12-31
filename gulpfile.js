const gulp = require('gulp');

gulp.task('build', function(done) {
    console.log('Gulp build SUCCESS for Iman!');
    // Create empty folders for resources plugin
    return Promise.all([
        new Promise((resolve) => {
            gulp.src('src/**/*', {allowEmpty: true}).pipe(gulp.dest('dest/')).on('end', resolve);
        }),
        new Promise((resolve) => {
            gulp.src('src/**/*', {allowEmpty: true}).pipe(gulp.dest('dist/')).on('end', resolve);
        })
    ]).then(() => done());
});
