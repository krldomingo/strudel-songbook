// remake of "Illegal" by PinkPantheress

setcpm(141/4)
const dbank = "mc303"

let kick = s("[[bd - - -] [-] [- - <bd bd bd - bd - bd bd> -] [- <- bd - - - - - bd> - <- bd - - - - - bd>]]").bank(dbank)
let kick2 = s("bd*4").bank(dbank)
let snare = s("[[-] [sd:2 - - <- sd:2 - - - - - sd:2>] [-] [sd:2 - - -]]").bank(dbank).decay(0.15)
let hat = s("[[hh - - -] [hh hh - -] [hh - - -] [hh - - hh]]").velocity("[1 0.3!3]*4").gain(0.2).bank(dbank)
let openhat = s("[- - oh -]*4").decay(0.2).gain(0.1).bank(dbank)
let rim = s("[- rim:8 - -] [- - - rim:2] [- rim:2 - -] [-]").gain(0.1).bank(dbank)

drums:
stack(openhat
      , hat
      , rim 
      , kick
      // , kick2
      , snare
     ).swing(8)
  ._scope()

chords:
chord("Cm7@4 Cm7@3 Cm7@5 Gm9@2 Gm9@2")
  .anchor("g g g a a")
  .slow(2)
  .room(1)
  .legato(0.875)
  .decay(1)
  .s("gm_pad_warm")
  .gain(0.3)
  .voicing()
  ._punchcard()

pad:
note("eb, c, f, eb4, c4, f4")
.slow(1)
.room(1)
.gain(0.1)
.s("gm_choir_aahs")

synth:
n("4 3 0 4@9 5@2 3@2 4 3 2 1@13")
  .slow(4)
  .gain(0.25)
  .attack(0.03)
  .octave(3)
  .s("triangle")
  .room(0.5)
  .scale("C:dorian")
  ._punchcard()

synth2:
n("6 5 3 6 5 3 6 5 3 6 5 3 3 3 3 5")
  .slow(2)
  .gain(0.1)
  .octave(2)
  .attack(0.1)
  .legato(1.1)
  .s("sine")
  .room(0.5)
  .scale("C:dorian")
  ._punchcard()

bass:
n(`<
  [0@4 0@3 0@5 -3@2 -3@2]
  [0@4 0@3 0@3 0@2 -3@2 -3@2]
  [0@4 7 4 4 0@3 0@2 4@2 4@2]
  [0@1.5 -3@1.5 0@2 0 4 7 7 4 2@2 4@2 4@2]
>`)
  .slow(2)
  .s("saw")
  .octave(-1)
  .decay(0.5)
  .sustain(0.2)
  .release(0.1)
  .lpenv(1)
  .lpf(150)
  .gain(1)
  .scale("C:dorian")
  ._scope()