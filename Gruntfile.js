module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        concat: {
            options: {
                separator: "\n\n\n"
            },
            js: {
                src: [
                    "app/lib/jquery-3.2.0.min.js",
                    "app/lib/tether.min.js",
                    "app/lib/bootstrap.min.js",
                    "app/lib/owl.carousel.min.js",
                    "app/lib/wow.min.js",
                    "app/lib/angular-1.5.min.js",
                    "app/lib/angular-route.min.js",
                    "app/lib/angular-scroll.min.js",
                    "app/lib/angular-sanitize.min.js",
                    "app/js/myScript.js",
                    "temp/templates.js",
                    "app/js/myDirectives.js",
                    "app/js/myControllers.js",
                    "app/js/components/**/**.js"
                ],
                dest: "www/js/script.js"
            },
            css: {
                src: [
                    "temp/font-awesome.min.css",
                    "app/css/owl.carousel.min.css",
                    "app/css/owl.theme.default.min.css",
                    "app/css/bootstrap.min.css",
                    "app/css/animate.min.css",
                    "app/css/myStyle.css"
                ],
                dest: "www/css/style.css"
            },
            includeGoogleFont: {
                options: {
                    process: function(src, filepath) {
                        return '@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700,700italic");' + src;
                    }
                },
                files: {
                    "www/css/style.min.css": "www/css/style.min.css",
                }
            }
        },
        watch: {
            js: {
                files: ["app/js/**/*.js"],
                tasks: ["concat:js"]
            },
            css: {
                files: ["app/css/**/*.css"],
                tasks: ["concat:css"]
            }
        },
        cssmin: {
            dist: {
                files: {
                    "www/css/style.min.css": "<%= concat.css.src %>"
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    "www/js/script.min.js": "<%= concat.js.src %>"
                },
                options: {
                    mangle: false
                }
            }
        },
        imageEmbed: {
            font: {
                src: "app/css/font-awesome.min.css",
                dest: "temp/font-awesome.min.css",
                options: {
                    deleteAfterEncoding : false,
                    maxImageSize: 0
                }
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: "app/scss",
                    cssDir: "temp"
                }
            }
        },
        clean: {
            temp: {
                files: [{
                    dot: true,
                    src: ["temp"]
                }]
            },
            www: {
                files: [{
                    dot: true,
                    src: ["www"]
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: "app",
                    dest: "www",
                    src: [
                        "index.html",
                        "favicon.ico",
                        "images/**"
                    ]
                }]
            }
        },
        ngtemplates: {
            app: {
                cwd: "app",
                src: [
                    "templates/**.html",
                    "js/components/**/**.html"
                ],
                dest: "temp/templates.js",
                options: {
                    module: "mobileSolutions"
                }
            }
        }
    });

    grunt.registerTask("default", [
        "clean:www",
        "imageEmbed:font",
        "cssmin",
        "concat:includeGoogleFont",
        "ngtemplates",
        "uglify",
        "copy",
        "clean:temp"
    ]);
};
