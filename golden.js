//remake of "Golden" by Ejae, Audrey Nuna, & Rei Ami (from KPop Demon Hunters)

setcpm(123/4)

kick: s("[bd:5]*4").bank("tr909").dec(.4).duck(5).duckdepth(0.5).duckattack(0.15)
snare: s("[- sd:16]*2").bank("tr909")
closedhat: s("[hh hh hh]*4").bank("tr808").dec(.5)
ride: s("rd*4").bank("tr909").dec(.5).gain(0.2)

_versebass:
n("0*12".add("<3 0 -3 -2>"))
  .octave("-1")
  .decay(0.2)
  .gain(3)
  .s("triangle")
  .scale("g:major")
  .orbit(3)
  .duckdepth(1)
  ._punchcard()

chorusbass:
n("0*12".add("<3 4 [7 6] 5>"))
  .octave("-2")
  .decay(0.2)
  .gain(1.2)
  .s("square")
  .scale("g:major")
  .orbit(5)
  ._punchcard()

chords:
chord("C D [G D] Em")
  .slow(4)
  .s("supersaw")
  .postgain(0.4)
  .voicing()
  .orbit(5)
  ._punchcard()

chorusstrings:
note("[-@2 -2 2 1 -3 -1 3 2 0 4 [-1@2 0] 0@2 -@2]/4".add("7"))
  .legato("1")
  .gain(0.4)
  .s("gm_synth_strings_2")
  .room(1)
  .scale("g:major")
  ._punchcard()

_intro:
note("[1 - 2 - 2 - 3 2 - 1 0 - - - - -]")
  .s("gm_voice_oohs")
  .room(1)
  .delay(0.8)
  .delaysync(0.0625)
  .scale("g:major")
  ._punchcard()
