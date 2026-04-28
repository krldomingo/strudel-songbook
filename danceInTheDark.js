// remake of "Dance in the Dark" by Lady Gaga

setcpm(121/4)

kick: 
s("<bd:6!7 bd:6*2> <bd:6!7 bd:6*2> <bd:6!7 bd:6*4> <bd:6!3 <bd:6*2 [bd:6 - bd:6!2]>>")
.bank("tr808").transient(0.6).decay(0.5).room(0.5).duck(3).duckdepth(0.8).duckattack(0.3).gain(1)

kicksub: 
s("<bd:6!7 bd:6*2> <bd:6!7 bd:6*2> <bd:6!7 bd:6*4> <bd:6!3 <bd:6*2 [bd:6 - bd:6!2]>>")
.bank("tr808").lpf(70).transient(-0.1).decay(2).gain(1.5)

snare: 
stack(
s("[- sd:11]*2").bank("tr808").gain(0.5).speed(0.3).decay(0.5),
s("[- oh:1]*2").bank("tr808").gain(0.08),
s("<- [oh:1 -]*8>/4").bank("tr808").gain(0.06)
  )

hh: 
s("hh*16").gain(0.2).velocity("[<3 1.5 2 1.5> 1]*8").attack(0.01).room(0.5)

pad: 
note("<[F3,C4,F4,A4] [C3,G4,C4,<E4 [E4@6 F4 C4]>] [D3,A4,D4,F4] [Bb3,F4,Bb4,D4]>").slow(2).o(3).gain(0.5)
.s("supersaw").bpf("1000")

guitar:
n("[- <- [[- - 7 6 - 5 - 4] [- 7 - 6 - 5 - 4]]!3>]".slow(4).trans(7)).scale("f:major").s(" gm_overdriven_guitar").room(1).delay(0.5).delaysync(0.25)

bass: 
note("<0 -3 -2 -4>").slow(2).o(3).scale("f:major").octave(-1).gain(1.2)
.s("supersaw").lpf(4500).detune(1)

buzz:
note("0*8".add("<0 1 2 [0 -1]>/2")).scale("f:major").gain(0.2)
.s("supersaw").fm(3).fmh(1.5).attack(0.02)

pluck:
n("0 0 0 0 - 0*2 [- 0] 0".add("<0 -3 -2 -4>".slow(2)))
  .octave(-1).gain(0.6)
  .scale("f:major").delay(0.2)
  .s('saw').lpf(200).lpenv(4).legato(1.2)