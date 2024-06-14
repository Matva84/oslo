# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "bootstrap", to: "bootstrap.min.js", preload: true
pin "@popperjs/core", to: "popper.js", preload: true
pin "three", to: "https://cdn.skypack.dev/three"
pin "@motionone/dom", to: "https://cdn.skypack.dev/@motionone/dom"
pin "gsap", to: "https://cdn.jsdelivr.net/npm/gsap@3.11.2/dist/gsap.min.js"
