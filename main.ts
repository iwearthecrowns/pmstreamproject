let mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . . . 
. . . 3 . . . . . . . . . . . 3 . . 
. . 3 3 3 . 3 3 3 3 3 3 3 . 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. . . 3 3 3 1 1 1 3 1 1 1 3 3 3 . . 
. . . 3 3 3 1 8 1 3 1 8 1 3 3 3 . . 
. . . 3 3 3 1 1 1 3 1 1 1 3 3 3 . . 
. . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. . . 3 3 3 3 3 f 3 f 3 3 3 3 3 . . 
. . . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
. . . . . 3 3 3 3 3 3 3 3 3 . . . . 
. . . . . . 3 3 3 3 3 3 3 . . . . . 
. . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite3.setPosition(55, 60)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . 
. . . . f f f f f f f f f f f . . . . 
. . . . f . e e d d d e e . f . . . . 
. . . f . e d d d d d d d e . f . . . 
. . f . e d d d d d d d d d e . f . . 
. . f d d d d d d d d d d d d d f . . 
. f f d d d d d d d d d d d d d f f . 
. f f d d d d d d d d d d d d d f f . 
. f f d d d d f d d d f d d d d f f . 
. . f d d d d d d d d d d d d d f . . 
. . . d d d d d d d d d d d d d . . . 
. . . d d 2 d d d d d d d 2 d d . . . 
. . . . d d 2 d d d d d 2 d d . . . . 
. . . . . d d 2 2 2 2 2 d d . . . . . 
. . . . . . d d d d d d d . . . . . . 
. . . . . . . 8 8 f 8 8 . . . . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(11)
mySprite.say("eh", 2000)
let mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
. . . . 8 . 4 4 4 4 4 4 4 . 8 . . . . 
. . . 8 . 4 4 e e e e e 4 4 . 8 . . . 
. . 8 . e e e e e e e e e e e . 8 . . 
. . 8 e e e e e e e e e e e e e 8 . . 
. 8 8 e e e e e e e e e e e e e 8 8 . 
. 8 8 e e e e e e e e e e e e e 8 8 . 
. 8 8 e e e e f e e e f e e e e 8 8 . 
. . 8 e e e e e e e e e e e e e 8 . . 
. . . e e e e e e e e e e e e e . . . 
. . . e e f e e e e e e e f e e . . . 
. . . . e e f e e e e e f e e . . . . 
. . . . . e e f f f f f e e . . . . . 
. . . . . . e e e e e e e . . . . . . 
. . . . . . . 2 2 f 2 2 . . . . . . . 
`, SpriteKind.Player)
mySprite2.setPosition(100, 60)
pause(2000)
mySprite2.say("hello", 2000)
pause(2000)
mySprite3.say("oink", 2000)
