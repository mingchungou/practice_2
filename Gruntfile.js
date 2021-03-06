module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat: {
            addFontsBuild: {
                options: {
                    process: function(src, filepath) {
                        return "@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,700italic');\n" + src;
                    }
                },
                files: {
                    "www/css/styles.min.css": "www/css/styles.min.css"
                }
            },
            addFontslocal: {
                options: {
                    process: function(src, filepath) {
                        return "@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,700italic');\n" + src;
                    }
                },
                files: {
                    "app/css/styles.css": "app/css/styles.css"
                }
            }
        },
        watch: {
            options: {
                spawn: false,
                interrupt: true,dateFormat: function(time) {
                    grunt.log.writeln("The watch finished in " + time + "ms at" + (new Date()).toString());
                    grunt.log.writeln("Waiting for more changes...");
                },
                livereload: true
            },
            js: {
                files: ["app/js/**/*.js"]
            },
            sass: {
                files: ["app/scss/*.scss"],
                tasks: [
                    "compass",
                    "concat:addFontslocal",
                    "clean:general"
                ]
            },
            html: {
                files: [
                    "app/**/*.html"
                ]
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: "localhost",
                    base: "./",
                    livereload: true
                }
            }
        },
        open: {
            dist: {
                path: "http://localhost:9000/app",
                app: "Google Chrome"
            }
        },
        cssmin: {
            dist: {
                options: {
                    mergeIntoShorthands: false,
                    roundingPrecision: -1
                },
                files: {
                    "www/css/styles.min.css": [
                        "temp/fonts/font-awesome.min.css",
                        "node_modules/owl.carousel/dist/assets/owl.carousel.min.css",
                        "node_modules/owl.carousel/dist/assets/owl.theme.default.min.css",
                        "node_modules/bootstrap/dist/css/bootstrap.min.css",
                        "node_modules/animate.css/animate.min.css",
                        "app/css/styles.css"
                    ]
                }
            }
        },
        uglify: {
            dist: {
                options: {
                    mangle: false,
                    banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today('yyyy-mm-dd') %> */"
                },
                files: {
                    "www/js/main.min.js": [
                        "node_modules/jquery/dist/jquery.min.js",
                        "node_modules/tether/dist/js/tether.min.js",
                        "node_modules/bootstrap/dist/js/bootstrap.min.js",
                        "node_modules/owl.carousel/dist/owl.carousel.min.js",
                        "node_modules/wowjs/dist/wow.min.js",
                        "app/lib/angularjs/js/*.min.js",
                        "node_modules/angular-scroll/angular-scroll.min.js",
                        "app/js/app.module.js",
                        "temp/templates/templates.js",
                        "app/js/directives/**/*.directive.js",
                        "app/js/app.controller.js",
                        "app/js/components/**/*.component.js"
                    ]
                }
            }
        },
        imageEmbed: {
            dist: {
                src: "node_modules/font-awesome/css/font-awesome.min.css",
                dest: "temp/fonts/font-awesome.min.css",
                options: {
                    deleteAfterEncoding : false,
                    maxImageSize: 0
                }
            }
        },
        compass: {
            dist: {
                options: {
                    banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today('yyyy-mm-dd') %> */",
                    sassDir: "app/scss/",
                    cssDir: "app/css/",
                    imagesDir: "app/images/",
                    javascriptsDir: "app/js/",
                    fontsDir: "app/lib/font-awesome/fonts/",
                    specify: ["app/scss/styles.scss"],
                    relativeAssets: true,
                    raw: "Encoding.default_external = \'utf-8\'\n",
                    outputStyle: "nested",
                    force: true
                }
            }
        },
        clean: {
            general: {
                files: [{
                    dot: true,
                    src: [
                        "temp",
                        ".sass-cache"
                    ]
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
            dist: {
                cwd: "app/",
                src: [
                    "js/components/**/*.html"
                ],
                dest: "temp/templates/templates.js",
                options: {
                    module: "mobileSolutions"
                }
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require("pixrem")(),
                    require("autoprefixer")(),
                    require("cssnano")()
                ]
            },
            dist: {
                src: "app/css/styles.css"
            }
        },
        strip_code: {
            dist: {
                options: {
                    blocks: [{
                        start_block: "/* start-test-block */",
                        end_block: "/* end-test-block */"
                    }, {
                        start_block: "<!-- start-html-test-code -->",
                        end_block: "<!-- end-html-test-code -->"
                    }]
                },
                src: "www/**/*.html"
            }
        }
    });


    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);


    grunt.registerTask("default", [
        "clean:www",
        "imageEmbed",
        "compass",
        "postcss",
        "cssmin",
        "concat:addFontsBuild",
        "ngtemplates",
        "uglify",
        "copy",
        "strip_code",
        "clean:general"
    ]);

    grunt.registerTask("server", [
        "compass",
        "concat:addFontslocal",
        "clean:general",
        "connect",
        "open",
        "watch"
    ]);
};
