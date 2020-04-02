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
mySprite.say("eh")
