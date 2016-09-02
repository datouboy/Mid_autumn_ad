'use strict';
module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    var config = {
        src : "src",
        dist : "dist",
    }

    grunt.initConfig({
        config : config,
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> by <%= pkg.author %> */\n'
            },
            Dest: {
                options: {
                    report: "min",
                    compress: {
                        drop_console: true
                    }
                },
                files: {
                    '<%= config.dist %>/js/common.min.js': ['<%= config.src %>/js/common.js']
                }
            },
            Live: {
                files: {
                    '<%= config.dist %>/js/common.min.js': ['<%= config.src %>/js/common.js']
                }
            }
        },
        less: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> by <%= pkg.author %> */\n'
            },
            Live: {
                options: {
                    plugins: [
                        new(require('less-plugin-autoprefix'))({ browsers: ["ie >= 8", "ie_mob >= 10", "ff >= 26", "chrome >= 30", "safari >= 6", "opera >= 23", "ios >= 5", "android >= 2.3", "bb >= 10"] }), //自动补全CSS3的前缀
                    ]
                },
                files: {
                    '<%= config.dist %>/css/common.css': '<%= config.src %>/less/common.less',
                    '<%= config.dist %>/css/pace-theme-loading-bar.tmpl.css': '<%= config.src %>/less/pace-theme-loading-bar.tmpl.css'
                }
            },
            Dest: {
                options: {
                    plugins: [
                        new(require('less-plugin-autoprefix'))({ browsers: ["ie >= 8", "ie_mob >= 10", "ff >= 26", "chrome >= 30", "safari >= 6", "opera >= 23", "ios >= 5", "android >= 2.3", "bb >= 10"] }), //自动补全CSS3的前缀
                        new(require('less-plugin-clean-css'))() //压缩CSS
                    ]
                },
                files: {
                    '<%= config.dist %>/css/common.css': '<%= config.src %>/less/common.less',
                    '<%= config.dist %>/css/pace-theme-loading-bar.tmpl.css': '<%= config.src %>/less/pace-theme-loading-bar.tmpl.css'
                }
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, cwd: '<%= config.src %>/', src: ['*.html','*.js'], dest: '<%= config.dist %>/', filter: 'isFile' },
                    { expand: true, cwd: '<%= config.src %>/images/', src: ['**'], dest: '<%= config.dist %>/images/' },
                    { expand: true, cwd: '<%= config.src %>/js/', src: ['*.min.js'], dest: '<%= config.dist %>/js/', filter: 'isFile' },
                    { expand: true, cwd: '<%= config.src %>/css/', src: ['**'], dest: '<%= config.dist %>/css/' }
                ]
            },
            html: {
                files: [
                    { expand: true, cwd: '<%= config.src %>/', src: ['*.html','*.js'], dest: '<%= config.dist %>/', filter: 'isFile' }
                ]
            },
            images: {
                files: [
                    { expand: true, cwd: '<%= config.src %>/images/', src: ['**'], dest: '<%= config.dist %>/images/' }
                ]
            },
            jsCopy: {
                files: [
                    { expand: true, cwd: '<%= config.src %>/js/', src: ['*.min.js'], dest: '<%= config.dist %>/js/', filter: 'isFile' }
                ]
            },
            css: {
                files: [
                    { expand: true, cwd: '<%= config.src %>/css/', src: ['**'], dest: '<%= config.dist %>/css/' }
                ]
            }
        },
        clean: {
            all: ['<%= config.dist %>']
        },
        connect: {
            server: {
                options: {
                    port: 9090,
                    base: '<%= config.dist %>'
                }
            }
        },
        watch: {
            js: {
                files: ['<%= config.src %>/js/common.js'],
                tasks: ['uglify:Live'],
                options: {
                    livereload: true
                }
            },
            jsCopy: {
                files: ['<%= config.src %>/js/*.min.js'],
                tasks: ['copy:jsCopy'],
                options: {
                    livereload: true
                }
            },
            less: {
                files: ['<%= config.src %>/less/common.less'],
                tasks: ['less:Live'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['<%= config.src %>/css/**'],
                tasks: ['copy:css'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['<%= config.src %>/*.html'],
                tasks: ['copy:html'],
                options: {
                    livereload: true
                }
            },
            images :{
                files: ['<%= config.src %>/images/**'],
                tasks: ['copy:images'],
                options: {
                    livereload: true
                }
            }
        },
    });

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['clean:all', 'uglify:Live', 'copy:main', 'less:Dest']);
    // 调试服务器
    grunt.registerTask('test', ['connect', 'watch']);
};