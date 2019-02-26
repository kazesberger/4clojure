# dev-diary

This file is used 

* to publish progress on my work on 4clojure 
* and to have a log of problems i encountered.

This could be initial spark to provide PRs to other projects (myself) and possibly could be used for yet another "CLJ-begginer-experience-review" blog post.

## speculative (2019-02-26)

* call to fn instrument breaks project - the symptom is that i cannot navigate any ring-routes besides the static ones.
I believe loading clj-namespaces crashes silently in my current dev-setup because i use `lein figwheel` with a ring-handler. I think i should be starting ring server and/or figwheel from a clj-repl. Need to learn about how figwheel does its job probably. i put the code for this into a separate branch for now until i changed the dev setup.
* my (timelimitted) attempt to change the dev setup ended up in a crashing app once i start figwheel from my clj-repl:
```
user=> (start! )
Figwheel: Starting server at http://0.0.0.0:3449
Figwheel: Watching build - dev
Compiling build :dev to "resources/public/js/compiled/app.js" from ["src/cljs"]...
Successfully compiled build :dev to "resources/public/js/compiled/app.js" in 2.183 seconds.
Figwheel: Starting CSS Watcher for paths  ["resources/public/css"]
nil
user=> IOException Resource temporarily unavailable
        java.io.FileInputStream.readBytes (FileInputStream.java:-2)
        java.io.FileInputStream.read (FileInputStream.java:255)
        java.io.BufferedInputStream.fill (BufferedInputStream.java:246)
        java.io.BufferedInputStream.read (BufferedInputStream.java:265)
        jline.internal.NonBlockingInputStream.read (NonBlockingInputStream.java:166)
        jline.internal.NonBlockingInputStream.read (NonBlockingInputStream.java:135)
        jline.internal.NonBlockingInputStream.read (NonBlockingInputStream.java:243)
        jline.internal.InputStreamReader.read (InputStreamReader.java:257)
        jline.internal.InputStreamReader.read (InputStreamReader.java:194)
        jline.console.ConsoleReader.readCharacter (ConsoleReader.java:2151)
        jline.console.ConsoleReader.readCharacter (ConsoleReader.java:2141)
        jline.console.ConsoleReader.readBinding (ConsoleReader.java:2226)
Bye for now!
 kazesberger   develop  …  clj  private  4clojure  lein --version
Leiningen 2.9.0 on Java 1.8.0_161 Java HotSpot(TM) 64-Bit Server VM

```

