//orig - my attempt at ukg

setcpm(138/4)
const dbank = "mc303"

let kick = s("[bd - - - - - - bd - - bd - - - - -]").bank(dbank)
let snare = s("[- - - - sd - - - - - - - sd:2 - - -]").bank(dbank).decay(0.2)
let hat = s("[hh - - - hh hh - - hh - - - hh - - hh]").velocity("[1 0.3!3]*4").gain(0.2).bank(dbank)
let openhat = s("- - oh - - - oh - - - oh - - - oh -").decay(0.2).gain(0.1).bank(dbank)
let rim = s("- rim:8 - - - - - rim:2 - rim:2 - - - - - -").gain(0.2).bank(dbank)

drums:
stack(openhat
      , hat
      , rim
      , kick
      , snare
     ).room(0.05).swing(8)
  ._scope()

chords:
chord("[Am7!2 - Am!2 - Cm9 -]!3 [Am7!2 - Am7!2 - E7@2]")
  .slow(4)
  .decay(0.3)
  .room(0.5)
  .s("gm_pad_warm")
  .gain(0.2)
  .voicing()
  ._punchcard()

synth:
n("[[5@2 - 5@2 5 7@2]!2] [[5 5 5] [5 4]]!3")
  .slow(4)
  .gain(0.2)
  .pan(rand)
  .octave(3)
  .s("triangle")
  .decay(0.2)
  .room(0.2)
  .scale("c:major")
  ._punchcard()

bass:
n("0 [-@7 4] [0@7 7] [-@7 7] 0 - [0@3 [4 0]] [[0 4] 0 4 -]")
  .slow(4)
  .octave(-2)
  .s("square")
  .lpf(350)
  .room(0.5)
  .scale("a:major")
  ._scope()