//orig - hyperpop-ish charli xcx "claws" type beat

setcpm(141/4)

kick: 
s("<bd:5 -> <- bd:5> - <bd:5 bd:5*4>")
// s("bd:5!3 <bd:5!3 bd:5*4>")
.bank("tr909").dec(.4).gain(0.6).room(0.5).duck(3)

snare:
s("- - sd < - [sd sd sd sd]>")
// s("- sd - < sd [sd sd sd sd]>")
.bank("tr909").dec(.4).gain(1).fmi(1).fmh(1.3)

snareting:
n("- - 0 -")
// n("- 0 - 0")
.scale("g#:major").s("saw").release(0.2).legato(0.1).fmi(5).fmh(7.53).hpf(1000)

clap:
s("- cp")
.fast(2).bank("tr909").room(1).delay(1).delaysync("[0!3 0.125]/2").gain(0.5)

hat:
s("hh*16")
.bank("tr909").dec(.4).gain(0.2).ply("1 1 2 <1 2>")

bass: 
n("0*16".add("<0 2 5 3>"))
  .octave("[[-2 -1]!7 <[-2 -1] -2>]/2")
  .s("square")
  .decay(0.18)
  .gain(0.4)
  .lpf(600)
  .lpe(1)
  .o(3)
  .scale("g#:major")

subbass: 
n("<0 -> <- 0> - 0"
// n("0!4"
  .add("<0 2 5 3>"))
  .octave(-2)
  .s("sine")
  .decay(0.8)
  .release(0.2)
  .gain(2.5)
  .lpf(500)
  .lpe(10)
  .scale("g#:major")

arp:
n("[14 16 18]!3 [21*6]".add("<0 2 5 3>"))
  .s("supersaw")
  .decay(0.2)
  .detune(0.8)
  .unison(8)
  .gain(0.3)
  .scale("g#:major")
.pan(rand.range(0.2,0.8))

string:
n("0*16".add("2!3 1!5 5!3 4!5")).slow(4)
.octave(2)
.scale("g#:major")
.s("supersaw")
.room(0.5)
.bpf("1000:0.5")
.legato(0.5)
.adsr("0.1:0.1:0.5:0.2")
.gain(0.2)

growl:
n("<[0,-7] ->")
.octave(-1)
.unison(7)
.detune(0.7)
.delay(0.3)
.distort("9:0.04")
.legato(0.5)
.delaysync(0.25)
.room(1)
.o(3)
.scale("g#:major")
.s("supersaw,sine")