module.exports = {
  main: {
    src : [
      '**',
      '!node_modules/**',
      '!release/**',
      '!assets/**',
      '!.git/**',
      '!.sass-cache/**',
      '!css/src/**',
      '!img/src/**',
      '!Gruntfile.*',
      '!grunt/**',
      '!package.json',
      '!.gitignore',
      '!.gitmodules',
      '!tests/**',
      '!bin/**',
      '!.travis.yml',
      '!phpunit.xml',
      '!composer.lock',
	  '!vendor/**'
    ],
    dest: 'release/<%= package.version %>/'
  },
  svn : {
    cwd   : 'release/<%= package.version %>/',
    expand: true,
    src   : '**',
    dest  : 'release/svn/'
  }
}
