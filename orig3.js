//orig - wanted to make smth in 6/8 time lol
setcpm(190/6)

kick: 
s("[bd] <[- - bd] ->").bank("circuitsdrumtracks").room(0.1)

snare:
s("- sd").bank("circuitsdrumtracks").delay(0.4).delaysync(0.08333).room(0.3)

hats:
s("hh*6").bank("circuitsdrumtracks").gain(0.05).ply("<[1 2 1 <2 4>]>")

bass:
n("<[5 5*2 5 5*2 5!2] 3*12 [7!2 7*2 7!2 8*2] 6*12 [5*2 5 5 5*2 5*2 2] 3*12 [4!2 4*2 4 4*2 7] <6*12 [8*6 9*6]>>")
.scale("bb:major")
.octave(-2)
.legato(0.6)
.release(0.2)
.lpf(800)
  .gain(0.6)
.s("square")

chords:
n("[0,2,4,11]".add("<0 5 <0 4> 4>"))
  .scale("bb:major")
.s("supersaw")
.lpf(1800)
.gain(0.3)

arp:
n(irand(8)).struct("x*12")
.ribbon(12,2)
.scale("bb:major")
.s("supersaw")
.fmi(0.3)
.fmh(1.5)
.decay(0.2)
.octave(2)
.room(1)
.lpf(1200)

idk:
n("<- [- 2 2 - <2!3 1> <2!3 0>]>")
  .octave(2)
  .decay(0.2)
.scale("bb:major")
.s("saw")
  .lpenv(2)
.lpf(800)


